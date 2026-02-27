import Image from "next/image"
import { Zap, RefreshCw, BarChart3, Languages, Receipt, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "超高速ドキュメント生成",
    description: "入管提出書類も簡単作成が可能です。マスター入力がメインですので、未経験のスタッフの方でも簡単に作業いただくことが可能です。",
    image: "/images/feature-document.jpg"
  },
  {
    icon: RefreshCw,
    title: "法制度自動アップデート",
    description: "法律が変わっても、システム側で自動更新。2027年育成就労制度にも完全対応。修正コストゼロで常に最新の書式を利用できます。",
    image: "/images/feature-legal.jpg"
  },
  {
    icon: BarChart3,
    title: "ダッシュボード可視化",
    description: "在留資格の期限管理、受け入れ機関の管理も簡単です。全実習生のステータスをグラフで把握し、一目で「今やるべきこと」がわかります。",
    image: "/images/feature-dashboard.jpg"
  },
  {
    icon: Languages,
    title: "多言語切替機能",
    description: "日本語・英語・インドネシア語・ベトナム語・中国語に対応。外国人スタッフも迷わず操作でき、コミュニケーションがスムーズになります。",
    image: "/images/feature-multilingual.jpg"
  },
  {
    icon: Receipt,
    title: "請求書・領収書自動発行",
    description: "経理業務まで一気通貫で管理。請求書・領収書の自動生成で、計算ミスも送付忘れもなくなります。経理担当者の負担を大幅に軽減。",
    image: "/images/feature-billing.jpg"
  },
  {
    icon: Users,
    title: "複数組織・拠点管理",
    description: "複数の監理団体・支援機関を一つの画面で管理。組織間の切り替えも簡単で、グループ全体の状況を一元的に把握できます。",
    image: "/images/feature-multiorg.jpg"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            ゼロマネの<span className="text-primary">特徴的な機能</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            「手間がかからない」ことを機能で証明します
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12 lg:space-y-16">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative">
                    {/* Background decoration */}
                    <div className={`absolute inset-0 bg-muted/50 rounded-2xl transform ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />
                    
                    {/* Main image container with border */}
                    <div className="relative bg-card rounded-xl overflow-hidden border-4 border-primary shadow-lg">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`${isEven ? 'lg:pl-4' : 'lg:pr-4'}`}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
