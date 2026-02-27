"use client"

import { use, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getRelatedPosts, getCategoryColor, blogPosts } from "@/lib/blog-data"
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowRight,
  Twitter,
  Link2,
  Check,
  MessageCircle
} from "lucide-react"

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface TableOfContentsItem {
  id: string
  text: string
  level: number
}

function extractHeadings(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: TableOfContentsItem[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    headings.push({ id, text, level })
  }

  return headings
}

function renderContent(content: string): React.ReactNode {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let listItems: string[] = []
  let isInList = false
  let listType: 'ul' | 'ol' = 'ul'

  const flushList = () => {
    if (listItems.length > 0) {
      const ListTag = listType
      elements.push(
        <ListTag key={elements.length} className={`mb-4 ${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-1 text-muted-foreground`}>
          {listItems.map((item, i) => (
            <li key={i} className="text-sm sm:text-base">{item}</li>
          ))}
        </ListTag>
      )
      listItems = []
      isInList = false
    }
  }

  lines.forEach((line, index) => {
    const trimmedLine = line.trim()

    // Skip empty lines
    if (!trimmedLine) {
      flushList()
      return
    }

    // Headers
    if (trimmedLine.startsWith('## ')) {
      flushList()
      const text = trimmedLine.replace('## ', '')
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      elements.push(
        <h2 key={index} id={id} className="text-lg sm:text-xl font-bold text-foreground mt-8 mb-4 scroll-mt-24">
          {text}
        </h2>
      )
      return
    }

    if (trimmedLine.startsWith('### ')) {
      flushList()
      const text = trimmedLine.replace('### ', '')
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      elements.push(
        <h3 key={index} id={id} className="text-base sm:text-lg font-bold text-foreground mt-6 mb-3 scroll-mt-24">
          {text}
        </h3>
      )
      return
    }

    // Unordered list items
    if (trimmedLine.startsWith('- ')) {
      if (!isInList || listType !== 'ul') {
        flushList()
        isInList = true
        listType = 'ul'
      }
      listItems.push(trimmedLine.replace('- ', ''))
      return
    }

    // Ordered list items
    if (/^\d+\.\s/.test(trimmedLine)) {
      if (!isInList || listType !== 'ol') {
        flushList()
        isInList = true
        listType = 'ol'
      }
      listItems.push(trimmedLine.replace(/^\d+\.\s/, ''))
      return
    }

    // Bold text in paragraph
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      flushList()
      const text = trimmedLine.slice(2, -2)
      elements.push(
        <p key={index} className="text-sm sm:text-base font-semibold text-foreground mb-2">
          {text}
        </p>
      )
      return
    }

    // Q&A format
    if (trimmedLine.startsWith('**Q.')) {
      flushList()
      const text = trimmedLine.slice(2, -2)
      elements.push(
        <p key={index} className="text-sm sm:text-base font-semibold text-foreground mt-4 mb-1">
          {text}
        </p>
      )
      return
    }

    if (trimmedLine.startsWith('A.')) {
      flushList()
      elements.push(
        <p key={index} className="text-sm sm:text-base text-muted-foreground mb-4 pl-4">
          {trimmedLine}
        </p>
      )
      return
    }

    // Regular paragraph
    flushList()
    elements.push(
      <p key={index} className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
        {trimmedLine}
      </p>
    )
  })

  flushList()
  return elements
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getPostBySlug(slug)
  const [copied, setCopied] = useState(false)
  const [activeHeading, setActiveHeading] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" }
    )

    document.querySelectorAll("h2[id], h3[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)
  const headings = extractHeadings(post.content)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(post.title)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  }

  const handleShareLine = () => {
    const url = encodeURIComponent(window.location.href)
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="pt-20 sm:pt-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
            <Link href="/" className="hover:text-foreground transition-colors whitespace-nowrap">
              ホーム
            </Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <Link href="/blog" className="hover:text-foreground transition-colors whitespace-nowrap">
              ブログ
            </Link>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <span className="text-foreground truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-6 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              {/* Article Header */}
              <header className="mb-6 sm:mb-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-medium border ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    {post.readTime}で読めます
                  </div>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
                  {post.title}
                </h1>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-foreground">{post.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{post.authorRole}</p>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 sm:mb-8">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Share Buttons */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">この記事をシェア</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={handleShareTwitter}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-colors"
                    aria-label="Twitterでシェア"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleShareLine}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00B900] text-white hover:bg-[#00B900]/90 transition-colors"
                    aria-label="LINEでシェア"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    aria-label="リンクをコピー"
                  >
                    {copied ? <Check className="h-5 w-5" /> : <Link2 className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Table of Contents - Desktop Only */}
              {headings.length > 0 && (
                <div className="hidden lg:block sticky top-24 bg-card rounded-xl border border-border p-5">
                  <h3 className="text-sm font-bold text-foreground mb-4">目次</h3>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm transition-colors ${
                          heading.level === 3 ? 'pl-3' : ''
                        } ${
                          activeHeading === heading.id
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* CTA Sidebar */}
              <div className="lg:sticky lg:top-[calc(24rem+1.5rem)] bg-primary rounded-xl p-5 sm:p-6 text-primary-foreground">
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  このシステムについて詳しく知る
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  ゼロマネの機能や導入事例について、詳しくご説明いたします。
                </p>
                <Button 
                  className="w-full text-sm bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <Link href="/#contact">
                    無料デモを予約
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-10 sm:py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6 sm:mb-8">
            関連記事
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedPosts.map((relatedPost) => (
              <article 
                key={relatedPost.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${relatedPost.slug}`} className="block relative aspect-video overflow-hidden">
                  <Image
                    src={relatedPost.thumbnail}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium border ${getCategoryColor(relatedPost.category)}`}>
                      {relatedPost.category}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{relatedPost.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  )
}
