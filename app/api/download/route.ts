import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"
import fs from "fs"

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
      kumiai: "組合監理団体",
      touroku: "登録支援機関",
      ukeire: "受け入れ企業",
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

    // Read the PDF document to attach
    const documentPath = path.join(process.cwd(), "public", "documents", "kanri-one-guide.md")
    let attachments: nodemailer.SendMailOptions["attachments"] = []
    
    try {
      const documentContent = fs.readFileSync(documentPath)
      attachments = [
        {
          filename: "監理ワン_サービス紹介資料.md",
          content: documentContent,
        }
      ]
    } catch (fileError) {
      console.error("[v0] Failed to read document file:", fileError)
    }

    // Send notification email to admin
    try {
      await transporter.sendMail({
        from: `監理ワン <${FROM_EMAIL}>`,
        replyTo: email,
        to: ADMIN_EMAIL,
        subject: `【資料請求/${companyTypeLabel}】${companyName} 様（資料自動送付済）`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.8;">
            <p>管理者 各位 営業担当 各位</p>
            
            <p>お疲れ様です。<br />
            公式サイトより資料請求があり、システムによる自動送付処理が完了しました。<br />
            以下の情報を確認し、必要に応じてインサイドセールス等のフォローアップをお願いします。</p>
            
            <p style="margin-top: 24px;">===================================================</p>
            
            <p><strong>■ 顧客情報</strong></p>
            
            <p>
              【区分】 ${companyTypeLabel}<br />
              【会社名】 ${companyName}<br />
              【担当者名】 ${name} 様<br />
              【Email】 ${email}<br />
              【Tel】 ${phone || "未入力"}
            </p>
            
            <p><strong>■ 送付済み資料</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>監理ワン サービス紹介資料（工数削減フォーカス版）</li>
              <li>新制度移行ガイド</li>
            </ul>
            
            <p><strong>■ 次のネクストアクション（推奨）</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>${companyTypeLabel} に応じたアプローチを検討してください。</li>
              <li><strong>監理団体の場合：</strong> 監査対応機能への関心が高いため、デモの提案が有効。</li>
              <li><strong>登録支援機関の場合：</strong> 特定技能管理の効率化・コスト削減がフックになりやすい。</li>
              <li>必要に応じて電話またはメールでのヒアリングをお願いします。</li>
            </ul>
            
            <p>===================================================</p>
            
            <p style="margin-top: 24px; color: #666; font-size: 12px;">
              送信元：監理ワン 公式サイト・資料ダウンロードシステム<br />
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

    // Send document email to user with attachment
    try {
      await transporter.sendMail({
        from: `監理ワン <${FROM_EMAIL}>`,
        to: email,
        subject: "【監理ワン】資料送付のご案内：実習・特定技能の管理業務を完全デジタル化するソリューション",
        attachments: attachments,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.8;">
            <p>${companyName} ${name} 様</p>
            
            <p>お世話になっております。</p>
            
            <p>「監理ワン」運営事務局のグェンでございます。</p>
            
            <p>この度は、弊社サービス「監理ワン」の資料をダウンロードいただき、誠にありがとうございます。</p>
            
            <p>技能実習から育成就労制度への移行を控え、現在、多くの監理団体・登録支援機関様より「法改正対応への不安」や「管理業務の属人化」についてのご相談をいただいております。</p>
            
            <p>監理ワンは、単なる管理システムではありません。<br />
            制度改正に自動追従する監査対応と現場の事務工数を90%削減する機能を両立し、貴組織の運営基盤を次世代へアップデートするためのDXプラットフォームです。</p>
            
            <p>ご請求いただきました資料を本メールに添付いたしました。ぜひご高覧ください。</p>
            
            <p style="margin-top: 24px;">===================================================</p>
            
            <p><strong>■ 本メールの添付資料</strong></p>
            
            <p>
              <strong>監理ワン サービス紹介資料</strong><br />
              〜 書類作成・管理の「手間」を最小限にし、運営の質を高める仕組み 〜
            </p>
            
            <p>
              <strong>【特別付録】2027年 育成就労制度へのスムーズな移行ガイド</strong><br />
              〜 法改正を見据えた、今から準備すべき3つのポイント 〜
            </p>
            
            <p style="font-size: 12px; color: #666;">
              ※ファイルが開けない場合は、お手数ですが返信にてお知らせください。
            </p>
            
            <p>===================================================</p>
            
            <p style="margin-top: 16px;">
              「まずは現状の業務が、新制度でも通用するのか確認したい」<br />
              「他社はどのようにDXを進めているのか、事例を聞きたい」
            </p>
            
            <p>といったご要望も大歓迎です。<br />
            オンラインでの製品デモも随時承っておりますので、ご関心がございましたらお気軽にご返信ください。</p>
            
            <p>貴団体の業務負担を減らし、本来の「支援業務」に集中できる環境作りのお手伝いができることを願っております。</p>
            
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
