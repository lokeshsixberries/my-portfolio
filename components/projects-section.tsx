"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Eye,
  Users,
  Zap,
  TrendingUp,
  Building,
  Shield,
  BarChart3,
  Cpu,
  Globe,
  Sparkles,
  Target,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Infabode",
    subtitle: "Real Estate Platform",
    problem:
      "Traditional real estate platforms lacked modern UX, real-time updates, and efficient property discovery",
    solution:
      "Built a comprehensive SaaS platform with advanced search algorithms, real-time notifications, virtual tours, and AI-powered property recommendations",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "WebSockets",
      "Stripe",
      "AWS",
    ],
    impact: "10,000+ active listings, 50% faster property discovery",
    metrics: [
      { icon: Users, value: "200k+", label: "Users" },
      { icon: Eye, value: "10m+", label: "Active Listings" },
      { icon: Zap, value: "50%", label: "Faster Discovery" },
      { icon: TrendingUp, value: "99.9%", label: "Uptime" },
    ],
    link: "https://infabode.com",
    color: "from-blue-500 to-cyan-400",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
  },
  {
    title: "CredScout",
    subtitle: "Email Breach Detection Platform",
    problem:
      "Individuals and businesses lacked a centralized, real-time system to monitor email security breaches",
    solution:
      "Developed a secure breach detection service integrating multiple breach databases with real-time alerts, dark web monitoring, and automated security recommendations",
    tech: [
      "React",
      "Node.js",
      "Redis",
      "MongoDB",
      "WebSockets",
      "Auth0",
      "Docker",
      "AWS Lambda",
    ],
    impact: "1M+ emails checked, 99.9% uptime, 100K+ breaches detected",
    metrics: [
      { icon: Shield, value: "10k+", label: "Emails Checked" },
      { icon: Eye, value: "100K+", label: "Breaches Detected" },
      { icon: Zap, value: "99.9%", label: "Uptime" },
      { icon: TrendingUp, value: "Real-time", label: "Monitoring" },
    ],
    link: "https://credscout.com",
    color: "from-purple-500 to-pink-400",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-400/20",
  },
  {
    title: "Promolens",
    subtitle: "Analytics & Insights Platform",
    problem:
      "Businesses struggled to unify and analyze customer behavior data across multiple channels in real-time",
    solution:
      "Created an enterprise analytics dashboard with real-time data visualization, AI-powered insights, predictive analytics, and automated reporting",
    tech: [
      "Next.js",
      "GraphQL",
      "ClickHouse",
      "D3.js",
      "tRPC",
      "Redis",
      "Kafka",
      "Python",
    ],
    impact:
      "500+ businesses, 2B+ events tracked monthly, 40% reduction in reporting time",
    metrics: [
      { icon: Building, value: "500+", label: "Businesses" },
      { icon: BarChart3, value: "2m+", label: "Monthly Events" },
      { icon: Zap, value: "40%", label: "Time Saved" },
      { icon: TrendingUp, value: "95%", label: "Accuracy" },
    ],
    link: "https://promolens.com",
    color: "from-green-500 to-emerald-400",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-400/20",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute left-1/3 top-2/3 h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <Badge
              variant="outline"
              className="mb-4 gap-2 border-primary/30 bg-primary/10"
            >
              <Rocket className="h-3 w-3" />
              Portfolio Showcase
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Real-world solutions that solve complex problems and deliver
              measurable impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.005 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card
                  className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl ${
                    hoveredProject === project.title
                      ? "ring-2 ring-primary/20"
                      : ""
                  }`}
                >
                  {/* Gradient background effect */}
                  <div
                    className={`absolute inset-0 ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Corner accent */}
                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${project.gradient} opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:scale-150`}
                  />

                  <div className="relative p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                      {/* Left Column - Project Info */}
                      <div className="space-y-6">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color}`}
                            >
                              <Globe className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold lg:text-3xl">
                                {project.title}
                              </h3>
                              <p className="text-lg text-muted-foreground">
                                {project.subtitle}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <Target className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">
                              High-impact SaaS product
                            </span>
                          </div>
                        </div>

                        {/* Problem & Solution */}
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-red-500" />
                              <h4 className="font-semibold text-primary">
                                The Challenge
                              </h4>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {project.problem}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <h4 className="font-semibold text-primary">
                                My Solution
                              </h4>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Tech & Metrics */}
                      <div className="space-y-8">
                        {/* Metrics */}
                        <div>
                          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                            <BarChart3 className="h-4 w-4" />
                            Key Metrics & Impact
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {project.metrics.map((metric, i) => (
                              <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.5 + i * 0.1,
                                }}
                                whileHover={{ y: -4 }}
                                className="rounded-lg border border-border/30 bg-background/50 p-4 backdrop-blur-sm"
                              >
                                <div className="mb-2 flex items-center gap-2">
                                  <metric.icon className="h-4 w-4" />
                                  <div
                                    className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                                  >
                                    {metric.value}
                                  </div>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.label}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                          <h4 className="flex items-center gap-2 text-sm font-semibold">
                            <Cpu className="h-4 w-4" />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.7 + i * 0.05,
                                }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="group/tech gap-1.5 border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:scale-105"
                                >
                                  <div
                                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.color}`}
                                  />
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.9 }}
                        >
                          <Button
                            asChild
                            size="lg"
                            className={`group/btn w-full bg-gradient-to-r ${project.color} hover:shadow-lg hover:scale-105 transition-all`}
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Visit Live Project</span>
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects/CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="mx-auto max-w-2xl space-y-6">
              <h3 className="text-2xl font-bold">Want to see more?</h3>
              <p className="text-muted-foreground">
                I've worked on 20+ other projects across various domains
                including fintech, healthcare, and education.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/lokeshbhatt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    View GitHub
                  </a>
                </Button>
                <Button size="lg" asChild>
                  <a href="#contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <Rocket className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold">20+</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/10 p-2">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold">100K+</div>
              </div>
              <div className="text-sm text-muted-foreground">End Users</div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div className="text-2xl font-bold">99.9%</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Average Uptime
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                </div>
                <div className="text-2xl font-bold">50-70%</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Performance Gains
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
