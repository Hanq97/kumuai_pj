"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "機能", href: "/#features" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/#contact" },
]

export function BlogHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="監理ワン"
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/#contact">無料デモを予約</Link>
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
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 sm:px-4 pt-2">
                <Button 
                  className="w-full text-sm sm:text-base bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link href="/#contact">無料デモを予約</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
