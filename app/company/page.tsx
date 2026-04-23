import { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { ChevronRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "運営会社 | 監理ワン",
  description: "監理ワンを運営する株式会社DEHA SOLUTIONSの会社概要をご紹介します。",
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-foreground">運営会社</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-8 sm:py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
              会社概要
            </h1>

            {/* Company Info Table */}
            <div className="border-t border-border mb-8 sm:mb-12">
              {/* 社名 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  社名
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  株式会社DEHA SOLUTIONS
                </div>
              </div>

              {/* 代表取締役 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  代表取締役
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  長田 明雄（ファム・ミン・フン）
                </div>
              </div>

              {/* 専務取締役 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  専務取締役
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  ダン・クアン・トゥアン
                </div>
              </div>

              {/* 取締役 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  取締役
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  松澤 隆之
                </div>
              </div>

              {/* 東京本社 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  東京本社
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  〒104-0033東京都中央区新川1丁目27-8 新川大原ビル 2F
                </div>
              </div>

              {/* 設立 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  設立
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  平成29年1月6日
                </div>
              </div>

              {/* 事業内容 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  事業内容
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground mb-1">IT SOLUTIONS & SERVICES</p>
                      <ul className="space-y-0.5 pl-2">
                        <li>・受託開発</li>
                        <li>・AI総合ソリューション開発</li>
                        <li>・クラウドサービス</li>
                        <li>・IFSエンジニアリングサービス</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">OUR PRODUCTS</p>
                      <ul className="space-y-0.5 pl-2">
                        <li>・Live-Bid（オークションシステムパッケージ）</li>
                        <li>・管理ワン（組合・監理団体・登録支援機関向けプラットフォーム）</li>
                        <li>・AIVIS（エッジAI搭載ミマモリカメラ）</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">HR SERVICES</p>
                      <ul className="space-y-0.5 pl-2">
                        <li>・チョータツ準委任サービス</li>
                        <li>・人材紹介サービス</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 認定 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  認定
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  筑波大学発ベンチャー企業
                </div>
              </div>

              {/* 許可 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  許可
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  有料職業紹介事業許可証(許可番号:13-ユ-315627)
                </div>
              </div>

              {/* 加盟団体 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  加盟団体
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  <p>東京商工会議所</p>
                  <p>一般社団法人東京ニュービジネス協議会(NBC)</p>
                  <p>一般社団法人 日本ベトナムITビジネス推進協会</p>
                </div>
              </div>

              {/* 取引金融機関 */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  取引金融機関
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  みずほ銀行・楽天銀行
                </div>
              </div>

              {/* 公開サイト */}
              <div className="flex flex-col sm:flex-row border-b border-border">
                <div className="w-full sm:w-36 lg:w-44 px-4 py-3 sm:py-4 text-sm font-medium text-foreground">
                  公開サイト
                </div>
                <div className="flex-1 px-4 pb-3 sm:py-4 text-sm text-muted-foreground">
                  <a 
                    href="https://deha.co.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://deha.co.jp/
                  </a>
                </div>
              </div>
            </div>

            {/* Access / Map Section */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                アクセス
              </h2>
              
              {/* Google Maps Embed */}
              <div className="aspect-video sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0168961768397!2d139.78222661525887!3d35.67596698019556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897ec7b3c001%3A0x7b9b4e3fc83e1c16!2z44CSMzg0LTAwMzMg5p2x5Lqs6YO95Lit5aSu5Yy65paw5bed77yR5LiB55uu77yS77yX4oiS77yYIOaWsOW3neWkp-WOn-ODk-ODqw!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DEHA SOLUTIONS オフィス所在地"
                  className="w-full h-full"
                />
              </div>
              
              {/* Access Info */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p>東京メトロ日比谷線・東西線「茅場町駅」徒歩5分</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=〒104-0033+東京都中央区新川1丁目27-8+新川大原ビル+2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4" />
                  Google Mapsで開く
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
