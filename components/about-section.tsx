"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Rocket,
  Users,
  Target,
  Lightbulb,
  Trophy,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { icon: Code2, label: "React/Next.js", color: "from-blue-500 to-cyan-400" },
    {
      icon: Database,
      label: "Node.js & APIs",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Rocket,
      label: "Performance",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Users,
      label: "Team Leadership",
      color: "from-orange-500 to-amber-400",
    },
    {
      icon: Target,
      label: "Problem Solving",
      color: "from-red-500 to-rose-400",
    },
    {
      icon: Lightbulb,
      label: "UI/UX Design",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background to-muted/30 py-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-2 border-primary/30 bg-primary/10"
            >
              <Sparkles className="h-3 w-3" />
              About Me
            </Badge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              Passionate developer building the future, one line of code at a
              time
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Main content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Experience & Expertise
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      4+ Years Professional Journey
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-pretty text-lg leading-relaxed">
                  <p>
                    I'm a Full Stack Developer with{" "}
                    <strong className="text-foreground">
                      4+ years of professional experience
                    </strong>{" "}
                    building web applications that make a difference. Based in
                    Ahmedabad, India, I specialize in creating{" "}
                    <strong className="text-foreground">
                      scalable, high-performance solutions
                    </strong>{" "}
                    that deliver exceptional user experiences.
                  </p>
                  <p>
                    My expertise spans both{" "}
                    <strong className="text-foreground">
                      frontend and backend development
                    </strong>
                    , with a strong focus on modern JavaScript frameworks and
                    best practices. I thrive in agile environments where clean
                    code, performance optimization, and continuous learning are
                    valued.
                  </p>
                  <p>
                    Passionate about writing{" "}
                    <strong className="text-foreground">
                      maintainable code
                    </strong>
                    , solving complex problems, and staying up-to-date with the
                    latest technologies to deliver cutting-edge solutions for
                    startups and product companies.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "5+", label: "Projects Completed", suffix: "" },
                  { value: "10+", label: "Core Technologies", suffix: "" },
                  { value: "100%", label: "Uptime", suffix: "" },
                  { value: "4+", label: "Years Experience", suffix: "" },
                ].map((stat, index) => (
                  <Card
                    key={stat.label}
                    className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column - Skills & Approach */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Skills Grid */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
                <h3 className="mb-6 text-2xl font-bold">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div
                            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} p-2`}
                          >
                            <skill.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {skill.label}
                          </h4>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">My Philosophy</h3>
                </div>
                <p className="leading-relaxed">
                  I believe that great software is built at the intersection of{" "}
                  <strong className="text-foreground">
                    technical excellence
                  </strong>{" "}
                  and <strong className="text-foreground">user empathy</strong>.
                  Every line of code should serve a purpose, every interface
                  should feel intuitive, and every feature should solve real
                  problems.
                </p>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-xl font-bold">Currently Focused On</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="gap-2 bg-primary/10 text-primary hover:bg-primary/20">
                    <Rocket className="h-3 w-3" />
                    Next.js 14 App Router
                  </Badge>
                  <Badge className="gap-2 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                    TypeScript
                  </Badge>
                  <Badge className="gap-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">
                    Performance
                  </Badge>
                  <Badge className="gap-2 bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                    Serverless
                  </Badge>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Quote/Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="mx-auto max-w-2xl">
              <div className="text-lg italic text-muted-foreground">
                "Building software is more than writing code—it's about creating
                solutions that empower people and transform ideas into reality."
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
