"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  Code2,
  Sparkles,
  Cpu,
  Rocket,
  MessageSquare,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const techStack = [
  { name: "Next.js", color: "text-gray-800", bg: "bg-gray-100" },
  { name: "TypeScript", color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Tailwind CSS", color: "text-cyan-600", bg: "bg-cyan-100" },
  { name: "shadcn/ui", color: "text-purple-600", bg: "bg-purple-100" },
  { name: "Vercel", color: "text-black", bg: "bg-gray-200" },
  { name: "Framer Motion", color: "text-pink-600", bg: "bg-pink-100" },
];

const links = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/lokeshsixberries",
    icon: "github",
    color: "hover:text-gray-800",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lokeshsharma9895/",
    icon: "linkedin",
    color: "hover:text-blue-700",
  },
  {
    label: "Twitter",
    href: "https://x.com/LokeshS61182227",
    icon: "twitter",
    color: "hover:text-sky-500",
  },
  {
    label: "Email",
    href: "mailto:sharma.lokesh.222001@gmail.com",
    icon: "mail",
    color: "hover:text-red-600",
  },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(50);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCoffeeClick = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Tech Stack */}
        <div className="border-b border-border/50 py-8">
          <div className="mb-6 text-center">
            <Badge
              variant="outline"
              className="gap-2 border-primary/30 bg-primary/10"
            >
              <Cpu className="h-3 w-3" />
              Built With
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Badge
                  variant="secondary"
                  className={`gap-2 border-border/50 ${tech.bg} ${tech.color} transition-all hover:scale-105`}
                >
                  <Code2 className="h-3 w-3" />
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80">
                  <span className="text-xl font-bold text-white">LB</span>
                </div>
                <span className="text-xl font-bold">Lokesh Bhatt</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer building modern web applications with
                cutting-edge technologies and exceptional user experiences.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full"
                    >
                      {social.icon === "github" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {social.icon === "linkedin" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.icon === "twitter" && (
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      )}
                      {social.icon === "mail" && (
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </Button>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Applications",
                  "API Development",
                  "Performance Optimization",
                  "Technical Consulting",
                ].map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Stats */}
            <div className="space-y-4">
              <h3 className="font-semibold">Fun Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">Coffee Consumed</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCoffeeClick}
                    className="h-auto p-1"
                  >
                    <Badge variant="outline" className="gap-1">
                      {coffeeCount} cups
                      <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                    </Badge>
                  </Button>
                </div>
                <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-primary" />
                    <span className="text-sm">Site Performance</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                      />
                    </div>
                    <span className="text-xs font-medium">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Lokesh Bhatt</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
              <span>•</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
                className="inline-flex items-center gap-1"
              >
                <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                Made with passion
              </motion.span>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="#contact">
                  <MessageSquare className="h-3 w-3" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
