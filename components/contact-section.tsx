"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Sparkles,
  MessageSquare,
  ExternalLink,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "lokesh@example.com",
    link: "mailto:lokesh@example.com",
    description: "Typically reply within 12 hours",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/lokeshbhatt",
    link: "https://linkedin.com/in/lokeshbhatt",
    description: "Connect for professional inquiries",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/lokeshbhatt",
    link: "https://github.com/lokeshbhatt",
    description: "View my open-source contributions",
    color: "from-gray-800 to-gray-600",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    description: "Available Mon-Fri, 10AM-6PM IST",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, India",
    description: "Open to remote opportunities worldwide",
    color: "from-red-500 to-orange-400",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      company: "",
      budget: "",
      timeline: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
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
            <div className="inline-block">
              <Button
                variant="outline"
                className="mb-4 gap-2 border-primary/30 bg-primary/10"
              >
                <MessageSquare className="h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind? Let's discuss how we can turn your ideas
              into reality
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Why Work With Me</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Full-stack expertise for end-to-end solutions",
                      "Proven track record with 50+ successful projects",
                      "Agile development with transparent communication",
                      "Focus on performance, scalability, and UX",
                      "On-time delivery with attention to detail",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    Response Time
                  </div>
                  <div className="rounded-lg border border-border/30 bg-background/50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Initial Response
                      </span>
                      <span className="font-semibold">Within 12 hours</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Project Start
                      </span>
                      <span className="font-semibold">1-2 weeks</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Availability</h3>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-border/30 bg-background/50 px-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Current Status</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        <span className="text-sm font-semibold text-green-500">
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Center Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-green-500">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-sm text-green-500/80">
                          Thank you for reaching out. I'll get back to you
                          within 12 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        {...register("firstName")}
                        className={
                          errors.firstName
                            ? "border-red-500 focus-visible:ring-red-500"
                            : "h-12 mt-2"
                        }
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        {...register("lastName")}
                        className={
                          errors.lastName
                            ? "border-red-500 focus-visible:ring-red-500"
                            : "h-12 mt-2"
                        }
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={
                        errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "h-12 mt-2"
                      }
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      {...register("company")}
                      className="h-12 mt-2"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, goals, and timeline..."
                      {...register("message")}
                      className={
                        errors.message
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "h-37 mt-2"
                      }
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    I typically respond within 12 hours. Your information is
                    secure and will never be shared.
                  </p>
                </form>
              </Card>

              {/* Contact Methods Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={fadeInUp}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50">
                      <div className="space-y-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${info.color}`}
                        >
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">
                            {info.title}
                          </h4>
                          {/* <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p> */}
                        </div>
                        {/* {info.link ? (
                          <a
                            href={info.link}
                            target={
                              info.title !== "Phone" ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-1 text-sm font-medium text-primary"
                          >
                            {info.value}
                            <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{info.value}</p>
                        )} */}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
