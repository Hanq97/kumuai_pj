import { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { ChevronRight, Building2, MapPin, Phone, Mail, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "運営会社 | 監理ワン",
  description: "監理ワンを運営する株式会社DEHA SOLUTIONSの会社概要をご紹介します。",
}

const companyInfo = [
  { label: "会社名", value: "株式会社DEHA SOLUTIONS" },
  { label: "代表者", value: "グエン・トゥアン・アン" },
  { label: "設立", value: "2016年10月" },
  { label: "資本金", value: "1,000万円" },
  { label: "所在地", value: "〒104-0033 東京都中央区新川1丁目27-8 新川大原ビル 2F" },
  { label: "電話番号", value: "(+81) 3-6260-6226" },
  { label: "事業内容", value: "システム開発、オフショア開発、ITコンサルティング、SaaSサービス提供" },
  { label: "加盟団体", value: "一般社団法人 日本ベトナムITビジネス推進協会" },
  { label: "取引金融機関", value: "みずほ銀行・楽天銀行" },
]

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
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl mb-4 sm:mb-6">
                <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                運営会社
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                監理ワンは、日本とベトナムを繋ぐIT企業として、
                外国人材受入れに関わる皆様の業務効率化を支援しています。
              </p>
            </div>

            {/* Company Info Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 bg-primary/5 border-b border-border">
                <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  会社概要
                </h2>
              </div>
              <div className="divide-y divide-border">
                {companyInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row"
                  >
                    <div className="w-full sm:w-40 lg:w-48 px-4 sm:px-6 py-3 sm:py-4 bg-secondary/30 font-medium text-sm text-foreground shrink-0">
                      {item.label}
                    </div>
                    <div className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-card rounded-xl border border-border p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">所在地</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  東京都中央区新川1-27-8<br />
                  新川大原ビル 2F
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">電話番号</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <a href="tel:+81362606226" className="hover:text-primary transition-colors">
                    (+81) 3-6260-6226
                  </a>
                  <br />
                  <span className="text-xs">平日 10:00〜19:00</span>
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-4 sm:p-6 text-center hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">メール</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <a href="mailto:support@kanri-one.jp" className="hover:text-primary transition-colors">
                    support@kanri-one.jp
                  </a>
                  <br />
                  <span className="text-xs">24時間受付</span>
                </p>
              </div>
            </div>

            {/* Access / Map Section */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 sm:p-6 bg-primary/5 border-b border-border">
                <h2 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  アクセス
                </h2>
              </div>
              
              {/* Google Maps Embed */}
              <div className="aspect-video sm:aspect-[16/9] lg:aspect-[21/9] w-full">
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
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-2">最寄り駅</h3>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      <li>東京メトロ日比谷線・東西線「茅場町駅」徒歩5分</li>
                      <li>東京メトロ半蔵門線「水天宮前駅」徒歩8分</li>
                      <li>JR京葉線「八丁堀駅」徒歩10分</li>
                    </ul>
                  </div>
                  <div className="sm:shrink-0">
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
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
