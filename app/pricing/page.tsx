import { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { Check, Building2, Users, Zap, Shield, Clock, ChevronDown } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "料金プラン | 監理ワン",
  description: "監理ワンの料金プランをご紹介。技能実習・特定技能・育成就労の監理業務を効率化するクラウドシステム。IT導入補助金対象ツールで最大150万円の補助が受けられます。",
}

const plans = [
  {
    name: "スタータープラン",
    description: "小規模な監理団体・登録支援機関向け",
    price: "50,000",
    unit: "月額（税別）",
    features: [
      "技能実習生・特定技能外国人 50名まで",
      "ユーザーアカウント 5名まで",
      "基本帳票作成機能",
      "在留期限アラート",
      "定期面談管理",
      "メールサポート",
    ],
    highlighted: false,
    cta: "お問い合わせ",
  },
  {
    name: "スタンダードプラン",
    description: "成長中の監理団体・登録支援機関向け",
    price: "100,000",
    unit: "月額（税別）",
    features: [
      "技能実習生・特定技能外国人 200名まで",
      "ユーザーアカウント 無制限",
      "全帳票作成機能（公式対応）",
      "守護神アラート（期限管理）",
      "定期面談・四半期報告管理",
      "企業・人材マスター管理",
      "CSVインポート・エクスポート",
      "電話・メールサポート",
    ],
    highlighted: true,
    cta: "お問い合わせ",
  },
  {
    name: "エンタープライズプラン",
    description: "大規模な監理団体・登録支援機関向け",
    price: "要相談",
    unit: "",
    features: [
      "技能実習生・特定技能外国人 無制限",
      "ユーザーアカウント 無制限",
      "全機能利用可能",
      "2027年育成就労制度対応",
      "カスタム帳票作成",
      "API連携",
      "専任サポート担当",
      "導入支援・研修対応",
    ],
    highlighted: false,
    cta: "お問い合わせ",
  },
]

const features = [
  "公式帳票対応済み",
  "クラウド対応",
  "アカウント数無制限",
  "備付帳票対応",
  "印刷連携",
  "母国語対応",
  "CSVインポート",
  "マスター登録",
  "CSVエクスポート",
  "マスター再取得",
  "アラート機能",
  "特定技能データコンバート",
  "マスター逆反映",
  "業務フロー機能",
  "ストレージ機能",
  "一括登録",
  "フローカスタマイズ",
  "在留オンライン申請対応",
  "複製登録",
  "タスク管理機能",
  "アカウント連携機能",
]

const schedules = [
  { period: "1次締切分", deadline: "2026年4月30日", result: "2026年6月下旬" },
  { period: "2次締切分", deadline: "2026年6月30日", result: "2026年8月下旬" },
  { period: "3次締切分", deadline: "2026年9月30日", result: "2026年11月下旬" },
  { period: "4次締切分", deadline: "2026年12月15日", result: "2027年2月下旬" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              料金プラン
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              シンプルで分かりやすい料金体系
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
              監理団体・登録支援機関の規模に合わせて最適なプランをお選びいただけます。<br />
              全プラン30日間の無料トライアル付き。
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 sm:p-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-xl md:scale-105"
                      : "bg-card border border-border shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      おすすめ
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    {plan.price === "要相談" ? (
                      <span className={`text-3xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                    ) : (
                      <>
                        <span className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                          ¥{plan.price}
                        </span>
                        <span className={`text-sm ml-2 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {plan.unit}
                        </span>
                      </>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                        <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/#contact">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-lg mb-2 block">
                ＼ 圧倒的コストパフォーマンス ／
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                これだけの機能が<br className="sm:hidden" />業界トップクラスの低価格で利用できます。
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 sm:px-4 sm:py-2.5 bg-card border border-border rounded-lg text-xs sm:text-sm text-foreground hover:border-primary/50 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/#features">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    機能詳細を見る
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center bg-secondary/30 rounded-2xl p-8 sm:p-12">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                お気軽にお問い合わせください。
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                各プランの違いや、お見積もりのご依頼など、<br />
                お気軽にお問い合わせください。
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  お見積もりについて<br className="sm:hidden" />お問い合わせをする方はこちら
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Online Demo */}
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              監理ワンをオンラインデモ体験
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              複数ある機能をオンラインデモで簡単に体験できます。<br />
              以下からお問い合わせください。
            </p>
            <Link href="/#contact">
              <Button variant="outline" size="lg" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background">
                オンラインデモはこちら
              </Button>
            </Link>
          </div>
        </section>

        {/* IT補助金 Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-lg mb-2 block">
                ＼ 監理ワンはIT導入補助金事業者です ／
              </span>
              <p className="text-muted-foreground mb-8">
                デジタル化・AI導入補助金の利用方法が分からない方は<br />
                気軽にご相談ください
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-2xl p-6 sm:p-8 lg:p-12 border border-border shadow-sm mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground text-center mb-2">
                クラウド利用料を最大2年分補助
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-center mb-4 sm:mb-6">
                総費用の最大1/2・150万円補助
              </h3>
              <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                中小企業・小規模事業者を対象に、<br className="hidden sm:block" />
                ITツール導入の費用の一部が補助されるIT導入補助金。
              </p>
              <div className="bg-secondary/30 rounded-xl p-6 text-center mb-6">
                <p className="text-muted-foreground">
                  補助率は費用の最大1/2となり、<br />
                  クラウド利用料については最大2年分が補助されます。
                </p>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <p>※クラウド製品は最大2年分の利用料が補助されます。</p>
                <p>※申請には一定の条件がございます。詳細はお問い合わせください。</p>
              </div>
            </div>

            {/* Subsidy Flow Illustration */}
            <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Building2 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-primary" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">経済産業省<br />IT導入補助金事務所</p>
                </div>
                <div className="flex flex-col items-center py-2 sm:py-0">
                  <div className="text-center mb-2">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">最大150</span>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground">万円の</span>
                    <br />
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground">費用を補助</span>
                  </div>
                  <div className="w-12 sm:w-16 lg:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-accent mt-2" />
                  <p className="text-xs text-muted-foreground mt-2 text-center max-w-[180px] sm:max-w-[200px]">
                    業務効率化・売上アップを<br />サポートするITツールを導入する<br />経費の一部を補助
                  </p>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-accent" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">中小企業<br />小規模事業者</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-center mb-2">
                2026年
              </h3>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center mb-4 px-2">
                デジタル化・AI導入補助金申請交付スケジュール
              </h4>
              <p className="text-center text-muted-foreground mb-8">
                補助金についてはお気軽にご相談ください。
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                {schedules.map((schedule, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between bg-primary text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-lg cursor-pointer list-none">
                      <span className="font-medium text-sm sm:text-base">{schedule.period}</span>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="bg-card border border-t-0 border-border rounded-b-lg px-4 sm:px-6 py-3 sm:py-4 -mt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div>
                          <span className="text-muted-foreground">申請締切：</span>
                          <span className="font-medium text-foreground">{schedule.deadline}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">交付決定：</span>
                          <span className="font-medium text-foreground">{schedule.result}</span>
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link href="/download">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                    資料請求はこちら
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    お問い合わせはこちら
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">安心のセキュリティ</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">SSL暗号化通信・データバックアップで大切な情報を保護</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">30日間無料トライアル</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">全機能をお試しいただけます。クレジットカード不要</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-card rounded-xl border border-border">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">導入サポート無料</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">専任スタッフが導入から運用までサポート</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  )
}
