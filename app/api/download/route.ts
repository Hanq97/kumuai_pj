import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration
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

    // Check for SMTP credentials
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("[v0] SMTP credentials not configured")
      // Return success anyway to not block form submission
      return NextResponse.json({ success: true, warning: "Email not sent - SMTP not configured" })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const companyTypeLabels: Record<string, string> = {
      kumiai: "監理団体",
      touroku: "登録支援機関",
      ukeire: "受入れ企業",
      other: "その他",
    }

    const fullName = `${lastName} ${firstName}`

    // Send notification email to admin
    await transporter.sendMail({
      from: `監理ワン <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      subject: "【監理ワン】資料ダウンロード申込がありました",
      html: `
        <h2>資料ダウンロード申込がありました</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">企業区分</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${companyTypeLabels[companyType] || companyType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">会社名</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">お名前</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
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
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">メルマガ配信</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${agreeNewsletter ? "希望する" : "希望しない"}</td>
          </tr>
        </table>
      `,
    })

    // Send document email to user
    await transporter.sendMail({
      from: `監理ワン <${FROM_EMAIL}>`,
      to: email,
      subject: "【監理ワン】資料ダウンロードのご案内",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">資料ダウンロードのご案内</h2>
          <p>${fullName} 様</p>
          <p>この度は監理ワンの資料をご請求いただき、誠にありがとうございます。</p>
          
          <div style="background: #f0f9ff; border: 2px solid #1e40af; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0 0 15px 0; font-weight: bold; color: #1e40af;">資料ダウンロード</p>
            <a href="https://kanri-one.jp/documents/kanri-one-guide.pdf" 
               style="display: inline-block; background: #1e40af; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              資料をダウンロード
            </a>
            <p style="margin: 15px 0 0 0; font-size: 12px; color: #666;">
              ※ リンクは7日間有効です
            </p>
          </div>
          
          <h3 style="color: #1e40af; margin-top: 30px;">資料の内容</h3>
          <ul style="color: #333; line-height: 1.8;">
            <li>監理ワンでできること</li>
            <li>導入実績や選べる理由について</li>
            <li>機能一覧・良くある質問など</li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 14px;">
            ご不明点がございましたら、お気軽にお問い合わせください。<br>
            デモのご予約も承っております。
          </p>
          
          <div style="background: #1e40af; color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0 0 5px 0; font-weight: bold;">監理ワン</p>
            <p style="margin: 0 0 5px 0; font-size: 14px;">Email: info@kanri-one.jp</p>
            <p style="margin: 0; font-size: 14px;">Tel: 03-XXXX-XXXX（平日 9:00〜18:00）</p>
          </div>
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
