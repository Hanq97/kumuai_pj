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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            2027年、多くの組合が
            <br className="hidden sm:block" />
            「法改正」の波に飲み込まれます。
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            今のうちに、最強の武器を手に入れておきませんか？
          </p>
          
          <Button 
            size="lg" 
            className="text-base px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={scrollToContact}
          >
            <Calendar className="mr-2 h-5 w-5" />
            今すぐ無料デモを予約する
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="mt-6 text-sm text-primary-foreground/70">
            ※ 現在、問い合わせが急増しております。お早めにご予約ください。
          </p>
        </div>
      </div>
    </section>
  )
}
