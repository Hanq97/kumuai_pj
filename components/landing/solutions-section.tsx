import { FileCheck, Shield, Bot } from "lucide-react"

const solutions = [
  {
    icon: FileCheck,
    number: "01",
    title: "書類作成の「ゼロ化」",
    description: "登録データから入管・OTIT向けの申請書類を1クリックで生成。既存のExcelもドラッグ&ドロップで即座に移行できます。",
  },
  {
    icon: Shield,
    number: "02",
    title: "法律変更への「完全自動追従」",
    description: "2027年の育成就労制度への移行も、ユーザー側での作業は一切不要。4ヵ月前から在留期限を自動通知します。",
  },
  {
    icon: Bot,
    number: "03",
    title: "AIチャットボットによる「自律サポート」",
    description: "「この申請の仕方は？」といった問い合わせはAIが24時間即答。複雑な相談は履歴を完全保持して対応します。",
  }
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 text-balance">
            ゼロマネが提供する<span className="text-accent">「3つの解放」</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-4xl font-bold text-primary-foreground/20">{solution.number}</span>
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
