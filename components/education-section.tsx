"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  Star,
  Trophy,
  Brain,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Rajasthan Technical University",
    period: "2018 - 2022",
    duration: "4 years",
    location: "Udaipur, India",
    score: "SGPA: 9.20 / 10.0",
    percentage: "92%",
    achievements: [
      "University Topper - Department of Computer Science",
      "Published 2 research papers in international conferences",
      "Led coding club with 200+ members",
      "Winner of 5+ national-level hackathons",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Management",
      "Software Engineering",
      "Machine Learning",
      "Web Technologies",
    ],
    color: "from-blue-500 to-cyan-400",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
  },
  {
    degree: "Higher Secondary (12th Science)",
    institution: "Govt. Senior Secondary School",
    period: "2018",
    duration: "1 year",
    location: "Bhilwara, India",
    score: "Percentage: 80.80%",
    percentage: "81%",
    achievements: ["State Rank Holder in Science Maths"],
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English",
    ],
    color: "from-purple-500 to-pink-400",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-400/20",
  },
];

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: Award,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2022",
    icon: Award,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    year: "2022",
    icon: BookOpen,
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "System Design",
    issuer: "Educative",
    year: "2021",
    icon: Brain,
    color: "from-green-500 to-emerald-400",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EducationSection() {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">(
    "education"
  );

  return (
    <section
      id="education"
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
              <GraduationCap className="h-3 w-3" />
              Academic Journey
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Education &{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Continuous learning and academic excellence that forms the
              foundation of my technical expertise
            </p>
          </motion.div>

          {/* Toggle Tabs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex justify-center"
          >
            <div className="inline-flex rounded-lg border border-border/50 bg-card/30 p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("education")}
                className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === "education"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <GraduationCap className="mr-2 inline h-4 w-4" />
                Academic
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === "certifications"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Award className="mr-2 inline h-4 w-4" />
                Certifications
              </button>
            </div>
          </motion.div>

          {/* Education Cards */}
          {activeTab === "education" && (
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl">
                    {/* Gradient background effect */}
                    <div
                      className={`absolute inset-0 ${edu.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative p-8">
                      <div className="grid gap-8 lg:grid-cols-3">
                        {/* Left Column - Basic Info */}
                        <div className="space-y-6 lg:col-span-2">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${edu.color}`}
                            >
                              <GraduationCap className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold">
                                {edu.degree}
                              </h3>
                              <p className="text-lg text-primary">
                                {edu.institution}
                              </p>
                              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{edu.period}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{edu.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Score with visual indicator */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Trophy className="h-5 w-5 text-yellow-500" />
                                  <span className="font-semibold">
                                    Academic Performance
                                  </span>
                                </div>
                                <p className="text-lg font-bold text-foreground">
                                  {edu.score}
                                </p>
                              </div>
                              {/* Progress circle */}
                              <div className="relative h-20 w-20">
                                <svg
                                  className="h-full w-full"
                                  viewBox="0 0 100 100"
                                >
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="none"
                                    className="text-border"
                                  />
                                  <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="url(#gradient)"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray={`${
                                      parseInt(edu.percentage) * 2.51
                                    } 251`}
                                    className="rotate-90 origin-center"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="gradient"
                                      x1="0%"
                                      y1="0%"
                                      x2="100%"
                                      y2="0%"
                                    >
                                      <stop
                                        offset="0%"
                                        className="stop-color-primary"
                                      />
                                      <stop
                                        offset="100%"
                                        className="stop-color-primary/70"
                                      />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-xl font-bold">
                                    {edu.percentage}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-3">
                              <h4 className="flex items-center gap-2 text-sm font-semibold">
                                <Award className="h-4 w-4" />
                                Notable Achievements
                              </h4>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {edu.achievements.map((achievement, i) => (
                                  <motion.div
                                    key={achievement}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.4 + i * 0.1,
                                    }}
                                    className="flex items-center gap-2 rounded-lg bg-background/50 p-3"
                                  >
                                    <Sparkles className="h-4 w-4 text-primary" />
                                    <span className="text-sm">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Coursework */}
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <h4 className="flex items-center gap-2 text-sm font-semibold">
                              <BookOpen className="h-4 w-4" />
                              Key Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.coursework.map((course, i) => (
                                <motion.div
                                  key={course}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.6 + i * 0.05,
                                  }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="gap-1.5 border-border/50 bg-background/50 backdrop-blur-sm"
                                  >
                                    <div
                                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${edu.color}`}
                                    />
                                    {course}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Duration & Details */}
                          <div className="space-y-3 rounded-lg border border-border/30 bg-background/50 p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                Duration
                              </div>
                              <span className="font-semibold">
                                {edu.duration}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                Batch Size
                              </div>
                              <span className="font-semibold">
                                120 Students
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 text-yellow-500" />
                                Rank
                              </div>
                              <span className="font-semibold">Top 5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* Certifications Grid */}
          {activeTab === "certifications" && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl">
                    <div
                      className={`absolute inset-0 ${cert.color.replace(
                        "from-",
                        "bg-gradient-to-br from-"
                      )}/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color}`}
                        >
                          <cert.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      <h3 className="mb-2 text-center text-lg font-semibold">
                        {cert.title}
                      </h3>
                      <p className="mb-4 text-center text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                        <div
                          className={`h-2 w-12 rounded-full bg-gradient-to-r ${cert.color}`}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Learning Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Learning Philosophy</h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    I believe in continuous learning through hands-on projects,
                    open-source contributions, and staying updated with industry
                    trends. My academic background provides strong fundamentals,
                    while certifications and self-learning keep me current with
                    evolving technologies.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-500/10 p-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold">Current Focus</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gap-2 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                      Advanced TypeScript
                    </Badge>
                    <Badge className="gap-2 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                      System Design
                    </Badge>
                    <Badge className="gap-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                      DevOps Best Practices
                    </Badge>
                    <Badge className="gap-2 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                      Performance Engineering
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
