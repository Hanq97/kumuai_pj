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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-balance">
            ゼロマネが<span className="text-primary">選ばれる理由</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20">{reason.number}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {reason.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                {reason.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
