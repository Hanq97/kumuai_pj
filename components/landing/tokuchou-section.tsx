import { Cloud, FileSpreadsheet, CalendarClock, FolderArchive } from "lucide-react"

const characteristics = [
  {
    icon: Cloud,
    title: "クラウド一元管理",
    description: "企業情報や外国人材情報は安全なクラウドに一元管理します。"
  },
  {
    icon: FileSpreadsheet,
    title: "Excel・Word出力",
    description: "各種申請書類をExcel・Wordで出力しますので、訂正も簡単です。"
  },
  {
    icon: CalendarClock,
    title: "期限管理・アラート",
    description: "申請や更新の時期や期限を把握でき、期限ギリギリで慌てることがなくなります。"
  },
  {
    icon: FolderArchive,
    title: "ペーパーレス化",
    description: "申請書類のみならず関連書類すべてをクラウド保存。社内のキャビネットがなくなります。"
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
            シンプルで使いやすい機能で、業務効率を最大化します
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
