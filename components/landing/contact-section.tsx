"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Send } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedInquiryType, setSelectedInquiryType] = useState("")
  const [agreePrivacy, setAgreePrivacy] = useState(false)

  // Check URL params on mount and on hash change to auto-select inquiry type and scroll
  useEffect(() => {
    const checkHashAndScroll = () => {
      const hash = window.location.hash
      if (hash.includes("contact")) {
        // Auto-select demo if type=demo is in URL
        if (hash.includes("type=demo")) {
          setSelectedInquiryType("demo")
        }
        // Scroll to contact section
        setTimeout(() => {
          const contactSection = document.getElementById("contact")
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }
    
    checkHashAndScroll()
    window.addEventListener("hashchange", checkHashAndScroll)
    return () => window.removeEventListener("hashchange", checkHashAndScroll)
  }, [])

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
      organization: formData.get("organization"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiryType: formData.get("inquiry-type"),
      message: formData.get("message"),
    }
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error("送信に失敗しました")
      }
      
      // Show toast and reset form
      toast.success("お問い合わせを送信しました", {
        description: "担当者より2営業日以内にご連絡いたします。",
      })
      form.reset()
      setSelectedInquiryType("")
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
    <section id="contact" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            お問い合わせ・ご相談
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            導入に関するご不明点やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-5 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                お電話でのお問い合わせ
              </h3>
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary">03-6260-6226</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">受付時間：平日 10:00〜19:00</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                メールでのお問い合わせ
              </h3>
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-primary">support@kanri-one.jp</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">24時間受付中</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 bg-[#008C6C]/5 rounded-lg border border-[#008C6C]/20">
              <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2" style={{ color: '#008C6C' }}>
                無料デモのご案内
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#133D63' }}>
                実際の画面を見ながら、貴組合の業務に合わせた活用方法をご提案いたします。所要時間は約30分程度です。
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-5 sm:p-6 lg:p-8 rounded-2xl border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Organization & Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-sm font-medium text-foreground">
                    団体名・会社名 <span className="text-red-500">※</span>
                  </Label>
                  <Input 
                    id="organization"
                    name="organization"
                    placeholder="例：株式会社DEHA SOLUTIONS" 
                    required 
                    className="bg-background h-11 text-sm border-gray-200 placeholder:text-gray-400"
                  />
                </div>
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
              </div>
              
              {/* Row 2: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
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
              </div>
              
              {/* Inquiry Type */}
              <div className="space-y-2">
                <Label htmlFor="inquiry-type" className="text-sm font-medium text-foreground">
                  お問い合わせ種別 <span className="text-red-500">※</span>
                </Label>
                <select 
                  id="inquiry-type"
                  name="inquiry-type"
                  required
                  value={selectedInquiryType}
                  onChange={(e) => setSelectedInquiryType(e.target.value)}
                  className="w-full h-11 px-3 rounded-md border border-gray-200 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat"
                >
                  <option value="">選択してください</option>
                  <option value="kumiai">組合監理団体向け機能</option>
                  <option value="touroku">登録支援機関向け機能</option>
                  <option value="ukeire">受け入れ企業向け機能</option>
                  <option value="document">書類作成・自動化機能</option>
                  <option value="demo">無料デモの予約</option>
                  <option value="estimate">導入・見積り相談</option>
                  <option value="new-system">2027年新制度（育成就労）への対応相談</option>
                  <option value="support">サポート・不具合</option>
                  <option value="other">その他</option>
                </select>
              </div>
              
              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  お問い合わせ内容 <span className="text-red-500">※</span>
                </Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="ご質問やご要望をご記入ください"
                  rows={5}
                  required
                  className="bg-background resize-none text-sm border-gray-200 placeholder:text-gray-400"
                />
              </div>
              
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              
              {/* Privacy Checkbox */}
              <div className="flex justify-center">
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
                className="w-full h-12 text-sm font-medium bg-[#4a5568] hover:bg-[#3d4654] text-white rounded-lg"
                disabled={isSubmitting || !agreePrivacy}
              >
                {isSubmitting ? (
                  "送信中..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    この内容で送信する
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
