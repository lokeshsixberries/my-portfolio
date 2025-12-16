export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishDate: string
  readTime: string
  tags: string[]
  image: string
  author: {
    name: string
    bio: string
  }
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-15-app-router-deep-dive",
    title: "Next.js 15 App Router: A Deep Dive into Server Components",
    excerpt:
      "Explore the powerful features of Next.js 15 App Router and learn how to leverage server components for better performance and developer experience.",
    content: `# Next.js 15 App Router: A Deep Dive into Server Components

The Next.js App Router represents a paradigm shift in how we build React applications. With Next.js 15, server components have become more powerful and easier to use than ever before.

## What Are Server Components?

Server Components are React components that run exclusively on the server. They enable you to reduce the amount of JavaScript sent to the client, improve initial page load performance, and directly access server-side resources.

\`\`\`typescript
// app/page.tsx - Server Component by default
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}
\`\`\`

## Key Benefits

1. **Reduced Bundle Size**: Server components don't send JavaScript to the client
2. **Direct Backend Access**: Access databases, file systems, and APIs directly
3. **Improved Performance**: Faster initial page loads and better Core Web Vitals
4. **Better SEO**: Content is rendered on the server for search engines

## Best Practices

- Use server components by default
- Only add 'use client' when you need interactivity
- Leverage streaming for better perceived performance
- Combine server and client components strategically

The App Router is the future of Next.js development, and mastering server components is essential for building modern, performant web applications.`,
    publishDate: "2025-01-10",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Server Components", "Performance"],
    image: "/nextjs-server-components-code.jpg",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
  {
    slug: "building-scalable-apis-graphql-nodejs",
    title: "Building Scalable APIs with GraphQL and Node.js",
    excerpt:
      "Learn how to design and implement production-ready GraphQL APIs using Node.js, with best practices for schema design, resolvers, and performance optimization.",
    content: `# Building Scalable APIs with GraphQL and Node.js

GraphQL has revolutionized how we think about API design. In this guide, we'll explore building production-ready GraphQL APIs with Node.js.

## Why GraphQL?

GraphQL offers several advantages over traditional REST APIs:

- **Precise Data Fetching**: Clients request exactly what they need
- **Strong Typing**: Built-in type system prevents errors
- **Single Endpoint**: Simplified API surface area
- **Real-time Updates**: Built-in subscription support

## Setting Up Your GraphQL Server

\`\`\`typescript
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
\`

const resolvers = {
  Query: {
    users: async () => {
      // Fetch from database
      return await db.users.findMany()
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
await startStandaloneServer(server, { listen: { port: 4000 } })
\`\`\`

## Performance Optimization

1. **DataLoader**: Batch and cache database requests
2. **Query Complexity**: Limit expensive queries
3. **Persisted Queries**: Reduce bandwidth
4. **Caching**: Implement Redis for frequently accessed data

GraphQL combined with Node.js provides a powerful foundation for building modern, scalable APIs that can grow with your application.`,
    publishDate: "2025-01-05",
    readTime: "10 min read",
    tags: ["GraphQL", "Node.js", "API", "Backend"],
    image: "/api-architecture-diagram.jpg",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
  {
    slug: "react-performance-optimization-techniques",
    title: "React Performance Optimization: Techniques That Actually Work",
    excerpt:
      "Practical strategies for optimizing React applications, from memoization to code splitting, with real-world examples and measurable results.",
    content: `# React Performance Optimization: Techniques That Actually Work

Performance optimization in React can seem daunting, but with the right techniques, you can significantly improve your application's speed and user experience.

## 1. Memoization with useMemo and useCallback

Prevent unnecessary re-renders by memoizing expensive computations and callback functions.

\`\`\`typescript
import { useMemo, useCallback } from 'react'

function ExpensiveComponent({ data, onUpdate }) {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item))
  }, [data])

  const handleClick = useCallback(() => {
    onUpdate(processedData)
  }, [processedData, onUpdate])

  return <div onClick={handleClick}>{/* render */}</div>
}
\`\`\`

## 2. Code Splitting with React.lazy

Load components only when they're needed to reduce initial bundle size.

\`\`\`typescript
const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  )
}
\`\`\`

## 3. Virtual Lists for Large Datasets

Use libraries like react-window to render only visible items in large lists.

## 4. Image Optimization

- Use Next.js Image component
- Implement lazy loading
- Serve WebP format with fallbacks
- Use proper sizing and responsive images

## Measuring Performance

Always measure before and after optimizations using:
- React DevTools Profiler
- Chrome Lighthouse
- Web Vitals metrics

Remember: premature optimization is the root of all evil. Profile first, then optimize based on data.`,
    publishDate: "2024-12-28",
    readTime: "7 min read",
    tags: ["React", "Performance", "Optimization", "Best Practices"],
    image: "/react-performance-optimization.png",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
  {
    slug: "microservices-architecture-nodejs",
    title: "Microservices Architecture with Node.js: Lessons Learned",
    excerpt:
      "Real-world insights from migrating a monolithic application to microservices using Node.js, including challenges, solutions, and architectural decisions.",
    content: `# Microservices Architecture with Node.js: Lessons Learned

Migrating from a monolithic architecture to microservices is a significant undertaking. Here's what I learned from our journey at SixBerries Ltd.

## Why Microservices?

Our monolithic application was becoming difficult to maintain and deploy. We needed:

- **Independent Deployments**: Deploy services without affecting others
- **Technology Flexibility**: Use the right tool for each service
- **Team Autonomy**: Enable teams to work independently
- **Better Scalability**: Scale services based on demand

## Architecture Overview

We built our microservices using:

\`\`\`typescript
// Service structure
├── api-gateway      // Entry point for all requests
├── auth-service     // Authentication & authorization
├── user-service     // User management
├── payment-service  // Payment processing
└── notification-service  // Email & SMS notifications
\`\`\`

## Inter-Service Communication

We used a combination of:

1. **REST APIs**: For synchronous communication
2. **Message Queues**: For asynchronous events (RabbitMQ)
3. **gRPC**: For high-performance internal communication

\`\`\`typescript
// Example: Publishing an event
import { connect } from 'amqplib'

async function publishEvent(event: string, data: any) {
  const connection = await connect(process.env.RABBITMQ_URL)
  const channel = await connection.createChannel()
  
  await channel.assertQueue(event)
  channel.sendToQueue(event, Buffer.from(JSON.stringify(data)))
}
\`\`\`

## Challenges We Faced

1. **Data Consistency**: Implementing saga patterns
2. **Service Discovery**: Using Consul for dynamic service location
3. **Monitoring**: Centralized logging with ELK stack
4. **Testing**: End-to-end testing across services

## Results

- 60% reduction in deployment time
- Independent team velocity
- Better resource utilization
- Improved system resilience

Microservices aren't a silver bullet, but for our use case, the benefits far outweighed the complexity.`,
    publishDate: "2024-12-20",
    readTime: "12 min read",
    tags: ["Microservices", "Node.js", "Architecture", "Backend"],
    image: "/microservices-architecture-nodejs.jpg",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
  {
    slug: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns for Full Stack Developers",
    excerpt:
      "Master advanced TypeScript patterns including generics, conditional types, and utility types to write more maintainable and type-safe code.",
    content: `# TypeScript Advanced Patterns for Full Stack Developers

TypeScript's type system is incredibly powerful. Let's explore advanced patterns that will level up your TypeScript game.

## 1. Generic Constraints

Create reusable functions with type safety using generic constraints.

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'Lokesh', age: 25 }
const name = getProperty(user, 'name') // Type: string
\`\`\`

## 2. Conditional Types

Create types that depend on other types.

\`\`\`typescript
type ApiResponse<T> = T extends { error: any }
  ? { success: false; error: string }
  : { success: true; data: T }

type UserResponse = ApiResponse<User> // { success: true; data: User }
type ErrorResponse = ApiResponse<{ error: Error }> // { success: false; error: string }
\`\`\`

## 3. Utility Types for API Responses

\`\`\`typescript
type AsyncReturnType<T extends (...args: any) => Promise<any>> = 
  T extends (...args: any) => Promise<infer R> ? R : never

async function fetchUser() {
  return { id: 1, name: 'Lokesh' }
}

type User = AsyncReturnType<typeof fetchUser> // { id: number; name: string }
\`\`\`

## 4. Branded Types for Runtime Safety

\`\`\`typescript
type UserId = string & { readonly brand: unique symbol }
type PostId = string & { readonly brand: unique symbol }

function getUser(id: UserId) { /* ... */ }
function getPost(id: PostId) { /* ... */ }

const userId = 'user-123' as UserId
getUser(userId) // ✅ Works
// getPost(userId) // ❌ Type error!
\`\`\`

## 5. Mapped Types for Transformations

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Optional<T> = {
  [P in keyof T]?: T[P]
}
\`\`\`

These patterns help catch errors at compile time, making your codebase more maintainable and your development experience more productive.`,
    publishDate: "2024-12-15",
    readTime: "9 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    image: "/typescript-code-patterns.jpg",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
  {
    slug: "seo-optimization-web-developers",
    title: "SEO for Web Developers: Technical Implementation Guide",
    excerpt:
      "A comprehensive guide to implementing SEO best practices in modern web applications, with focus on Core Web Vitals, structured data, and performance.",
    content: `# SEO for Web Developers: Technical Implementation Guide

SEO isn't just about keywords—it's about building fast, accessible, and crawlable websites. Here's how to implement technical SEO in your web applications.

## 1. Core Web Vitals

Google's Core Web Vitals are critical for SEO. Focus on:

### Largest Contentful Paint (LCP)
- Optimize images (WebP, lazy loading)
- Use CDN for static assets
- Implement server-side rendering

### First Input Delay (FID)
- Minimize JavaScript execution time
- Use code splitting
- Defer non-critical JavaScript

### Cumulative Layout Shift (CLS)
- Set explicit dimensions for images and videos
- Avoid inserting content above existing content
- Use CSS aspect-ratio for responsive images

## 2. Structured Data

Implement JSON-LD for rich search results:

\`\`\`typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO for Web Developers",
  "author": {
    "@type": "Person",
    "name": "Lokesh Bhatt"
  },
  "datePublished": "2024-12-10",
  "image": "https://example.com/image.jpg"
}
\`\`\`

## 3. Meta Tags in Next.js

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: ['/og-image.jpg'],
  },
}
\`\`\`

## 4. XML Sitemap

Generate dynamic sitemaps for better crawling:

\`\`\`typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
\`\`\`

## 5. Performance Optimization

- Use Next.js Image component
- Implement caching strategies
- Minimize render-blocking resources
- Use HTTP/2 and HTTP/3

By implementing these technical SEO practices, you'll improve your site's visibility and provide a better user experience.`,
    publishDate: "2024-12-10",
    readTime: "11 min read",
    tags: ["SEO", "Performance", "Next.js", "Best Practices"],
    image: "/seo-optimization-web-development.jpg",
    author: {
      name: "Lokesh Bhatt",
      bio: "Full Stack Developer passionate about building scalable web applications with modern technologies.",
    },
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  // Find posts with overlapping tags
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      commonTags: post.tags.filter((tag) => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.commonTags - a.commonTags)
    .slice(0, limit)
    .map((item) => item.post)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
}
