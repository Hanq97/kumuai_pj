export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-background to-background/80 flex items-center justify-center shadow-sm">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-foreground" />
                  <path d="M12 4V12L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-background text-lg leading-tight">ゼロマネ</span>
                <span className="text-[10px] text-background/60 leading-none tracking-wider">ZERO MANAGEMENT</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              監理団体・登録支援機関の業務を徹底的に効率化。
              2027年育成就労制度にも自動対応する、次世代の管理システム。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#solutions" className="hover:text-background transition-colors">特徴</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">機能一覧</a></li>
              <li><a href="#why-us" className="hover:text-background transition-colors">選ばれる理由</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-background transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-background transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-background transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/50">
            © 2026 Zero Management（ゼロ・マネジメント）. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
