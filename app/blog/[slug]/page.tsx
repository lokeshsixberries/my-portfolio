"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Eye,
  Heart,
  MessageSquare,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  User,
  TrendingUp,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast, Toaster } from "sonner";

// Mock data - replace with your actual data fetching
const mockPost = {
  slug: "building-scalable-nextjs-applications",
  title: "Building Scalable Next.js Applications with TypeScript and GraphQL",
  excerpt:
    "Learn how to architect and scale Next.js applications using modern technologies and best practices.",
  content: "# Your markdown content here",
  tags: ["Next.js", "TypeScript", "GraphQL", "Performance", "Architecture"],
  publishDate: "2024-01-15",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop",
  views: 1248,
  likes: 86,
  comments: 23,
  author: {
    name: "Lokesh Bhatt",
    bio: "Full Stack Developer specializing in React, Next.js, and Node.js. Passionate about building scalable web applications and sharing knowledge.",
    avatar: "LB",
  },
};

const mockRelatedPosts = [
  {
    slug: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt:
      "Learn advanced techniques to optimize your React applications for maximum performance.",
    tags: ["React", "Performance", "Optimization"],
    publishDate: "2024-01-10",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Enterprise Applications",
    excerpt:
      "Essential TypeScript patterns and practices for building maintainable enterprise applications.",
    tags: ["TypeScript", "Best Practices", "Enterprise"],
    publishDate: "2024-01-05",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
  },
  {
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: Choosing the Right API Architecture",
    excerpt:
      "A comprehensive comparison between GraphQL and REST APIs for modern web applications.",
    tags: ["GraphQL", "REST", "API", "Comparison"],
    publishDate: "2023-12-28",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [viewCount, setViewCount] = useState(mockPost.views);
  const [likeCount, setLikeCount] = useState(mockPost.likes);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Simulate post data fetching
  const post = mockPost;
  const relatedPosts = mockRelatedPosts;

  if (!post) {
    notFound();
  }

  useEffect(() => {
    // Increment view count on page load (in a real app, this would be an API call)
    setViewCount((prev) => prev + 1);
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
      toast.success("Liked the article!");
    } else {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked ? "Removed from bookmarks" : "Added to bookmarks"
    );
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
        break;
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navigation />

      <main>
        <article>
          {/* Hero Section */}
          <div className="relative border-b border-border bg-gradient-to-b from-background to-muted/30">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mx-auto max-w-4xl space-y-8"
              >
                {/* Back Button */}
                <motion.div variants={fadeInUp}>
                  <Button variant="ghost" size="sm" asChild className="group">
                    <Link href="/blog">
                      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      Back to Blog
                    </Link>
                  </Button>
                </motion.div>

                {/* Header Content */}
                <motion.div variants={fadeInUp} className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="gap-1 border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:scale-105"
                      >
                        <Sparkles className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    {post.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                        <Eye className="h-4 w-4" />
                        <span>{viewCount.toLocaleString()} views</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleLike}
                          className={`gap-2 ${
                            isLiked
                              ? "border-red-500 bg-red-500/10 text-red-500"
                              : ""
                          }`}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              isLiked ? "fill-red-500" : ""
                            }`}
                          />
                          {likeCount}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleBookmark}
                          className={`gap-2 ${
                            isBookmarked
                              ? "border-blue-500 bg-blue-500/10 text-blue-500"
                              : ""
                          }`}
                        >
                          {isBookmarked ? (
                            <BookmarkCheck className="h-4 w-4" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                          Save
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowShareMenu(!showShareMenu)}
                            className="gap-2"
                          >
                            <Share2 className="h-4 w-4" />
                            Share
                          </Button>

                          {/* Share Menu */}
                          {showShareMenu && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border/50 bg-background/95 p-2 backdrop-blur-xl shadow-xl"
                            >
                              <div className="space-y-1">
                                <button
                                  onClick={() => handleShare("twitter")}
                                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                                >
                                  <Twitter className="h-4 w-4 text-sky-500" />
                                  Share on Twitter
                                </button>
                                <button
                                  onClick={() => handleShare("linkedin")}
                                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                                >
                                  <Linkedin className="h-4 w-4 text-blue-700" />
                                  Share on LinkedIn
                                </button>
                                <button
                                  onClick={() => handleShare("copy")}
                                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                                >
                                  {isCopied ? (
                                    <Check className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                  {isCopied ? "Copied!" : "Copy Link"}
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                  variants={fadeInUp}
                  className="aspect-video w-full overflow-hidden rounded-2xl border border-border/50 shadow-xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="mx-auto max-w-3xl">
              {/* Table of Contents (Sticky) */}
              <div className="lg:sticky lg:top-24 mb-12 lg:float-right lg:ml-8 lg:mb-8 lg:w-64">
                <Card className="border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 flex items-center gap-2 font-semibold">
                    <BookOpen className="h-4 w-4" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {[
                      "Introduction",
                      "Getting Started",
                      "Architecture",
                      "Performance",
                      "Deployment",
                      "Conclusion",
                    ].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group flex items-center justify-between text-sm text-muted-foreground hover:text-primary"
                      >
                        <span>{item}</span>
                        <ChevronRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                      </a>
                    ))}
                  </nav>
                </Card>
              </div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1
                        className="group scroll-mt-24"
                        id={String(children).toLowerCase().replace(/\s+/g, "-")}
                      >
                        {children}
                        <a
                          href={`#${String(children)
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="ml-2 opacity-0 group-hover:opacity-100"
                        >
                          #
                        </a>
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2
                        className="group scroll-mt-24"
                        id={String(children).toLowerCase().replace(/\s+/g, "-")}
                      >
                        {children}
                        <a
                          href={`#${String(children)
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="ml-2 opacity-0 group-hover:opacity-100"
                        >
                          #
                        </a>
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3
                        className="group scroll-mt-24"
                        id={String(children).toLowerCase().replace(/\s+/g, "-")}
                      >
                        {children}
                        <a
                          href={`#${String(children)
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="ml-2 opacity: 0 group-hover:opacity-100"
                        >
                          #
                        </a>
                      </h3>
                    ),
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <div className="relative my-6">
                          <div className="absolute right-4 top-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-xs"
                              onClick={() => {
                                navigator.clipboard.writeText(String(children));
                                toast.success("Code copied to clipboard!");
                              }}
                            >
                              <Copy className="mr-1 h-3 w-3" />
                              Copy
                            </Button>
                          </div>
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            className="rounded-lg !bg-muted/50 !p-6 backdrop-blur-sm"
                            showLineNumbers
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code
                          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent pl-6 py-4 italic my-8 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="mt-12 border-t border-border/50 pt-12"
              >
                <Card className="border-border/50 bg-gradient-to-br from-background/50 to-primary/5 p-8 backdrop-blur-sm">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/80 p-0.5">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                            <span className="text-2xl font-bold text-primary">
                              {post.author.avatar}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-green-500 border-2 border-background" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          {post.author.name}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {post.author.bio}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://github.com/lokeshbhatt"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <User className="mr-2 h-3 w-3" />
                            View Profile
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:lokesh@example.com">
                            <MessageSquare className="mr-2 h-3 w-3" />
                            Contact
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Comments Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12"
              >
                <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                      <MessageSquare className="mr-2 inline h-5 w-5" />
                      Comments ({mockPost.comments})
                    </h3>
                    <Button variant="outline" size="sm">
                      Add Comment
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {/* Comment threads would go here */}
                    <div className="rounded-lg border border-border/30 bg-background/50 p-4">
                      <p className="text-center text-sm text-muted-foreground">
                        Be the first to comment on this post!
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mx-auto max-w-6xl"
              >
                <motion.div variants={fadeInUp} className="mb-12 text-center">
                  <Badge
                    variant="outline"
                    className="mb-4 gap-2 border-primary/30 bg-primary/10"
                  >
                    <TrendingUp className="h-3 w-3" />
                    Continue Reading
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Related{" "}
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      Articles
                    </span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Discover more insights and tutorials about web development
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="grid gap-8 md:grid-cols-3"
                >
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <BlogCard post={relatedPost} />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                  className="mt-12 text-center"
                >
                  <Button size="lg" asChild>
                    <Link href="/blog">
                      View All Articles
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
