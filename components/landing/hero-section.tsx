"use client"

import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
      <div className="container relative mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent text-sm font-medium">
                2027年・育成就労制度対応
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              <span className="text-primary">「管理」</span>を、仕事にしない。
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              2027年・育成就労制度への対応も、このシステムが勝手にやります。
            </p>
            
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              面倒な書類作成は1クリック。法改正による書式変更も自動アップデート。
              <br className="hidden md:block" />
              あなたの時間を奪う「Excel管理」と「期限への恐怖」を、今日で終わりにしませんか？
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToContact}
              >
                <FileText className="mr-2 h-5 w-5" />
                30日間無料で体験する
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                資料ダウンロード
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              ※ クレジットカード不要 ・ 導入サポート無料
            </p>
          </div>
          
          {/* Image - Right Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <Image
                src="/images/hero-dashboard.jpg"
                alt="ゼロマネ管理画面のイメージ"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card px-4 py-3 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">30</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">無料お試し</p>
                  <p className="font-semibold text-foreground">30日間</p>
                </div>
              </div>
            </div>
            {/* Another floating element */}
            <div className="absolute -top-4 -right-4 lg:-right-8 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-medium">導入実績 100社+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
