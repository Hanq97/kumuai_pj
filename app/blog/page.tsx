"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogFooter } from "@/components/blog/blog-footer"
import { Button } from "@/components/ui/button"
import { blogPosts, categories, getCategoryColor, BlogCategory } from "@/lib/blog-data"
import { Calendar, ArrowRight, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            ブログ・お知らせ
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            外国人材受入れに関する法改正情報、システムの操作ガイド、
            <br className="hidden sm:block" />
            最新のお知らせをお届けします。
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-border sticky top-16 bg-background/95 backdrop-blur z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto py-3 sm:py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.isImportant && (
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center gap-1 px-2 py-1 bg-destructive text-destructive-foreground rounded text-[10px] sm:text-xs font-medium">
                      <AlertTriangle className="h-3 w-3" />
                      重要
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  {/* Category & Date */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    続きを読む
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Banner - shown in middle of content */}
          {currentPage === 1 && filteredPosts.length > 3 && (
            <div className="my-8 sm:my-12 p-6 sm:p-8 bg-primary rounded-xl text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground mb-2 sm:mb-3">
                2027年の法改正、準備はできていますか？
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/80 mb-4 sm:mb-6">
                監理ワンなら、法改正への対応も自動で完了します。
              </p>
              <Button 
                size="lg"
                className="text-sm sm:text-base bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/#contact">
                  無料デモを予約する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="text-xs sm:text-sm"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                前へ
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded text-xs sm:text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="text-xs sm:text-sm"
              >
                次へ
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <BlogFooter />
    </div>
  )
}
