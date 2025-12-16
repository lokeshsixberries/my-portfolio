"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Users,
  Zap,
  TrendingUp,
  BarChart3,
  Award,
  Calendar,
  MapPin,
  Building,
  ArrowRight,
  Star,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "SixBerries Ltd",
    role: "Full Stack / Frontend Developer",
    period: "Apr 2022 – Present",
    duration: "4+ years",
    location: "Remote",
    description: "Building scalable SaaS products for global clients",
    icon: Building,
    color: "from-blue-500 to-cyan-400",
    achievements: [
      {
        icon: Rocket,
        title: "Scalable Architecture",
        description:
          "Architected and developed scalable full-stack applications using React, Next.js, and Node.js, serving thousands of active users",
        metrics: "10K+ active users",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description:
          "Optimized application performance achieving 95+ Lighthouse scores and sub-second load times",
        metrics: "95+ Lighthouse score",
      },
      {
        icon: Target,
        title: "Architecture Migration",
        description:
          "Led migration from monolithic architecture to microservices, reducing deployment time by 60%",
        metrics: "60% faster deployment",
      },
      {
        icon: Users,
        title: "Team Leadership",
        description:
          "Mentored junior developers on React best practices, code review, and testing strategies",
        metrics: "3 developers mentored",
      },
      {
        icon: BarChart3,
        title: "API Development",
        description:
          "Implemented GraphQL APIs and real-time features using WebSockets, improving data efficiency by 40%",
        metrics: "40% efficiency gain",
      },
      {
        icon: TrendingUp,
        title: "Agile Collaboration",
        description:
          "Collaborated with cross-functional teams in agile environment to deliver features on tight deadlines",
        metrics: "50+ features delivered",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "IMG Global Infotech",
    role: "Frontend Developer",
    period: "Oct 2021 – Mar 2022",
    duration: "6 Months",
    location: "Jaipur, India",
    description: "Developed e-commerce platforms and internal tools",
    icon: Building,
    color: "from-purple-500 to-pink-400",
    achievements: [
      {
        icon: Rocket,
        title: "E-commerce Platform",
        description:
          "Built a responsive e-commerce platform handling 5k+ daily users",
        metrics: "5k+ daily users",
      },
      {
        icon: Zap,
        title: "Performance Boost",
        description:
          "Improved page load times by 70% through code splitting and lazy loading",
        metrics: "70% faster loading",
      },
      {
        icon: Target,
        title: "Component Library",
        description:
          "Created reusable component library used across 4 different projects",
        metrics: "50+ components",
      },
    ],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "SCSS",
      "REST APIs",
      "MongoDB",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background to-muted/20 py-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />
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
              <Award className="h-3 w-3" />
              Professional Journey
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Work{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Building impactful solutions and scaling products for growing
              companies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-6 z-10 h-4 w-4 rounded-full border-4 border-background bg-gradient-to-r ${exp.color} md:left-1/2 md:-translate-x-1/2`}
                  >
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                  </div>

                  <Card
                    className={`relative ml-12 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl md:ml-0 md:w-11/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                    onMouseEnter={() => setActiveExp(index)}
                  >
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${exp.color}`}
                    />

                    <div className="p-8">
                      {/* Header */}
                      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color}`}
                            >
                              <exp.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">
                                {exp.company}
                              </h3>
                              <p className="text-lg font-medium text-primary">
                                {exp.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                              <Badge variant="secondary" className="ml-2">
                                {exp.duration}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-6 text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Achievements Grid */}
                      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="rounded-lg border border-border/30 bg-background/50 p-4 transition-all hover:border-primary/30 hover:shadow-md"
                          >
                            <div className="mb-3 flex items-center justify-between">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-10 p-2`}
                              >
                                <achievement.icon className="h-5 w-5" />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {achievement.metrics}
                              </Badge>
                            </div>
                            <h4 className="mb-2 font-semibold">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <Star className="h-4 w-4 text-yellow-500" />
                          Technologies & Tools
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="gap-1 border-border/50 bg-background/50"
                            >
                              <div
                                className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${exp.color}`}
                              />
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Current position indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-medium text-primary">
                  Currently employed at SixBerries Ltd
                </span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          </div>

          {/* Additional Experience Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 grid gap-6 md:grid-cols-3"
          >
            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/10 p-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="font-semibold">Career Growth</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Progressed from Frontend Developer to Full Stack Developer,
                taking on architectural decisions
              </p>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="font-semibold">Leadership</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Mentored 5+ junior developers and led technical decisions for
                multiple projects
              </p>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold">Impact</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Contributed to products serving 10,000+ users with 99.9% uptime
                and excellent performance
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
