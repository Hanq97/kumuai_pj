import { NextResponse } from "next/server"
import { Resend } from "resend"

// Email configuration
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "監理ワン <onboarding@resend.dev>"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "delivered@resend.dev"

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] RESEND_API_KEY not configured, skipping email send")
      console.log("[v0] Download form data:", { companyName, fullName, email, companyType })
      return NextResponse.json({
        success: true,
        message: "資料請求を受け付けました（メール送信はスキップされました）"
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        replyTo: email,
        to: [ADMIN_EMAIL],
        subject: `【監理ワン】新しい資料ダウンロード`,
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
    } catch (adminEmailError) {
      console.error("[v0] Failed to send admin email:", adminEmailError)
    }

    // Send document email to user
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "【監理ワン】資料請求を受け付けました",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f3a5d;">資料請求ありがとうございます</h2>
            <p>${fullName} 様</p>

            <p>
              この度は監理ワンの資料をご請求いただき、誠にありがとうございます。<br/>
              現在、担当者が内容を確認しております。
            </p>

            <p>
              資料につきましては、確認後あらためてメールにてお送りいたしますので、<br/>
              恐れ入りますが、しばらくお待ちください。
            </p>

            <p>
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>

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
