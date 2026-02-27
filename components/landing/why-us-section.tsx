import { Sparkles, Wallet, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    number: "01",
    title: "「使いやすさ」への執着",
    description: "どんなに多機能でも、使いにくければゴミです。ITが苦手な方でもマニュアルなしで動かせる直感UI。",
    highlight: "マニュアル不要",
  },
  {
    icon: Wallet,
    number: "02",
    title: "導入コストの圧倒的低さ",
    description: "既存のExcelを読み込むだけで、今日から運用が始められます。面倒な初期設定は一切不要。",
    highlight: "初期費用0円",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "「攻め」の管理へ",
    description: "事務に追われる時間を、受入企業への手厚いフォローや新規営業の時間に変えられます。",
    highlight: "業務時間50%削減",
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-12 lg:py-16 bg-secondary/50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            ゼロマネが<span className="text-primary">選ばれる理由</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-muted-foreground/20">{reason.number}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4">
                {reason.description}
              </p>
              <span className="inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                {reason.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
