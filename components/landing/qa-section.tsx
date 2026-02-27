"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const qaItems = [
  {
    question: "料金について教えてください",
    answer: "初期費用0円、月額20,000円〜でご利用いただけます。登録人数や機能によってプランが異なりますので、詳しくはお問い合わせください。",
  },
  {
    question: "キャンペーンなどありますか？",
    answer: "現在、30日間の無料トライアルキャンペーンを実施しております。全機能をお試しいただけます。",
  },
  {
    question: "登録支援機関以外も使えますか？",
    answer: "はい、監理団体、登録支援機関、受入企業など、外国人材に関わるすべての組織でご利用いただけます。",
  },
  {
    question: "特定技能以外にも対応してますか？",
    answer: "はい、技能実習制度、特定技能制度、そして2027年開始予定の育成就労制度にも対応しております。",
  },
  {
    question: "スマートフォンからも利用可能ですか？",
    answer: "スマートフォンやタブレット（iPad）でも対応しております。\nただし、画面が小さいと編集もしずらいので、人材管理としてご利用ください。",
  },
  {
    question: "CSVファイルで出したりすることは可能でしょうか？",
    answer: "はい、各種データをCSV形式でエクスポートできます。また、Excel・Word形式での書類出力にも対応しております。",
  },
  {
    question: "AIチャットボットとはどんな機能？",
    answer: "外国人材からの質問に24時間自動で回答するAIチャットボットです。多言語対応で、よくある質問への対応工数を大幅に削減できます。",
  },
  {
    question: "定期報告書も作成出来ますか？",
    answer: "はい、入管への定期報告書も1クリックで自動生成できます。法改正時は書式も自動で更新されます。",
  },
  {
    question: "導入までどのくらいかかりますか？",
    answer: "既存のExcelデータをインポートするだけで、最短当日から運用を開始できます。導入サポートも無料で提供しております。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer: "データは国内サーバーで厳重に管理し、SSL暗号化通信、定期的なバックアップ、アクセス権限管理機能を備えております。",
  },
]

export function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="qa" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <p className="text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Q & A</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            ゼロマネを導入する前に
            <br />
            <span className="text-primary">よくいただくご質問</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col gap-2 sm:gap-3">
          {qaItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index}
                className="rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 text-left transition-colors cursor-pointer ${
                    isOpen 
                      ? "bg-primary" 
                      : "bg-card hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <span className={`font-bold text-sm sm:text-lg shrink-0 ${
                      isOpen ? "text-primary-foreground" : "text-primary"
                    }`}>
                      Q{index + 1}
                    </span>
                    <span className={`font-medium text-sm sm:text-base ${
                      isOpen ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <Minus className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 ml-2 text-primary-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 ml-2 text-primary" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="bg-card px-3 sm:px-5 py-3 sm:py-4 pl-10 sm:pl-16">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
