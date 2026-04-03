import { FileCheck, Shield, Users } from "lucide-react"

const solutions = [
  {
    icon: FileCheck,
    number: "01",
    title: "膨大な事務作業からの「自動化」による解放",
    description: "日々の支援記録を入力するだけで、入管や特定技能向けの複雑な申請書類をワンクリックで生成。手書きや手入力による集計・転記の手間を最小限に抑え、既存のExcelデータもスムーズに集約・一元管理できます。",
  },
  {
    icon: Shield,
    number: "02",
    title: "法改正と行政処分リスクからの「確実な期限管理」による解放",
    description: "2027年施行の「育成就労制度」への移行も、システムが自動で最新ルールにアップデート。4ヶ月前からの多段階アラート機能により、一箇所の失念も許されない「期限管理」のプレッシャーから組織を守り抜きます。",
  },
  {
    icon: Users,
    number: "03",
    title: "属人化とブラックボックス化からの「情報共有」による解放",
    description: "担当者の頭の中にしかなかった「進捗」や「申請履歴」をチーム全員で可視化。特定の人に負荷が集中する状態を解消し、弁護士監修の高度な判断が必要な場面でも、正確なデータに基づいて迅速に対応できる組織へと進化させます。",
  }
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 sm:mb-3 text-balance">
            監理ワンが提供する<span style={{ color: '#00EBB5' }}>「3つの解放」</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 rounded-xl p-4 sm:p-6 hover:bg-primary-foreground/15 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <solution.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-white">{solution.number}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary-foreground mb-2 sm:mb-3">
                {solution.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-xs sm:text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
