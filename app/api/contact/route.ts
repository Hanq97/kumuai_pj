import { NextResponse } from "next/server"
import { Resend } from "resend"

// Email configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "監理ワン <onboarding@resend.dev>"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "delivered@resend.dev"

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] RESEND_API_KEY not configured, skipping email send")
      console.log("[v0] Contact form data:", { organization, name, email, inquiryType, message })
      return NextResponse.json({ 
        success: true, 
        message: "お問い合わせを受け付けました（メール送信はスキップされました）" 
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        replyTo: email,
        to: [ADMIN_EMAIL],
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

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
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
