import { AlertTriangle, FileWarning, Clock, MessageSquareMore } from "lucide-react"

const painPoints = [
  {
    icon: AlertTriangle,
    title: "「また法改正？」",
    description: "変わるたびに書類のフォーマットを修正し、ミスに怯える日々。"
  },
  {
    icon: FileWarning,
    title: "「Excelが重い」",
    description: "データが増えるたびに壊れるファイル、誰が最新か分からないストレス。"
  },
  {
    icon: Clock,
    title: "「期限が怖い」",
    description: "在留期限、定期報告。もし忘れたら「行政処分」というプレッシャー。"
  },
  {
    icon: MessageSquareMore,
    title: "「問い合わせの山」",
    description: "企業やスタッフからの「あの書類どこ？」に一日中追い回される。"
  }
]

export function PainPointsSection() {
  return (
    <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 text-balance">
            まだ、こんな<span className="text-accent">「時代遅れ」</span>な運用で
            <br className="hidden sm:block" />
            疲弊していませんか？
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex gap-4 p-5 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <point.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
