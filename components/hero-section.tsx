"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronRight,
  Sparkles,
  Code2,
  Cpu,
  Zap,
  MoveDown,
  Server,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-3/4 left-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mx-auto max-w-4xl"
        >
          {/* Tech badges */}
          <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-2">
              <Code2 className="h-3 w-3" />
              React
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Sparkles className="h-3 w-3" />
              Next.js 14
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Cpu className="h-3 w-3" />
              TypeScript
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Zap className="h-3 w-3" />
              GraphQL
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Server className="h-3 w-3" />
              Serverless
            </Badge>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Lokesh Sharma
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-3 bg-primary/20 -rotate-1"
                />
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Specialist",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-foreground/90"
              />
            </h1>

            <motion.p
              variants={fadeInUp}
              className="text-pretty text-lg text-muted-foreground md:text-xl"
            >
              Building{" "}
              <span className="font-semibold text-foreground">
                scalable, high-performance
              </span>{" "}
              web applications with modern technologies. I create exceptional
              digital experiences that solve real-world problems.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="my-10 flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden"
              >
                <Link href="/#projects">
                  <span className="relative z-10">View Projects</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group hover:text-white"
              >
                <Link href="/blog">
                  <Sparkles className="ml-2 h-4 w-4 transition-all text-white " />
                  <span>Read Blog</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1JjjIm6lhiqgKla3JhsbzjNSaQIp6Ugjv/view"
                  );
                }}
                className="group cursor-pointer hover:text-white"
              >
                <p>
                  <FileText className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                  Download Resume
                  <span className="ml-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </p>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 pt-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Connect with me
              </p>
              <div className="flex gap-2">
                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    asChild
                    className="group relative h-12 w-12 rounded-full text-white hover:text-black"
                  >
                    <a
                      href="https://github.com/lokeshsixberries"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 hover:text-white" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    asChild
                    className="group relative h-12 w-12 rounded-full text-white hover:text-black"
                  >
                    <a
                      href="https://www.linkedin.com/in/lokeshsharma9895/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 hover:text-white" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    size="icon"
                    asChild
                    className="group relative h-12 w-12 rounded-full text-white hover:text-black"
                  >
                    <a
                      href="mailto:sharma.lokesh.222001@gmail.com"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 hover:text-white" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4"
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "100%  ", label: "Projects Up Time" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "∞", label: "Cups of Coffee" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  className="rounded-lg border bg-card/50 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <MoveDown className="text-center mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
