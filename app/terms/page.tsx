import { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "利用規約 | 監理ワン",
  description: "監理ワンの利用規約についてご説明します。",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-foreground">利用規約</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-8 sm:py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
              監理ワン 利用規約
            </h1>
            
            <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-8">
                株式会社 DEHA SOLUTIONS（以下「当社」といいます。）は、当社が提供するサービス「監理ワン」（以下「本サービス」といいます。）の利用条件を以下のとおり定めます。本サービスを利用するすべてのユーザーは、本規約に同意したものとみなされます。
              </p>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第1条（適用）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本規約は、本サービスの提供条件および本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第2条（ユーザー登録）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  本サービスの利用を希望する法人または団体（以下「ユーザー」といいます。）は、本規約を遵守することに同意し、当社の定める一定の情報（以下「登録情報」といいます。）を当社の定める方法で当社に提供することにより、ユーザー登録を申請することができます。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、当社の基準に従って、ユーザー登録の可否を判断し、当社が登録を認めた場合にユーザー登録は完了します。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第3条（アカウントの管理）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ユーザーは、自己の責任において、本サービスのアカウントおよびパスワードを適切に管理・保管するものとします。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  アカウントの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任はユーザーが負うものとし、当社は一切の責任を負いません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第4条（利用料金および支払方法）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ユーザーは、本サービスの利用の対価として、当社が別途定める利用料金を、当社が指定する支払方法により当社に支払うものとします。振込手数料その他支払に必要な費用はユーザーの負担とします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第5条（禁止事項）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはなりません。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>本サービスをリバースエンジニアリング、逆コンパイル、または逆アセンブルする行為</li>
                  <li>当社のネットワークまたはシステム等に過度な負荷をかける行為</li>
                  <li>第三者の個人情報、プライバシー、またはその他の権利を侵害する行為</li>
                  <li>本サービスを本来の目的以外（不正な監査記録の改ざん等）に使用する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第6条（本サービスの停止等）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>本サービスにかかるコンピュータ・システムの点検または保守作業を緊急に行う場合</li>
                  <li>コンピュータ、通信回線等が事故により停止した場合</li>
                  <li>その他、当社が停止または中断を必要と判断した場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第7条（知的財産権）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本サービスに関する知的財産権は、すべて当社または当社にライセンスを許諾している者に帰属しています。ユーザーに本サービスの使用を許諾するものであり、本サービスのライセンスを譲渡するものではありません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第8条（免責事項）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>法的助言の否定:</strong> 本サービスは業務効率化を支援するツールであり、当社は弁護士・行政書士等の専門家ではないため、本サービスによって得られた情報が必ずしも完全な法的正当性を保証するものではありません。ユーザーは自己の責任において最終的な法的手続きを行うものとします。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>損害賠償の制限:</strong> 当社は、ユーザーが本サービスを利用したこと、または利用できなかったことによって被った損害について、当社の故意または重大な過失がある場合を除き、一切の責任を負いません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第9条（契約の解除等）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ユーザーが本規約のいずれかの条項に違反した場合、または登録情報に虚偽があることが判明した場合、当社は、事前の通知なしに、当該ユーザーについて本サービスの利用を停止またはユーザー登録を抹消することができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第10条（規約の変更）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、必要と判断した場合には、ユーザーへの通知なしにいつでも本規約を変更することができるものとします。変更後の本規約は、当社のウェブサイトに掲載したときからその効力を生じます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第11条（秘密保持）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ユーザーおよび当社は、本サービスの利用にあたって知り得た相手方の秘密情報を、相手方の事前の書面による承諾なく第三者に開示・漏洩してはなりません。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第12条（準拠法および管轄裁判所）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  本規約の準拠法は日本法とします。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  本規約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
