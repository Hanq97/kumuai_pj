import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration - お名前.com SMTP
const SMTP_HOST = process.env.SMTP_HOST || "mail18.onamae.ne.jp"
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465")
const SMTP_USER = process.env.SMTP_USER // support@kanri-one.jp
const SMTP_PASS = process.env.SMTP_PASS
const FROM_EMAIL = process.env.FROM_EMAIL || "support@kanri-one.jp"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "support@kanri-one.jp"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyType, companyName, name, email, phone } = body

    // Validate required fields
    if (!companyType || !companyName || !name || !email) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      )
    }

    const companyTypeLabels: Record<string, string> = {
      kumiai: "監理団体（技能実習）",
      touroku: "登録支援機関（特定技能）",
      ukeire: "受入れ企業",
      okuri: "送り出し機関",
      other: "その他",
    }

    // Format current date/time for Japan timezone
    const now = new Date()
    const japanTime = now.toLocaleString("ja-JP", { 
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    })

    const companyTypeLabel = companyTypeLabels[companyType] || companyType

    // Check if SMTP is configured
    if (!SMTP_USER || !SMTP_PASS) {
      console.log("[v0] SMTP not configured, skipping email send")
      console.log("[v0] Download form data:", { companyName, name, email, companyType })
      return NextResponse.json({
        success: true,
        message: "資料請求を受け付けました"
      })
    }

    // Create transporter with お名前.com SMTP settings
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Send notification email to admin
    try {
      await transporter.sendMail({
        from: `監理ワン <${FROM_EMAIL}>`,
        replyTo: email,
        to: ADMIN_EMAIL,
        subject: `【資料DL/${companyTypeLabel}】${companyName} - ${name} 様`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.8;">
            <p>管理者 各位<br />営業担当 各位</p>
            <p>お疲れ様です。<br />公式サイトの資料ダウンロードフォームより、新規リクエストがありました。内容を確認の上、速やかなフォローアップをお願いいたします。</p>
            
            <p style="margin-top: 24px;">===================================================</p>
            <p><strong>■ 顧客情報・リクエスト詳細</strong></p>
            
            <p>【企業区分】 ${companyTypeLabel}<br />
            【会社名】 ${companyName}<br />
            【担当者名】 ${name} 様<br />
            【Email】 ${email}<br />
            【Tel】 ${phone || "未入力"}</p>
            
            <p>===================================================</p>
            
            <p style="margin-top: 24px; color: #666; font-size: 12px;">
              送信元：監理ワン 公式サイト・資料ダウンロードフォーム<br />
              送信日時：${japanTime}
            </p>
          </div>
        `,
      })
    } catch (adminEmailError) {
      console.error("[v0] Failed to send admin email:", adminEmailError)
    }

    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Send document email to user
    try {
      await transporter.sendMail({
        from: `監理ワン <${FROM_EMAIL}>`,
        to: email,
        subject: "【監理ワン】資料のダウンロードリクエストをいただき誠にありがとうございます。",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.8;">
            <p>${companyName}<br />${name} 様</p>
            
            <p>いつも大変お世話になっております。<br />
            外国の方労働者管理システム「監理ワン」運営事務局でございます。</p>
            
            <p>この度は、数あるサービスの中から「監理ワン」に関心をお寄せいただき、誠にありがとうございます。また、この度は資料のダウンロードリクエストをいただき重ねて御礼申し上げます。</p>
            
            <p>頂戴いたしましたリクエスト内容につきまして、無事に受領いたしました。弊社担当者が内容を確認し、資料を添付してあらためてご連絡させていただきます。</p>
            
            <p>誠に恐れ入りますが、今しばらくお待ちいただけますと幸いです。</p>
            
            <p style="margin-top: 24px;">===================================================</p>
            <p><strong>■ リクエスト内容の控え</strong></p>
            
            <p>【企業区分】 ${companyTypeLabel}<br />
            【会社名】 ${companyName}<br />
            【お名前】 ${name} 様<br />
            【メールアドレス】 ${email}<br />
            【電話番号】 ${phone || "未入力"}</p>
            
            <p>===================================================</p>
            
            <p style="margin-top: 16px; font-size: 12px; color: #666;">
              本メールはシステムによる自動返信となっております。万が一、心当たりのない場合や、数日経過しても弊社からの連絡がない場合には、お手数をおかけいたしますが、下記のお問い合わせ先までご一報いただけますと幸いです。
            </p>
            
            <p>今後とも、「監理ワン」を何卒よろしくお願い申し上げます。</p>
            
            <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              --------------------------------------------------<br />
              監理ワン 運営事務局<br />
              お問い合わせ： support@kanri-one.jp<br />
              監理ワン公式: https://kanri-one.jp<br />
              --------------------------------------------------
            </p>
          </div>
        `,
      })
    } catch (userEmailError) {
      console.error("[v0] Failed to send user email:", userEmailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    )
  }
}
