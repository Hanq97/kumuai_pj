"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Check } from "lucide-react"
import { toast } from "sonner"

const features = [
  {
    title: "2027年新制度への完全対応ロードマップ",
    description: "「育成就労」への移行スケジュールと、システムでの対応方法を網羅。"
  },
  {
    title: "事務工数を70%削減する自動化の具体策",
    description: "Webブラウザで完結する業務フロー。PC・タブレットを問わず、どこからでもアクセス可能な環境で事務工数を最大70%削減。"
  },
  {
    title: "監理団体・支援機関の導入成功事例集",
    description: "監理団体・支援機関が監理ワンを選んだ「現場の声」と、具体的な導入成果。"
  },
  {
    title: "法令遵守（コンプライアンス）の自動チェック機能",
    description: "弁護士・行政書士監修。法改正に即応する自動チェック機能の全貌。"
  },
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
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <BlogHeader />

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

            {/* Left Side - Document Info */}
            <div className="flex-1">
              {/* Header */}
              <p className="text-[16px] sm:text-[20px] font-medium mb-2" style={{ color: '#133D63' }}>
                3分で分かる監理ワン
              </p>
              <h1 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold mb-4 leading-tight" style={{ color: '#143C62' }}>
                業務の「手間」削減ガイド配布中
              </h1>
              <p className="text-[13px] sm:text-[14px] mb-6 lg:mb-8 leading-relaxed" style={{ color: '#5B646F' }}>
                育成就労への制度移行に不安はありませんか？ 書類作成や監査対応の属人化から脱却し、監理ワンが提案する効率的な管理体制を今すぐ確認してください。
              </p>

              {/* Document Preview Image - Outside card */}
              <div className="relative w-full mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_mzoa2qmzoa2qmzoa%201-MnK0um8WpRKOtb1bowdEN4qv04mhS8.png"
                  alt="監理ワン資料プレビュー"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* White Card with Features */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-6">
                {/* Features List */}
                <div className="space-y-4 sm:space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(0, 140, 108, 0.1)' }}>
                        <Check className="w-3.5 h-3.5" style={{ color: '#008C6C' }} />
                      </div>
                      <div>
                        <p className="text-[13px] sm:text-[14px] font-semibold" style={{ color: '#143C62' }}>
                          {feature.title}
                        </p>
                        <p className="text-[12px] sm:text-[13px]" style={{ color: '#5B646F' }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Text - Centered */}
              <p className="text-[13px] sm:text-[14px] text-center" style={{ color: '#5B646F' }}>
                <span className="font-semibold" style={{ color: '#133D63' }}>500社以上の監理団体・支援機関</span>がこのガイドを参考に運用を開始しています。
              </p>
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
                      企業区�� <span className="text-red-500">※</span>
                    </Label>
                    <select
                      id="company-type"
                      name="company-type"
                      required
                      className="w-full h-11 px-3 rounded-md border border-gray-200 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat"
                    >
                      <option value="">選択してください</option>
                      <option value="kumiai">組合監理団体</option>
                      <option value="touroku">登録支援機関</option>
                      <option value="ukeire">受け入れ企業</option>
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
                        className="h-4 w-4 rounded border-gray-300 accent-[#008C6C] focus:ring-[#008C6C]"
                        style={{ accentColor: '#008C6C' }}
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
