import { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 監理ワン",
  description: "監理ワンの特定商取引法に基づく表記についてご説明します。",
}

export default function TokushoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-foreground">特定商取引法に基づく表記</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10">
              特定商取引法に基づく表記
            </h1>
            
            <div className="prose prose-sm sm:prose-base max-w-none">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody className="divide-y divide-border">
                    <tr className="border-t border-border">
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 w-1/3 align-top">
                        販売事業者
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        株式会社監理ワン
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        代表者
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        代表取締役　山田 太郎
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        所在地
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        電話番号
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        03-XXXX-XXXX<br />
                        <span className="text-sm">（受付時間：平日10:00〜17:00）</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        メールアドレス
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        info@kanri-one.jp
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        サービスURL
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        https://kanri-one.jp
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        販売価格
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        各サービスページに記載の料金<br />
                        <span className="text-sm">（税込価格で表示しております）</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        販売価格以外の必要料金
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        インターネット接続に必要な通信料、その他本サービスの利用に必要な機器等の購入費用はお客様のご負担となります。
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        お支払い方法
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        クレジットカード決済<br />
                        銀行振込
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        お支払い時期
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        <strong>クレジットカード決済：</strong>各カード会社の規約に基づくお支払い<br />
                        <strong>銀行振込：</strong>請求書発行後14日以内
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        サービス提供時期
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        お申込み手続き完了後、即時ご利用いただけます。<br />
                        <span className="text-sm">（別途ご案内する場合を除く）</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        返品・キャンセルについて
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        サービスの性質上、お申込み後の返品・キャンセルはお受けしておりません。<br />
                        ただし、無料トライアル期間中のキャンセルは可能です。
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        契約期間
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        月額プラン：1ヶ月ごとの自動更新<br />
                        年額プラン：1年ごとの自動更新<br />
                        <span className="text-sm">※解約をご希望の場合は、更新日の前月末日までにお手続きください。</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        動作環境
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>インターネット環境（10Mbps以上推奨）</li>
                          <li>Microsoft Office 2019以降</li>
                          <li>PCメモリ8GB以上</li>
                          <li>Windows 10以上（64bit）</li>
                          <li>Google Chrome（最新版）</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground text-sm mt-8">
                最終更新日：2026年1月1日
              </p>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
