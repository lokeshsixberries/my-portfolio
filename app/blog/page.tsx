import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { getAllPosts } from "@/lib/blog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata = {
  title: "Blog - Lokesh Bhatt",
  description:
    "Technical articles about Next.js, React, full-stack development, and software engineering best practices",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="border-b border-border py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Technical Blog</h1>
              <p className="text-pretty text-lg text-muted-foreground">
                Thoughts on Next.js, React, full-stack architecture, and building better software
              </p>
              <div className="mx-auto max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
