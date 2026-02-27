import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: 'ゼロマネ | 監理団体・登録支援機関向け業務効率化システム',
  description: '2027年育成就労制度対応。書類作成の自動化、法改正への自動追従、AIチャットボットで監理業務を徹底的に効率化。30日間無料体験実施中。',
  generator: 'v0.app',
  keywords: ['監理団体', '登録支援機関', '技能実習', '特定技能', '育成就労', '業務効率化', '書類作成'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
