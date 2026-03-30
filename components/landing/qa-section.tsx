"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const qaItems = [
  {
    question: "2027年施行予定の「育成就労制度」への対応はどうなりますか？",
    answer: "法改正に合わせてシステムを自動アップデートいたします。新しい制度のルールや書類フォーマットにも柔軟に対応するため、お客様側での追加作業やシステムの買い替えなしで、常に最新の法規制に準拠した運用が可能です。",
  },
  {
    question: "現在Excelや紙で管理しているデータは移行できますか？",
    answer: "はい、可能です。既存の人材データや企業情報、支援履歴などを一括でインポートする機能を備えています。導入時のデータ移行についてもサポートいたしますので、スムーズにデジタル管理へ切り替えられます。",
  },
  {
    question: "特定技能の「日本人との賃金比較」など、複雑な書類も作成できますか？",
    answer: "はい、ワンクリックで生成可能です。蓄積されたデータに基づき、法的に整合性の取れた書類を自動で作成します。作成にかかる事務工数を大幅に引き下げ、書類の不備による差し戻しのリスクも軽減します。",
  },
  {
    question: "外出先や夜間の対応など、スマホからでも入力できますか？",
    answer: "スマートフォンやタブレットからも操作可能です。面談の直後や、緊急の病院同行の際などにその場で支援記録を入力できるため、事務所に戻ってからの転記作業の手間を省き、報告漏れを防ぎます。",
  },
  {
    question: "在留期限や報告期限の管理はどのように行われますか？",
    answer: "システムが各期限を自動算出し、期限が近づくと「マルチアラート」で通知します。担当者だけでなく管理者にも段階的に通知が飛ぶため、一箇所の失念が大きなトラブルに繋がるリスクを回避します。",
  },
  {
    question: "複数の監理団体や登録支援機関を運営していますが、一括管理できますか？",
    answer: "はい、複数拠点・複数組織の切り替え管理に対応しています。本部のアカウントから各拠点の進捗やコンプライアンス状況をリアルタイムで俯瞰できるため、組織全体のガバナンス強化に繋がります。",
  },
  {
    question: "専門知識の少ないスタッフでも使いこなせますか？",
    answer: "直感的な操作性を重視した設計になっています。入力すべき項目がガイドされ、複雑な計算や転記をシステムが自動で行うため、実務経験が浅いスタッフの方でも正確に業務を進めることが可能です。",
  },
  {
    question: "外国人スタッフが操作するための多言語対応はありますか？",
    answer: "日本語、英語、ベトナム語などの主要言語に対応しています。外国人支援スタッフが母国語で正確に情報を入力・確認できるため、コミュニケーションの齟齬や入力ミスを未然に防ぎます。",
  },
  {
    question: "セキュリティ体制やデータの保護はどうなっていますか？",
    answer: "信頼性の高いクラウドサーバーを採用し、厳重なアクセス制限とデータ暗号化を行っています。大切な個人情報や企業機密を扱うシステムとして、最高水準のセキュリティ環境を維持しています。",
  },
  {
    question: "導入後のサポート体制はどうなっていますか？",
    answer: "操作方法のレクチャーはもちろん、実務上の不明点についても専任のサポートチームが迅速に対応いたします。弁護士監修の強みを活かし、実務に即した安心の運用体制を共に構築します。",
  },
  {
    question: "特定技能以外の在留資格（技能実習など）にも対応していますか？",
    answer: "はい、対応しています。特定技能だけでなく、技能実習や技術・人文知識・国際業務など、主要な在留資格の管理が可能です。資格ごとに異なる期限管理や必要書類の出力にも対応しており、組織内の外国人材を一元管理できます。",
  },
  {
    question: "管理しているデータをCSVファイルで出力することは可能ですか？",
    answer: "はい、可能です。人材一覧、企業一覧、支援履歴などのデータをCSV形式でエクスポートできます。社内の他の基幹システムとの連携や、独自の集計・分析を行いたい場合にも柔軟にご活用いただけます。",
  },
  {
    question: "AIチャットボットとはどのような機能ですか？",
    answer: "膨大な実務知識を学習したAIが、24時間体制で実務の疑問に回答する機能です。「この申請に必要な書類は？」「特定技能の移動時の手続きは？」といった質問に即座に答えるため、経験の浅いスタッフの教育コストを抑え、業務の停滞を防ぎます。",
  },
  {
    question: "四半期ごとの「定期報告書」も作成できますか？",
    answer: "はい、作成可能です。日々の支援記録をシステムに入力しておくだけで、入管へ提出する「支援実施状況報告書」などの法定書類をワンクリックで生成します。手作業での集計や転記の手間を大幅に削減し、作成ミスも防げます。",
  },
  {
    question: "申し込みから導入まで、どのくらいの期間がかかりますか？",
    answer: "最短で即日〜1週間程度でアカウントの発行が可能です。既存データの移行量や、スタッフの方への操作レクチャーの有無によって前後しますが、スムーズな実務開始に向けて専任スタッフが伴走サポートいたします。",
  },
  {
    question: "セキュリティ対策は万全ですか？（個人情報の取り扱いなど）",
    answer: "信頼性の高いクラウドサーバーを採用し、通信の暗号化や厳重なアクセス制限を徹底しています。弁護士事務所も認める高いセキュリティ水準で、大切な個人情報や企業機密を安全に保護・管理いたします。",
  },
]

export function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="qa" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <p className="text-primary font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Q & A</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            監理ワンを導入する前に
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
                  className={`w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 text-left transition-colors cursor-pointer ${isOpen
                      ? "bg-primary"
                      : "bg-card hover:bg-secondary/50"
                    }`}
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <span className={`font-bold text-sm sm:text-lg shrink-0 ${isOpen ? "text-primary-foreground" : "text-primary"
                      }`}>
                      Q{index + 1}
                    </span>
                    <span className={`font-medium text-sm sm:text-base ${isOpen ? "text-primary-foreground" : "text-foreground"
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
