"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Phone } from "lucide-react"

const documentContents = [
  "監理ワンでできること",
  "導入実績や選べる理由について",
  "機能一覧・良くある質問など",
]

const targetUsers = [
  "監理ワンでできるようになることを知りたい",
  "技能実習・特定技能の管理システムを探している",
  "外国人労働者の在留期限・企業データ管理が煩雑",
]

export default function DownloadPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [agreeNewsletter, setAgreeNewsletter] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreePrivacy) {
      alert("プライバシーポリシーに同意してください。")
      return
    }
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto">

            {/* Left Side - Document Info */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center lg:text-left mb-8 leading-tight">
                3分で分かる監理ワン<br />
                資料をダウンロード
              </h1>

              {/* Document Preview */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-8">
                <Image
                  src="/images/document-preview.jpg"
                  alt="監理ワン資料プレビュー"
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Document Contents */}
              <div className="space-y-2 mb-8">
                {documentContents.map((content, index) => (
                  <p key={index} className="text-sm sm:text-base text-muted-foreground">
                    <span className="text-foreground font-medium mr-2">●</span>
                    {content}
                  </p>
                ))}
              </div>

              {/* Target Users */}
              <div className="bg-secondary/50 rounded-xl p-5 sm:p-6 mb-8">
                {targetUsers.map((user, index) => (
                  <div key={index} className="flex items-start gap-3 mb-3 last:mb-0">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-foreground font-medium">{user}</p>
                  </div>
                ))}
              </div>

              {/* Phone Contact */}
              <div className="text-sm sm:text-base text-muted-foreground">
                <p className="mb-2">お電話からも承っておりますのでご連絡ください。</p>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:03-XXXX-XXXX" className="text-primary font-medium hover:underline">
                    03-XXXX-XXXX
                  </a>
                  <span className="text-muted-foreground">（平日10:00〜17:00）</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-[420px]">
              <div className="bg-card rounded-xl border border-border p-5 sm:p-6 lg:p-8 sticky top-24">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      ダウンロードありがとうございます
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      ご入力いただいたメールアドレスに資料をお送りしました。
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/">トップページへ戻る</Link>
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="text-primary font-medium text-center">
                        フォーム入力後、<br />
                        資料をダウンロードできます
                      </p>
                    </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Company Type */}
                        <div className="space-y-2">
                          <Label htmlFor="company-type" className="text-sm font-medium">
                            企業区分
                          </Label>
                          <select
                            id="company-type"
                            required
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">選択してください</option>
                            <option value="kumiai">監理団体</option>
                            <option value="touroku">登録支援機関</option>
                            <option value="ukeire">受入れ企業</option>
                            <option value="other">その他</option>
                          </select>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-2">
                          <Label htmlFor="company-name" className="text-sm font-medium">
                            会社名
                          </Label>
                          <Input
                            id="company-name"
                            placeholder="株式会社グレッジ"
                            required
                            className="bg-background text-sm"
                          />
                        </div>

                        {/* Name */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor="last-name" className="text-sm font-medium">
                              姓
                            </Label>
                            <Input
                              id="last-name"
                              placeholder="山田"
                              required
                              className="bg-background text-sm"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="first-name" className="text-sm font-medium">
                              名
                            </Label>
                            <Input
                              id="first-name"
                              placeholder="花子"
                              required
                              className="bg-background text-sm"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            メールアドレス
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="info@example.com"
                            required
                            className="bg-background text-sm"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">
                            電話番号
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="0123456789"
                            className="bg-background text-sm"
                          />
                          <p className="text-xs text-muted-foreground">ハイフン(-)無しで入力</p>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-3">
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreePrivacy}
                              onChange={(e) => setAgreePrivacy(e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-muted-foreground">
                              <Link href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                                プライバシーポリシー
                              </Link>
                              に同意する
                            </span>
                          </label>
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreeNewsletter}
                              onChange={(e) => setAgreeNewsletter(e.target.checked)}
                              className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                            />
                            <span className="text-sm text-muted-foreground">
                              業界の最新情報を受け取る
                            </span>
                          </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting || !agreePrivacy}
                          className="w-full py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                        >
                          {isSubmitting ? "送信中..." : "ダウンロードする"}
                        </Button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
