"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
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
                  <p className="text-lg sm:text-2xl font-bold text-primary">03-XXXX-XXXX</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">受付時間：平日 9:00〜18:00</p>
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
                  <p className="text-base sm:text-lg font-semibold text-primary">info@zeromane.jp</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">24時間受付中</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 sm:p-6 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">
                無料デモのご案内
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                実際の画面を見ながら、貴組合の業務に合わせた活用方法をご提案いたします。
                所要時間は約30分程度です。
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                  <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  送信完了しました
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="organization" className="text-sm">団体名・会社名 <span className="text-destructive">*</span></Label>
                    <Input 
                      id="organization" 
                      placeholder="例：〇〇協同組合" 
                      required 
                      className="bg-background text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-sm">お名前 <span className="text-destructive">*</span></Label>
                    <Input 
                      id="name" 
                      placeholder="例：山田 太郎" 
                      required 
                      className="bg-background text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm">メールアドレス <span className="text-destructive">*</span></Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@mail.com" 
                      required 
                      className="bg-background text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className="text-sm">電話番号</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="03-XXXX-XXXX" 
                      className="bg-background text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="inquiry-type" className="text-sm">お問い合わせ種別 <span className="text-destructive">*</span></Label>
                  <select 
                    id="inquiry-type" 
                    required
                    className="w-full h-9 sm:h-10 px-3 rounded-md border border-input bg-background text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">選択してください</option>
                    <option value="demo">無料デモの予約</option>
                    <option value="document">資料請求</option>
                    <option value="pricing">料金について</option>
                    <option value="other">その他のご相談</option>
                  </select>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm">お問い合わせ内容</Label>
                  <Textarea 
                    id="message" 
                    placeholder="ご質問やご要望をご記入ください"
                    rows={4}
                    className="bg-background resize-none text-sm sm:text-base"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-5 sm:py-6 text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      送信する
                    </>
                  )}
                </Button>
                
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                  ※ お送りいただいた情報は、お問い合わせへの回答以外の目的では使用いたしません。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
