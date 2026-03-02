import Link from "next/link"

export function BlogFooter() {
  return (
    <footer className="py-8 sm:py-12 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-gradient-to-br from-background to-background/80 flex items-center justify-center shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[22px] sm:h-[22px]">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-foreground" />
                  <path d="M12 4V12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
                </svg>
              </div>
              <span className="font-bold text-background text-base sm:text-lg leading-tight">監理ワン</span>
            </Link>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              監理団体・登録支援機関の業務を徹底的に効率化。
              2027年育成就労制度にも自動対応する、次世代の管理システム。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-background mb-3 sm:mb-4">サービス</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-background/70">
              <li><Link href="/#solutions" className="hover:text-background transition-colors">特徴</Link></li>
              <li><Link href="/#features" className="hover:text-background transition-colors">機能一覧</Link></li>
              <li><Link href="/#why-us" className="hover:text-background transition-colors">選ばれる理由</Link></li>
              <li><Link href="/blog" className="hover:text-background transition-colors">ブログ</Link></li>
              <li><Link href="/#contact" className="hover:text-background transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-background mb-3 sm:mb-4">会社情報</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-background/70">
              <li><Link href="#" className="hover:text-background transition-colors">運営会社</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">利用規約</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-background/20 text-center">
          <p className="text-xs sm:text-sm text-background/50">
            © 2026 監理ワン. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
