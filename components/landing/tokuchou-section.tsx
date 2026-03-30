import { Cloud, FileSpreadsheet, CalendarClock, FolderArchive } from "lucide-react"

const characteristics = [
  {
    icon: Cloud,
    title: "法律準拠のクラウド一元管理",
    description: "最新の育成就労制度や特定技能の複雑な情報を、安全なクラウドに集約。バラバラだったExcelやLINEの情報を統合し、二重入力や情報の属人化を根絶します。"
  },
  {
    icon: FileSpreadsheet,
    title: "ワンクリックで書類出力",
    description: "日々の支援記録から、入管提出用の膨大な申請書類を自動生成。使い慣れたExcel・Word形式で出力されるため、最終的な微調整や法的な精査もスムーズです。"
  },
  {
    icon: CalendarClock,
    title: "行政処分を防ぐ期限アラート",
    description: "在留期限や四半期報告、定期面談の時期をシステムが自動算出。独自の「守護神アラート」が多段階で通知し、一箇所の失念も許されない法的期限を完璧に守り抜きます。"
  },
  {
    icon: FolderArchive,
    title: "完全ペーパーレスでDXを実現",
    description: "申請書類だけでなく、推薦状や賃金台帳などの関連書類すべてをクラウド保存。検索性が飛躍的に向上し、「あの書類どこ？」という問い合わせ対応に追われることがなくなります。"
  }
]

export function TokuchouSection() {
  return (
    <section id="tokuchou" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            監理ワンの<span className="text-primary">特徴</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            プロの現場が求める「守り」と「効率」を両立させます
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto">
          {characteristics.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-4 sm:p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
