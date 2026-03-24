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
    const { organization, name, email, phone, inquiryType, message } = body

    // Validate required fields
    if (!organization || !name || !email || !inquiryType) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      )
    }

    const inquiryTypeLabels: Record<string, string> = {
      demo: "無料デモの予約",
      document: "資料請求",
      pricing: "料金について",
      other: "その他のご相談",
    }

    // Check if SMTP is configured
    if (!SMTP_USER || !SMTP_PASS) {
      console.log("[v0] SMTP not configured, skipping email send")
      console.log("[v0] Contact form data:", { organization, name, email, inquiryType, message })
      return NextResponse.json({ 
        success: true, 
        message: "お問い合わせを受け付けました" 
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
        subject: `【監理ワン】新しいお問い合わせ`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f3a5d;">新しいお問い合わせがありました</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">団体名・会社名</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${organization}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">お名前</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">メールアドレス</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">電話番号</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || "未入力"}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">お問い合わせ種別</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${inquiryTypeLabels[inquiryType] || inquiryType}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">お問い合わせ内容</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message || "未入力"}</td></tr>
            </table>
          </div>
        `,
      })
    } catch (adminEmailError) {
      console.error("[v0] Failed to send admin email:", adminEmailError)
    }

    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Send confirmation email to user
    try {
      await transporter.sendMail({
        from: `監理ワン <${FROM_EMAIL}>`,
        to: email,
        subject: "【監理ワン】お問い合わせありがとうございます",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f3a5d;">お問い合わせありがとうございます</h2>
            <p>${name} 様</p>
            <p>この度は監理ワンにお問い合わせいただき、誠にありがとうございます。</p>
            <p>以下の内容でお問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。</p>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 4px 0;"><strong>団体名・会社名：</strong>${organization}</p>
              <p style="margin: 4px 0;"><strong>お問い合わせ種別：</strong>${inquiryTypeLabels[inquiryType] || inquiryType}</p>
              <p style="margin: 4px 0;"><strong>お問い合わせ内容：</strong>${message || "未入力"}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #666; font-size: 12px;">
              監理ワン<br />
              Email: support@kanri-one.jp
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
