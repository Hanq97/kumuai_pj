import { notFound } from "next/navigation"
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import BlogPostContent from "./blog-post-content"

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />
}
