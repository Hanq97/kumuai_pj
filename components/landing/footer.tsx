import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/images/logo_dark.png"
                alt="監理ワン"
                width={140}
                height={36}
                className="h-8 sm:h-9 w-auto"
              />
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              監理団体・登録支援機関の業務を徹底的に効率化。
              2027年育成就労制度にも自動対応する、次世代の管理システム。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-background mb-3 sm:mb-4">サービス</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-background/70">
              <li><a href="#solutions" className="hover:text-background transition-colors">特徴</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">機能一覧</a></li>
              <li><a href="#why-us" className="hover:text-background transition-colors">選ばれる理由</a></li>
              <li><a href="/pricing" className="hover:text-background transition-colors">料金プラン</a></li>
              <li><a href="/blog" className="hover:text-background transition-colors">ブログ</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-background mb-3 sm:mb-4">会社情報</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-background/70">
              <li><a href="/company" className="hover:text-background transition-colors">運営会社</a></li>
              <li><a href="/privacy" className="hover:text-background transition-colors" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a></li>
              <li><a href="/terms" className="hover:text-background transition-colors" target="_blank" rel="noopener noreferrer">利用規約</a></li>
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
