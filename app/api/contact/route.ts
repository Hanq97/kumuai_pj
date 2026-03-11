import { NextResponse } from "next/server"
import { Resend } from "resend"

// Use Resend's test domain for development, or your verified domain for production
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "監理ワン <onboarding@resend.dev>"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "delivered@resend.dev"

export async function POST(request: Request) {
  try {
    // Debug: Check if env var exists
    const apiKey = process.env.RESEND_API_KEY
    console.log("[v0] RESEND_API_KEY exists:", !!apiKey)
    console.log("[v0] RESEND_API_KEY starts with:", apiKey?.substring(0, 6) || "undefined")
    
    // Check for API key
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "メール設定が完了していません。管理者にお問い合わせください。" },
        { status: 500 }
      )
    }
    
    const resend = new Resend(apiKey)
    
    const body = await request.json()
    const { organization, name, email, phone, inquiryType, message } = body

    // Validate required fields
    if (!organization || !name || !email || !inquiryType) {
      console.log("[v0] Validation failed - missing fields")
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

    console.log("[v0] Sending admin notification email...")
    
    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      subject: `【監理ワン】新規お問い合わせ：${inquiryTypeLabels[inquiryType] || inquiryType}`,
      html: `
        <h2>新規お問い合わせがありました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">団体名・会社名</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${organization}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">お名前</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">メールアドレス</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">電話番号</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone || "未入力"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">お問い合わせ種別</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${inquiryTypeLabels[inquiryType] || inquiryType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">お問い合わせ内容</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message || "未入力"}</td>
          </tr>
        </table>
      `,
    })
    
    console.log("[v0] Admin email sent:", adminEmailResult)
    console.log("[v0] Sending confirmation email to user:", email)

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "【監理ワン】お問い合わせありがとうございます",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">お問い合わせありがとうございます</h2>
          <p>${name} 様</p>
          <p>この度は監理ワンへお問い合わせいただき、誠にありがとうございます。</p>
          <p>以下の内容でお問い合わせを承りました。<br>担当者より2営業日以内にご連絡させていただきます。</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>団体名・会社名：</strong>${organization}</p>
            <p style="margin: 0 0 10px 0;"><strong>お名前：</strong>${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>メールアドレス：</strong>${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>電話番号：</strong>${phone || "未入力"}</p>
            <p style="margin: 0 0 10px 0;"><strong>お問い合わせ種別：</strong>${inquiryTypeLabels[inquiryType] || inquiryType}</p>
            <p style="margin: 0;"><strong>お問い合わせ内容：</strong><br>${message || "未入力"}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 14px;">
            ※ 本メールは自動送信されています。<br>
            ※ ご不明点がございましたら、下記までお問い合わせください。
          </p>
          
          <div style="background: #1e40af; color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0 0 5px 0; font-weight: bold;">監理ワン</p>
            <p style="margin: 0 0 5px 0; font-size: 14px;">Email: info@kanri-one.jp</p>
            <p style="margin: 0; font-size: 14px;">Tel: 03-XXXX-XXXX（平日 9:00〜18:00）</p>
          </div>
        </div>
      `,
    })
    
    console.log("[v0] User email sent:", userEmailResult)
    console.log("[v0] Contact form submission completed successfully")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    )
  }
}
