"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Phone, Download } from "lucide-react"
import { toast } from "sonner"

const documentContents = [
  "監理ワンでできること",
  "導入実績や選べる理由について",
  "機能一覧・良くある質問など",
]

const targetUsers = [
  "監理ワンでできるようになることを知りたい",
  "技能実習・特定技能の管理システムを探している",
  "外国人労働者の在留期限と企業データ管理が煩雑",
]

export default function DownloadPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreePrivacy) {
      toast.error("プライバシーポリシーに同意してください。")
      return
    }
    setIsSubmitting(true)
    setError(null)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      companyType: formData.get("company-type"),
      companyName: formData.get("company-name"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }
    
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error("送信に失敗しました")
      }
      
      // Show toast and reset form
      toast.success("資料をメールでお送りしました", {
        description: "ご入力いただいたメールアドレスをご確認ください。",
      })
      form.reset()
      setAgreePrivacy(false)
    } catch {
      setError("送信に失敗しました。もう一度お試しください。")
      toast.error("送信に失敗しました", {
        description: "もう一度お試しください。",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BlogHeader />

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

            {/* Left Side - Document Info */}
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left mb-6 sm:mb-8 leading-tight">
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
              <div className="bg-gradient-to-b from-white to-gray-50/50 rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm sticky top-24">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    案内資料ダウンロード
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    プライバシーポリシーを必ずお読みの上、お問い合わせ下さい。<br />
                    <span className="text-red-500">※</span>は必須入力項目です。
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Company Type */}
                  <div className="space-y-2">
                    <Label htmlFor="company-type" className="text-sm font-medium text-foreground">
                      企業区分 <span className="text-red-500">※</span>
                    </Label>
                    <select
                      id="company-type"
                      name="company-type"
                      required
                      className="w-full h-11 px-3 rounded-md border border-gray-200 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat"
                    >
                      <option value="">選択してください</option>
                      <option value="kumiai">監理団体（技能実習）</option>
                      <option value="touroku">登録支援機関（特定技能）</option>
                      <option value="ukeire">受入れ企業</option>
                      <option value="okuri">送り出し機関</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="text-sm font-medium text-foreground">
                      会社名 <span className="text-red-500">※</span>
                    </Label>
                    <Input
                      id="company-name"
                      name="company-name"
                      placeholder="例：株式会社DEHA SOLUTIONS"
                      required
                      className="bg-background h-11 text-sm border-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      お名前 <span className="text-red-500">※</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="例：田中 一郎"
                      required
                      className="bg-background h-11 text-sm border-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      メールアドレス <span className="text-red-500">※</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="例：example@mail.com"
                      required
                      className="bg-background h-11 text-sm border-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      電話番号
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="例：0312345678"
                      className="bg-background h-11 text-sm border-gray-200 placeholder:text-gray-400"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-sm text-destructive text-center">{error}</p>
                  )}

                  {/* Privacy Checkbox */}
                  <div className="flex justify-center pt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground">
                        <Link href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          プライバシーポリシー
                        </Link>
                        に同意する
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !agreePrivacy}
                    className="w-full h-12 text-sm font-medium bg-[#4a5568] hover:bg-[#3d4654] text-white rounded-lg"
                  >
                    {isSubmitting ? (
                      "送信中..."
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        資料をダウンロードする
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
