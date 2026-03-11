import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Send notification email to admin
    await resend.emails.send({
      from: "監理ワン <noreply@kanri-one.jp>",
      to: ["info@kanri-one.jp"], // Change to your actual admin email
      subject: `【監理ワン】資料ダウンロード申込：${companyName}`,
      html: `
        <h2>資料ダウンロードの申込がありました</h2>
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
            <td style="padding: 10px; border: 1px solid #ddd; background: #f5f5f5; font-weight: bold;">ニュースレター</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${agreeNewsletter ? "希望する" : "希望しない"}</td>
          </tr>
        </table>
      `,
    })

    // Send document email to user
    await resend.emails.send({
      from: "監理ワン <noreply@kanri-one.jp>",
      to: [email],
      subject: "【監理ワン】資料ダウンロードのご案内",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">資料ダウンロードのご案内</h2>
          <p>${fullName} 様</p>
          <p>この度は監理ワンの資料をお申込みいただき、誠にありがとうございます。</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #1e40af;">資料ダウンロード</h3>
            <p style="margin: 0 0 15px 0;">以下のリンクより資料をダウンロードいただけます。</p>
            <a href="https://kanri-one.jp/documents/kanri-one-brochure.pdf" 
               style="display: inline-block; background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              資料をダウンロード
            </a>
          </div>
          
          <h3 style="color: #1e40af; margin-top: 30px;">資料の内容</h3>
          <ul style="padding-left: 20px;">
            <li>監理ワンでできること</li>
            <li>導入実績や選べる理由について</li>
            <li>機能一覧・良くある質問など</li>
          </ul>
          
          <div style="background: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <h4 style="margin: 0 0 10px 0; color: #1e40af;">無料デモのご案内</h4>
            <p style="margin: 0;">
              実際の画面を見ながら、貴社の業務に合わせた活用方法をご提案いたします。<br>
              所要時間は約30分程度です。お気軽にお申し込みください。
            </p>
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

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    )
  }
}
