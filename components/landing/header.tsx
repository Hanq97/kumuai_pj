"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "特徴", href: "#tokuchou", isExternal: false },
  { label: "ソリューション", href: "#solutions", isExternal: false },
  { label: "機能一覧", href: "#features", isExternal: false },
  { label: "選ばれる理由", href: "#why-us", isExternal: false },
  { label: "ブログ", href: "/blog", isExternal: true },
  { label: "お問い合わせ", href: "#contact", isExternal: false },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      setIsMobileMenuOpen(false)
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[22px] sm:h-[22px]">
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M12 4V12L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-foreground text-base sm:text-lg leading-tight">監理ワン</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.isExternal)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => handleNavClick("#contact", false)}
            >
              無料デモを予約
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-border">
            <nav className="flex flex-col gap-1 sm:gap-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="px-3 sm:px-4 pt-2">
                <Button 
                  className="w-full text-sm sm:text-base bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => handleNavClick("#contact", false)}
                >
                  無料デモを予約
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
