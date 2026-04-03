import Image from "next/image"

const painPoints = [
  {
    iconImage: "/images/pain-icon1.png",
    title: "法改正と書類の迷宮",
    description: "制度が変わるたびに複雑な書類フォーマットを修正し、法的な整合性の確認だけで一日が終わる。わずかな記載ミスが命取りになるプレッシャー。"
  },
  {
    iconImage: "/images/pain-icon2.png",
    title: "属人化というブラックボックス",
    description: "「あの案件、入管の受付状況はどうなった？」が担当者にしか分からない。進捗が個人の頭の中にしかなく、組織としての対応力が機能していない。"
  },
  {
    iconImage: "/images/pain-icon3.png",
    title: "行政処分という隣り合わせの恐怖",
    description: "在留期限、定期面談、四半期報告。これらを「目視と付箋」で管理する危うさ。一箇所の失念が即、法令違反となり、組織の信頼を根底から揺るがす。"
  },
  {
    iconImage: "/images/pain-icon4.png",
    title: "事務作業に殺される支援の質",
    description: "夜間に及ぶ面談調整、終わりのない集計作業。本来大切にすべき「本人への生活支援」や「企業へのコンサル」の時間が、アナログな運用のせいで奪われ続けている。"
  }
]

export function PainPointsSection() {
  return (
    <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2 sm:mb-3 text-balance">
            まだ、こんな<span style={{ color: '#00EBB5' }}>「時代遅れ」</span>な運用で
            <br className="hidden sm:block" />
            疲弊していませんか？
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src={point.iconImage}
                    alt={point.title}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-primary-foreground mb-1 sm:mb-2">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
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
