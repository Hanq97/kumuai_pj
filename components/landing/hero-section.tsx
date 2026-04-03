"use client"

import Link from "next/link"
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
      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full">
              <span className="text-accent text-xs sm:text-sm font-medium">
                監理団体・登録支援機関・受入企業向け
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6 text-balance">
              全ての監理実務を、
              <br />
              <span className="text-primary">ひとつに。</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              技能実習・特定技能・育成就労。すべての制度をワンストップで管理。
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              Excel管理の限界、散在するデータ、煩雑な手作業、複雑化する法規制。
              <br className="hidden md:block" />
              監理ワンが、あなたの組織のポテンシャルを最大化します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToContact}
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                30日間無料で体験する
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-colors"
                asChild
              >
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  資料ダウンロード
                </Link>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              ※ クレジットカード不要 ・ 導入サポート無料
            </p>
          </div>
          
          {/* Image - Right Side */}
          <div className="relative lg:pl-8">
            {/* Floating badge - Top Right */}
            <div className="absolute -top-2 right-0 lg:right-4 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-medium">導入実績 100社+</p>
            </div>
            
            {/* Dashboard Image with perspective tilt */}
            <div 
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-card"
              style={{
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                transformOrigin: 'center center',
              }}
            >
              <Image
                src="/images/dashboard-hero.png"
                alt="監理ワン管理画面のイメージ"
                fill
                className="object-cover object-left-top"
                priority
              />
            </div>
            
            {/* Floating badge - Bottom Left */}
            <div className="absolute -bottom-4 left-0 lg:-left-4 z-20 bg-card px-4 py-3 rounded-lg shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 235, 181, 0.1)' }}>
                  <span style={{ color: '#00EBB5' }} className="font-bold">30</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">無料お試し</p>
                  <p className="font-semibold text-foreground">30日間</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
