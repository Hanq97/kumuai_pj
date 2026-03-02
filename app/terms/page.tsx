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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-foreground">利用規約</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-10 sm:py-14">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10">
              利用規約
            </h1>
            
            <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-8">
                本利用規約（以下「本規約」といいます。）は、株式会社監理ワン（以下「当社」といいます。）が「監理ワン」の名称で提供するサービス及びその関連サービス（以下「本サービス」といいます。）の提供条件及び利用者と当社との間の権利義務関係を定めるものです。本サービスのご利用に際しては、本規約の全文をお読みいただいたうえで、同意いただく必要があります。
              </p>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第1条（適用）</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>本規約は、本サービスの提供条件及び本サービスの利用に関する利用者と当社との権利義務関係を定めることを目的とし、利用者と当社との間の本サービスに関する一切の関係に適用されます。</li>
                  <li>本サービスに関して本規約とは別に当社所定の申込書、又は個別契約等（以下「利用申込等」といいます。）が存在する場合、利用申込等も本規約の一部を構成するものとし、利用申込等の定めと本規約の定めが抵触するときは利用申込等の定めが優先するものとします。</li>
                  <li>本規約の内容と本規約以外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。</li>
                  <li>本サービスの利用者を希望する者は、当社ウェブサイト又は利用申込等において本規約を契約の内容とする旨の同意をしたとき、又は本サービスの利用を開始したとき（トライアル等、無償での利用を含みます。）のいずれか早い時点で、本規約の個別の条項についても同意したものとみなされ、本規約に基づく本サービス利用契約（以下「本契約」といいます。）が成立するものとします。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第2条（定義）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">利用規約において使用する用語の定義は、以下のとおりとします。</p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li><strong>個人情報</strong>：個人情報の保護に関する法律（平成15年法律第57号。その後の改正を含みます。）第2条に定義されるものをいいます。</li>
                  <li><strong>利用者</strong>：本規約の内容を承諾の上、当社と本契約を締結した法人、団体及び個人をいいます。</li>
                  <li><strong>当社ウェブサイト</strong>：当社が運営するウェブサイトをいいます。</li>
                  <li><strong>利用期間</strong>：利用者が本サービスを利用することができる期間をいいます。</li>
                  <li><strong>利用者データ</strong>：利用者が本サービスを利用して登録した情報等をいいます。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第3条（本規約の変更）</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>当社は、利用者の一般の利益に適合する場合又は本サービスの目的に反せず、かつ、変更の必要性、変更後の内容の相当性、その他の変更に係る事情に照らして合理的なものである場合には、利用者の個別的な承諾なく、本規約等を変更することができるものとします。</li>
                  <li>当社が別途定める場合を除き、本規約等の変更は、効力発生日までに当社ウェブサイト又は本サービス上に掲載する方法によって利用者へ事前に通知します。</li>
                  <li>本規約等の変更は、当社が別途定める場合を除き、当社ウェブサイト又は本サービス上に掲載した適用日より効力を生じるものとします。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第4条（本サービス）</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>本サービスは、当社の指定するウェブサイトを通じて提供されます。その他の方法による本サービス利用について、当社は一切の責任を負うものではありません。</li>
                  <li>本サービスの基本機能とは、次の各号に定める機能をいいます。
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>当社が指定した技能実習・特定技能制度に関する書類作成に必要な情報を登録する機能</li>
                      <li>登録した情報を編集及び出力する機能</li>
                      <li>登録した情報を閲覧する機能</li>
                    </ul>
                  </li>
                  <li>当社は、本サービスの開発・運営・管理を必要に応じて、第三者に委託することがあり、利用者はこれを予め承諾します。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第5条（設備等）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  利用者は、自己の費用負担と責任において、本サービスの利用にあたり必要となるハードウェア、OS、インターネット通信回線等の種類、バージョン、規格等の利用環境に適合する設備等を調達するものとします。
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 mt-4">
                  <p className="text-foreground font-medium mb-2">【必須環境】</p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>インターネット環境、ブロードバンド対応環境（10Mbps以上のインターネット回線）</li>
                    <li>Microsoft Office 2019以降（Office 365可）</li>
                    <li>PCメモリ8GB以上</li>
                    <li>Adobe Acrobat Reader DC</li>
                    <li>OS Windows 10以上（64bit）</li>
                    <li>Google Chrome（最新版）</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第6条（禁止事項）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他の利用者、またはその他第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為</li>
                  <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
                  <li>本サービスの運営を妨害するおそれのある行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                  <li>不正な目的を持って本サービスを利用する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第7条（本サービスの提供の停止等）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第8条（免責事項）</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                  <li>当社は、本サービスに起因して利用者に生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第9条（準拠法・裁判管轄）</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 ml-4">
                  <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                  <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
                </ol>
              </section>

              <p className="text-muted-foreground text-sm mt-8">
                制定日：2026年1月1日
              </p>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
