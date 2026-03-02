export type BlogCategory = "法改正情報" | "操作ガイド" | "お知らせ"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  date: string
  author: string
  authorRole: string
  thumbnail: string
  isImportant?: boolean
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "2027-ikusei-shuro-schedule",
    title: "【重要】2027年育成就労制度への移行スケジュールが確定",
    excerpt: "政府は2027年に導入予定の育成就労制度について、具体的な移行スケジュールを発表しました。監理団体・登録支援機関が今から準備すべきポイントを解説します。",
    content: `
## 育成就労制度とは

育成就労制度は、従来の技能実習制度に代わる新しい外国人材受入れ制度です。2027年の施行に向けて、政府から具体的なスケジュールが発表されました。

## 移行スケジュールの概要

### 2025年
- 関連法案の国会審議・成立
- 詳細な制度設計の公表

### 2026年
- 受入れ機関・監理団体向け説明会の開催
- システム移行準備期間

### 2027年
- 育成就労制度の正式施行
- 技能実習制度からの完全移行

## 監理団体が準備すべきこと

1. **書類フォーマットの変更対応**
   - 新制度に対応した各種申請書類の準備
   - システムの更新・入れ替え検討

2. **受入れ企業への説明準備**
   - 制度変更のポイント資料作成
   - 説明会の開催計画

3. **人員体制の見直し**
   - 新制度に対応できる人材の確保
   - 研修計画の策定

## 監理ワンの対応

監理ワンは、育成就労制度への移行を見据えて、システムの自動アップデート機能を実装しています。法改正に伴う書類フォーマットの変更も、システムが自動で対応するため、お客様の作業負担を最小限に抑えます。
    `,
    category: "法改正情報",
    date: "2025-02-20",
    author: "田中 健太",
    authorRole: "法務アドバイザー",
    thumbnail: "/images/blog/blog-1.jpg",
    isImportant: true,
    readTime: "5分"
  },
  {
    id: "2",
    slug: "zairyu-card-alert-setup",
    title: "監理ワン新機能：在留カード期限アラートの設定方法",
    excerpt: "在留カードの期限管理を自動化する新機能をリリースしました。設定方法と活用のポイントを詳しく解説します。",
    content: `
## 在留カード期限アラート機能とは

在留カードの有効期限を自動で監視し、期限が近づくと担当者にアラートを送信する機能です。期限切れによるトラブルを未然に防ぐことができます。

## 設定手順

### ステップ1：アラート設定画面を開く
1. ダッシュボードから「設定」をクリック
2. 「アラート設定」を選択

### ステップ2：通知タイミングの設定
- 90日前（推奨）
- 60日前
- 30日前
- 14日前

複数のタイミングを選択することも可能です。

### ステップ3：通知先の設定
- メール通知
- システム内通知
- LINE通知（オプション）

## 活用のポイント

1. **複数の通知タイミングを設定**
   - 90日前と30日前など、複数回の通知を設定することで確実に対応できます

2. **担当者の設定**
   - 技能実習生ごとに担当者を設定し、適切な人に通知が届くようにします

3. **更新手続きのチェックリスト連携**
   - アラートから直接更新手続きのチェックリストに移動できます
    `,
    category: "操作ガイド",
    date: "2025-02-18",
    author: "佐藤 美咲",
    authorRole: "カスタマーサクセス",
    thumbnail: "/images/blog/blog-2.jpg",
    readTime: "3分"
  },
  {
    id: "3",
    slug: "ginou-jisshu-to-ikusei-shuro-preparation",
    title: "技能実習から育成就労へ：監理団体が今すぐ準備すべき5つのこと",
    excerpt: "2027年の制度移行まであと2年。今から始めるべき準備事項を5つのポイントに絞って解説します。早めの準備が成功の鍵です。",
    content: `
## はじめに

技能実習制度から育成就労制度への移行は、監理団体にとって大きな転換点となります。スムーズな移行のために、今すぐ始めるべき5つの準備事項をご紹介します。

## 1. 現行業務の棚卸し

まずは現在の業務フローを整理しましょう。

- どの業務に時間がかかっているか
- Excel管理している情報は何か
- 紙で管理している書類は何か

これらを可視化することで、新制度への移行時に効率化できるポイントが見えてきます。

## 2. システム導入の検討

新制度では、より高度な管理が求められます。

- 書類の電子化対応
- データの一元管理
- 法改正への迅速な対応

これらに対応できるシステムの導入を検討しましょう。

## 3. 人員体制の見直し

新制度では求められる業務内容も変わります。

- 専門知識を持つ人材の確保
- 研修体制の整備
- 業務分担の見直し

## 4. 受入れ企業への情報提供

受入れ企業への早めの情報提供も重要です。

- 制度変更の概要説明
- スケジュールの共有
- 協力体制の構築

## 5. 情報収集の体制づくり

法改正の最新情報を常にキャッチできる体制を整えましょう。

- 官公庁のメルマガ登録
- 業界団体への加入
- セミナーへの参加
    `,
    category: "法改正情報",
    date: "2025-02-15",
    author: "田中 健太",
    authorRole: "法務アドバイザー",
    thumbnail: "/images/blog/blog-3.jpg",
    isImportant: true,
    readTime: "7分"
  },
  {
    id: "4",
    slug: "system-maintenance-march",
    title: "システムメンテナンスのお知らせ（3月15日）",
    excerpt: "2025年3月15日（土）深夜にシステムメンテナンスを実施いたします。メンテナンス中はサービスをご利用いただけません。",
    content: `
## メンテナンス概要

サービス品質向上のため、下記の日程でシステムメンテナンスを実施いたします。

## 日時

**2025年3月15日（土）02:00 〜 06:00**（予定）

※ 作業状況により終了時間が前後する場合がございます。

## 影響範囲

メンテナンス中は以下のサービスがご利用いただけません。

- 監理ワン全機能
- API連携
- 自動通知機能

## お客様へのお願い

- メンテナンス開始前に作業中のデータを保存してください
- 緊急のお問い合わせはメールにてお願いいたします

## お問い合わせ

ご不明点がございましたら、下記までお問い合わせください。

support@kanri-one.jp
    `,
    category: "お知らせ",
    date: "2025-02-10",
    author: "運営チーム",
    authorRole: "システム管理",
    thumbnail: "/images/blog/blog-4.jpg",
    readTime: "2分"
  },
  {
    id: "5",
    slug: "excel-migration-case-study",
    title: "Excel管理からの脱却：移行事例インタビュー",
    excerpt: "長年Excel管理を続けてきた監理団体様が監理ワンに移行された事例をご紹介。移行のきっかけから効果まで、詳しくお聞きしました。",
    content: `
## インタビュー概要

**組合名：** 関東国際事業協同組合（仮名）
**受入れ人数：** 約200名
**導入時期：** 2024年10月

## 導入のきっかけ

「Excelでの管理に限界を感じていました」と語るのは、同組合の管理部長・山田様。

「技能実習生の数が増えるにつれて、Excelファイルが複雑化していきました。誰がいつ更新したかわからない、ファイルが重くて開けないなど、日々のストレスが蓄積していました」

## 移行の決め手

複数のシステムを比較検討した結果、監理ワンを選んだ理由は3つ。

1. **2027年育成就労制度への対応**
2. **直感的な操作性**
3. **手厚いサポート体制**

「特に、法改正への自動対応は大きな魅力でした。これまで法改正のたびに書類フォーマットを作り直していた手間がなくなると聞いて、即決でした」

## 導入後の変化

導入から4ヶ月が経過し、業務効率は大幅に改善。

- **書類作成時間：** 70%削減
- **期限管理ミ���：** ゼロに
- **残業時間：** 月20時間削減

「今では、なぜもっと早く導入しなかったのかと思います。スタッフからも好評で、『もうExcelには戻れない』という声が上がっています」

## これから導入を検討される方へ

「最初は移行作業が大変なのではと心配していましたが、サポートチームが丁寧にフォローしてくれました。データ移行も思ったよりスムーズでした。迷っているなら、まずは無料デモを試してみることをおすすめします」
    `,
    category: "操作ガイド",
    date: "2025-02-05",
    author: "佐藤 美咲",
    authorRole: "カスタマーサクセス",
    thumbnail: "/images/blog/blog-5.jpg",
    readTime: "6分"
  },
  {
    id: "6",
    slug: "teiki-houkoku-new-format",
    title: "登録支援機関向け：定期報告書の新フォーマット対応について",
    excerpt: "入管庁より発表された定期報告書の新フォーマットについて、変更点と対応方法を解説します。ゼロマネは既に新フォーマットに対応済みです。",
    content: `
## 新フォーマットの概要

2025年4月より、登録支援機関が提出する定期報告書のフォーマットが変更されます。

## 主な変更点

### 1. 報告項目の追加

- 支援実施状況の詳細記録
- 特定技能外国人の生活状況
- 相談対応の記録

### 2. 提出方法の変更

- オンライン提出が原則に
- 電子署名の導入

### 3. 提出期限の変更

- 四半期ごとの提出に統一

## ゼロマネでの対応

監理ワンは既に新フォーマットに対応しています。

### 自動フォーマット更新

システムアップデートにより、新フォーマットでの出力が可能になっています。特別な設定は不要です。

### データ移行

既存のデータは自動的に新フォーマットに変換されます。

### 操作方法

1. 「報告書作成」をクリック
2. 対象期間を選択
3. 「新フォーマットで出力」を選択

## よくあるご質問

**Q. 旧フォーマットでの出力は可能ですか？**
A. 2025年3月末までは旧フォーマットでの出力も可能です。

**Q. 追加費用はかかりますか？**
A. 追加費用は一切かかりません。
    `,
    category: "法改正情報",
    date: "2025-02-01",
    author: "田中 健太",
    authorRole: "法務アドバイザー",
    thumbnail: "/images/blog/blog-6.jpg",
    isImportant: true,
    readTime: "4分"
  }
]

export const categories = [
  { id: "all", label: "すべて" },
  { id: "法改正情報", label: "法改正情報" },
  { id: "操作ガイド", label: "操作ガイド" },
  { id: "お知らせ", label: "お知らせ" },
] as const

export function getCategoryColor(category: BlogCategory): string {
  switch (category) {
    case "法改正情報":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "操作ガイド":
      return "bg-primary/10 text-primary border-primary/20"
    case "お知らせ":
      return "bg-muted text-muted-foreground border-border"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return blogPosts.slice(0, limit)
  
  // Get posts from same category first, then fill with others
  const sameCategoryPosts = blogPosts.filter(
    post => post.slug !== currentSlug && post.category === currentPost.category
  )
  const otherPosts = blogPosts.filter(
    post => post.slug !== currentSlug && post.category !== currentPost.category
  )
  
  return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
}
