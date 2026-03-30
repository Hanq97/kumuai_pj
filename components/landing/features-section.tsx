import Image from "next/image"
import { CalendarClock, Users, FileCheck, ClipboardCheck, Building2, Receipt, Languages, RefreshCw } from "lucide-react"

const features = [
  {
    icon: CalendarClock,
    title: "タスク・期限管理の自動化",
    subtitle: "【解決】「期限管理」のプレッシャーをシステムが肩代わり",
    description: "在留期限や四半期報告、定期面談の予定を自動算出。期限が近づくと「マルチアラート」で担当者と管理者に通知が届くため、膨大な対象者の管理も漏れなく確実に行えます。",
    image: "/images/feature-document.jpg"
  },
  {
    icon: Users,
    title: "人材情報の一元管理",
    subtitle: "【解決】「必要な情報」にいつでも、どこからでもアクセス",
    description: "基本プロフィール、在留資格、パスポート情報に加え、ベトナム人特有の「推薦状（Giay tien cu）」の進捗まで一画面に集約。バラバラだった情報を統合し、チーム全員で最新状況を共有できます。",
    image: "/images/feature-legal.jpg"
  },
  {
    icon: FileCheck,
    title: "高度な書類自動生成",
    subtitle: "【解決】「複雑な入管書類」作成の工数を劇的に削減",
    description: "蓄積されたデータから、特定技能の賃金比較や支援実施報告書をワンクリックで生成。弁護士監修のロジックに基づいた正確なフォーマットにより、書類作成の心理的負担を軽くします。",
    image: "/images/feature-dashboard.jpg"
  },
  {
    icon: ClipboardCheck,
    title: "支援義務のトラッキング",
    subtitle: "【解決】「夜間・休日の対応」も漏らさず実績として蓄積",
    description: "面談記録や緊急の病院同行など、実施した支援をその場でスマホから記録。いつ・誰が・どのような支援を行ったかの履歴を完全に保持し、実地検査時にも迅速にエビデンスを提示できます。",
    image: "/images/feature-multilingual.jpg"
  },
  {
    icon: Building2,
    title: "複数組織・拠点の横断管理",
    subtitle: "【解決】「組織全体の稼働状況」をリアルタイムに把握",
    description: "複数の監理団体や登録支援機関、各拠点を一つの画面で切り替え管理。本部管理者が各拠点の進捗やコンプライアンス遵守状況を俯瞰でき、組織全体のガバナンスを強化します。",
    image: "/images/feature-billing.jpg"
  },
  {
    icon: Receipt,
    title: "請求・支援委託費の自動集計",
    subtitle: "【解決】「毎月の経理作業」の複雑な計算をシンプルに",
    description: "管理人数やオプション支援に基づき、請求金額を自動で算出。請求書発行まで一気通貫で行えるため、営業担当と経理担当の確認作業を大幅に効率化します。",
    image: "/images/feature-multiorg.jpg"
  },
  {
    icon: Languages,
    title: "多言語切り替え機能",
    subtitle: "【解決】「外国人スタッフ」との情報共有をスムーズに",
    description: "日本語、ベトナム語、英語などの主要言語に対応。外国人支援スタッフも母国語で正確に情報を入力・確認できるため、現場での入力ミスやコミュニケーションの齟齬を防ぎます。",
    image: "/images/feature-document.jpg"
  },
  {
    icon: RefreshCw,
    title: "法制度アップデートへの自動追従",
    subtitle: "【解決】「法改正」への対応コストと不安を最小限に",
    description: "2027年施行の「育成就労制度」など、法律や書式の変更に合わせてシステムを自動更新。ユーザー側で特別な作業をすることなく、常に最新の法規制に準拠した運用を継続できます。",
    image: "/images/feature-legal.jpg"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            監理ワンの<span className="text-primary">主要機能一覧</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            現場の課題に寄り添い、実務の精度と効率を同時に引き上げます。
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
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-accent font-medium text-sm sm:text-base mb-2 sm:mb-3">
                      {feature.subtitle}
                    </p>
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
