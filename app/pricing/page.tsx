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
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 sm:p-12 lg:p-16">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    お気軽にお問い合わせください
                  </h2>
                  <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 max-w-xl mx-auto">
                    各プランの違いや、お見積もりのご依頼など、<br className="hidden sm:block" />
                    専門スタッフが丁寧にご対応いたします。
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                      お見積もり・お問い合わせはこちら
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Demo */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div className="text-center md:text-left">
                  <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    無料デモ体験
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    監理ワンを<br className="hidden sm:block" />オンラインデモ体験
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base mb-6">
                    複数ある機能をオンラインデモで簡単に体験できます。<br />
                    専門スタッフがご案内いたします。
                  </p>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">30分〜60分のオンライン説明会</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">実際の画面を見ながら機能を確認</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">貴社の課題に合わせたご提案</span>
                    </li>
                  </ul>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 rounded-xl">
                      オンラインデモを予約する
                    </Button>
                  </Link>
                </div>
                
                {/* Right - Visual */}
                <div className="relative">
                  <div className="relative bg-card rounded-2xl border border-border shadow-xl p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-secondary rounded w-3/4 mb-2" />
                          <div className="h-2 bg-secondary/60 rounded w-1/2" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-secondary rounded w-2/3 mb-2" />
                          <div className="h-2 bg-secondary/60 rounded w-1/3" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-secondary rounded w-4/5 mb-2" />
                          <div className="h-2 bg-secondary/60 rounded w-2/5" />
                        </div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                      LIVE DEMO
                    </div>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT補助金 Section */}
        <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            {/* Header Badge */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">監理ワンはIT導入補助金事業者です</span>
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                デジタル化・AI導入補助金の利用方法が分からない方は<br />
                気軽にご相談ください
              </p>
            </div>

            {/* Main Card */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
                {/* Card Header with gradient */}
                <div className="bg-gradient-to-r from-primary to-primary/80 px-6 sm:px-8 lg:px-12 py-8 sm:py-10 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    クラウド利用料を最大2年分補助
                  </h2>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white/90">
                    総費用の最大1/2・150万円補助
                  </h3>
                </div>
                
                {/* Card Body */}
                <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
                  <p className="text-center text-muted-foreground text-sm sm:text-base mb-8">
                    中小企業・小規模事業者を対象に、<br className="hidden sm:block" />
                    ITツール導入の費用の一部が補助されるIT導入補助金。
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 text-center border border-primary/10">
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1/2</div>
                      <p className="text-sm text-muted-foreground">補助率（最大）</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-6 text-center border border-accent/10">
                      <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">2年分</div>
                      <p className="text-sm text-muted-foreground">クラウド利用料補助</p>
                    </div>
                  </div>
                  
                  <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-1">
                    <p>※クラウド製品は最大2年分の利用料が補助されます。</p>
                    <p>※申請には一定の条件がございます。詳細はお問い合わせください。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsidy Flow Illustration */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
              <div className="bg-card rounded-3xl border border-border shadow-lg p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
                  {/* From */}
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-primary/20">
                      <Building2 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground">経済産業省</p>
                    <p className="text-xs text-muted-foreground">IT導入補助金事務所</p>
                  </div>
                  
                  {/* Arrow with amount */}
                  <div className="flex flex-col items-center py-4 sm:py-0 flex-1">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-pulse text-white px-6 py-3 rounded-2xl shadow-lg">
                        <div className="text-center">
                          <span className="text-xl sm:text-2xl lg:text-3xl font-bold">最大150万円</span>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2">
                        <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </div>
                      <div className="sm:hidden flex justify-center mt-2">
                        <svg className="w-6 h-6 text-accent rotate-90" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center max-w-[200px]">
                      業務効率化をサポートする<br />ITツール導入費用を補助
                    </p>
                  </div>
                  
                  {/* To */}
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-accent/20">
                      <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-accent" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground">中小企業</p>
                    <p className="text-xs text-muted-foreground">小規模事業者</p>
                  </div>
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
