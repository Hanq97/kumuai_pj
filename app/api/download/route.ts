import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// SMTP configuration for Mailtrap or any SMTP provider
const SMTP_HOST = process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io"
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587")
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const FROM_EMAIL = process.env.SMTP_FROM_EMAIL || "noreply@kanri-one.jp"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@kanri-one.jp"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyType, companyName, lastName, firstName, email, phone, agreeNewsletter } = body

    // Validate required fields
    if (!companyType || !companyName || !lastName || !firstName || !email) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      )
    }

    const companyTypeLabels: Record<string, string> = {
      kumiai: "監理団体",
      touroku: "登録支援機関",
      ukeire: "受入れ企業",
      other: "その他",
    }

    const fullName = `${lastName} ${firstName}`

    // Check if SMTP is configured
    if (!SMTP_USER || !SMTP_PASS) {
      console.log("[v0] SMTP not configured, skipping email send")
      console.log("[v0] Download form data:", { companyName, fullName, email, companyType })
      // Return success even without email - don't block the user
      return NextResponse.json({ 
        success: true, 
        message: "資料請求を受け付けました（メール送信はスキップされました）" 
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Send notification email to admin
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `【監理ワン】新しい資料ダウンロード - ${companyName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f3a5d;">新しい資料ダウンロードリクエスト</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">企業区分</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${companyTypeLabels[companyType] || companyType}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">会社名</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${companyName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">お名前</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">メールアドレス</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">電話番号</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || "未入力"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">ニュースレター</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${agreeNewsletter ? "希望する" : "希望しない"}</td></tr>
          </table>
        </div>
      `,
    })

    // Add delay to avoid Mailtrap rate limit
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Send document email to user
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: "【監理ワン】資料をお届けいたします",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f3a5d;">資料ダウンロードのご案内</h2>
          <p>${fullName} 様</p>
          <p>この度は監理ワンの資料をご請求いただき、誠にありがとうございます。</p>
          <p>以下のリンクより資料をダウンロードいただけます。</p>
          <div style="text-align: center; margin: 24px 0;">
            <a href="https://kanri-one.jp/documents/kanri-one-guide.pdf" 
               style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              資料をダウンロード
            </a>
          </div>
          <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px;">
            監理ワン<br />
            Email: support@kanri-one.jp
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    )
  }
}
