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
                        販売事業者名
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        株式会社DEHA SOLUTIONS
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        運営責任者
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        ファム・ミン・フン
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        所在地
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        〒104-0033<br />
                        東京都中央区新川一丁目27番8号　新川大原ビル2階
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        電話番号
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        (+81) 3-6260-6226<br />
                        <span className="text-sm">※受付時間：平日 10:00〜19:00</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        メールアドレス
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        support@kanri-one.jp
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        販売価格
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        各サービスページに記載の通り
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        商品代金以外の必要料金
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        ・消費税<br />
                        ・インターネット接続にかかる通信料等はお客様のご負担となります
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        支払方法
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        ・銀行振込（請求書払い）
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        支払時期
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        ・銀行振込：請求書発行後、指定期日までにお支払い
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        サービス提供時期
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        お申し込み手続き完了後、即日または当社が定める開始日よりご利用可能
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        返品・キャンセルについて
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        サービスの性質上、契約成立後の返品・返金は原則としてお受けしておりません。<br />
                        ただし、当社の責任による重大な不具合がある場合はこの限りではありません。
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        解約について
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        お客様は所定の手続きにより、いつでも解約することができます。<br />
                        解約日は当社が定める規約に基づき適用されます。<br />
                        なお、日割りでの返金は行っておりません。
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        動作環境
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        本サービスは以下の環境での利用を推奨しております。<br />
                        ・最新バージョンのGoogle Chrome / Safari / Edge
                      </td>
                    </tr>
                    <tr>
                      <th className="py-4 px-4 text-left font-medium text-foreground bg-secondary/30 align-top">
                        特別条件
                      </th>
                      <td className="py-4 px-4 text-muted-foreground">
                        本サービスは法人向けサービスです。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
