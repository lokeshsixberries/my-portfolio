"use client";

import { Card } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  Zap,
  Shield,
  Cloud,
  TestTube,
  Sparkles,
  Cpu,
  Terminal,
  Layers,
  Globe,
  GitBranch,
  Cpu as CpuIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Framer Motion",
      "Shadcn UI",
    ],
    color: "from-blue-500 to-cyan-400",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Fastify",
      "tRPC",
      "Server Actions",
    ],
    color: "from-green-500 to-emerald-400",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-400/20",
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "TypeORM",
      "Drizzle",
      "Supabase",
      "PlanetScale",
    ],
    color: "from-purple-500 to-pink-400",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-400/20",
  },
  {
    icon: Zap,
    title: "APIs & Integrations",
    skills: [
      "GraphQL",
      "REST",
      "tRPC",
      "WebSockets",
      "Stripe",
      "Resend",
      "Uploadthing",
      "Clerk",
    ],
    color: "from-yellow-500 to-orange-400",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-400/20",
  },
  {
    icon: Shield,
    title: "Authentication",
    skills: [
      "JWT",
      "OAuth",
      "NextAuth.js",
      "Passport.js",
      "Auth.js",
      "Clerk",
      "Supabase Auth",
    ],
    color: "from-red-500 to-rose-400",
    gradient: "bg-gradient-to-br from-red-500/20 to-rose-400/20",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Railway",
      "Terraform",
    ],
    color: "from-indigo-500 to-blue-400",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-400/20",
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "MSW",
      "Storybook",
    ],
    color: "from-pink-500 to-rose-400",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-400/20",
  },
  {
    icon: Sparkles,
    title: "AI & Tools",
    skills: [
      "OpenAI",
      "LangChain",
      "Vercel AI SDK",
      "GitHub Copilot",
      "Cursor",
      "Replicate",
    ],
    color: "from-violet-500 to-purple-400",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-400/20",
  },
  {
    icon: Terminal,
    title: "Development",
    skills: [
      "Git",
      "VS Code",
      "Neovim",
      "ESLint",
      "Prettier",
      "npm/pnpm/yarn",
      "Webpack",
      "Vite",
    ],
    color: "from-cyan-500 to-blue-400",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-400/20",
  },
  {
    icon: Layers,
    title: "Architecture",
    skills: [
      "Microservices",
      "Monorepos",
      "Serverless",
      "Edge Functions",
      "PWA",
      "Web3",
    ],
    color: "from-emerald-500 to-green-400",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-green-400/20",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow", "Trunk-based"],
    color: "from-orange-500 to-amber-400",
    gradient: "bg-gradient-to-br from-orange-500/20 to-amber-400/20",
  },
  {
    icon: Globe,
    title: "Performance",
    skills: [
      "Core Web Vitals",
      "Lighthouse",
      "Bundle Analysis",
      "Caching",
      "CDN",
      "Image Optimization",
    ],
    color: "from-fuchsia-500 to-pink-400",
    gradient: "bg-gradient-to-br from-fuchsia-500/20 to-pink-400/20",
  },
];

const proficiencyLevels = [
  { label: "Expert", color: "bg-gradient-to-r from-green-500 to-emerald-400" },
  { label: "Advanced", color: "bg-gradient-to-r from-blue-500 to-cyan-400" },
  {
    label: "Proficient",
    color: "bg-gradient-to-r from-purple-500 to-pink-400",
  },
  {
    label: "Familiar",
    color: "bg-gradient-to-r from-yellow-500 to-orange-400",
  },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute left-1/3 top-2/3 h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl space-y-16"
        >
          {/* Header */}
          <div className="space-y-6 text-center">
            <div className="inline-block">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 bg-primary/10 px-4 py-1.5"
              >
                <CpuIcon className="mr-2 h-3 w-3" />
                Technical Expertise
              </Badge>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Skills &{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A comprehensive toolkit for building modern, scalable, and
              performant web applications
            </p>
          </div>

          {/* Proficiency Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-lg font-semibold">Proficiency Levels</h3>
            <div className="flex flex-wrap gap-4">
              {proficiencyLevels.map((level) => (
                <div key={level.label} className="flex items-center gap-2">
                  <div className={`h-3 w-12 rounded-full ${level.color}`} />
                  <span className="text-sm text-muted-foreground">
                    {level.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredSkill(category.title)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <Card
                  className={`group relative h-full overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl ${
                    hoveredSkill === category.title
                      ? "ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  {/* Gradient background effect */}
                  <div
                    className={`absolute inset-0 ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative p-6">
                    {/* Icon */}
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} p-2.5`}
                      >
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 w-1 rounded-full ${
                              i === 0
                                ? "bg-green-500"
                                : i === 1
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.05,
                          }}
                          className="flex items-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                          <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/10 p-2">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="font-semibold">Fast Learning</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Quickly adapt to new technologies and frameworks to stay ahead
                of industry trends
              </p>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Best Practices</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Commitment to clean code, testing, documentation, and modern
                development workflows
              </p>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <Cpu className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Continuous Growth</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Constantly exploring new tools and techniques to improve
                development efficiency
              </p>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground">
              Always expanding my skillset. Currently exploring:{" "}
              <Badge variant="secondary" className="mx-2">
                Rust
              </Badge>
              <Badge variant="secondary" className="mx-2">
                Go
              </Badge>
              <Badge variant="secondary" className="mx-2">
                Three.js
              </Badge>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
