import { Metadata } from "next"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "プライバシーポリシー | 監理ワン",
  description: "監理ワンのプライバシーポリシーについてご説明します。",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">ホーム</Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-foreground">プライバシーポリシー</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 py-8 sm:py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
              株式会社 DEHA SOLUTIONS プライバシーポリシー
            </h1>
            
            <div className="prose prose-sm sm:prose-base max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-8">
                株式会社 DEHA SOLUTIONS（以下「当社」といいます。）は、当社が提供するサービス「監理ワン」（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
              </p>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第1条（個人情報の定義）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、連絡先、メールアドレスその他の記述等により特定の個人を識別できる情報を指します。また、他の情報と照合することで容易に特定の個人を識別できる情報を含みます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第2条（個人情報の収集方法）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、ユーザーが本サービスを利用する際に、氏名、会社名、役職、メールアドレス、電話番号などの個人情報をお尋ねすることがあります。また、ユーザーが本サービスを利用する際、ブラウザのクッキーやログデータなど、自動化技術を用いて技術的な情報を収集する場合があります。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第3条（個人情報の利用目的）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>本サービスの提供および運営のため</li>
                  <li>ユーザーからのお問い合わせに対する回答のため（本人確認を行うことを含む）</li>
                  <li>本サービスの新機能、更新情報、キャンペーン等および当社が提供する他のサービスの案内のため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                  <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                  <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第4条（個人情報の第三者提供）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li>当社が利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合</li>
                  <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第5条（安全管理措置）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、個人データの漏えい、滅失またはき損の防止その他の個人データの安全管理のために、必要かつ適切な措置を講じます。これには、以下の措置が含まれます。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>基本方針の策定:</strong> 個人データの適正な取扱いの確保のため、関係法令等の遵守に関する基本方針を策定しています。</li>
                  <li><strong>組織的安全管理措置:</strong> 個人データの取扱いに関する責任者を設置し、法や取扱規程に違反している事実または兆候を把握した場合の報告連絡体制を整備しています。</li>
                  <li><strong>技術的安全管理措置:</strong> 本サービスへのアクセス制御、ウイルス対策ソフトの導入、通信の暗号化（SSL/TLS）など、不正アクセスや情報漏えいを防止する技術的対策を講じています。</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第6条（個人情報の開示・訂正・利用停止）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、本人から個人情報の開示、訂正、追加、削除、または利用停止等を求められたときは、本人に対し、遅滞なくこれに対応いたします。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあります。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第7条（Cookieおよびアクセス解析ツールについて）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本サービスでは、ユーザーの利便性向上およびサービス改善のため、Cookie（クッキー）およびGoogle Analytics等のアクセス解析ツールを利用しています。これらのツールはトラフィックデータの収集のために使用され、収集されるデータは匿名であり、個人を特定するものではありません。ユーザーはブラウザの設定によりCookieを無効にすることで、これらの情報の収集を拒否することができます。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第8条（プライバシーポリシーの変更）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。変更後のプライバシーポリシーは、当社が別途定める場合を除いて、本ウェブサイトに掲載したときから効力を生じるものとします。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">第9条（お問い合わせ窓口）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-foreground font-medium">株式会社 DEHA SOLUTIONS</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    メールアドレス：support@kanri-one.jp
                  </p>
                </div>
              </section>

              <p className="text-muted-foreground text-sm mt-8">
                最終更新日：2026年4月22日
              </p>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
