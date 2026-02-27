"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4 text-balance">
            2027年、多くの組合が
            <br className="hidden sm:block" />
            「法改正」の波に飲み込まれます。
          </h2>
          
          <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed">
            今のうちに、最強の武器を手に入れておきませんか？
          </p>
          
          <Button 
            size="lg" 
            className="text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={scrollToContact}
          >
            <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            今すぐ無料デモを予約する
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-primary-foreground/70">
            ※ 現在、問い合わせが急増しております。お早めにご予約ください。
          </p>
        </div>
      </div>
    </section>
  )
}
