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
  AlertCircle,
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
    link: "mailto:sharma.lokesh.222001@gmail.com",
    description: "Typically reply within 12 hours",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/lokeshbhatt",
    link: "https://www.linkedin.com/in/lokeshsharma9895/",
    description: "Connect for professional inquiries",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/lokeshbhatt",
    link: "https://github.com/lokeshsixberries",
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
    link: "https://maps.app.goo.gl/ywHafYxatHkT3s8z6",
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
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    city?: string;
    country?: string;
  } | null>(null);

  const TELEGRAM_BOT_TOKEN = "8502299983:AAH3GXIahePYICF2Uv11aQnmaiEH3fj1HYo";
  const TELEGRAM_CHAT_ID = "1060120862";

  // Function to get user's current location
  const getUserLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      }
    });
  };

  // Function to reverse geocode coordinates to get city/country
  const reverseGeocode = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`
      );
      const data = await response.json();
      return {
        city: data.address?.city || data.address?.town || data.address?.village,
        country: data.address?.country,
      };
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      return null;
    }
  };

  // Function to get location details
  const getLocationDetails = async (): Promise<{
    latitude: number;
    longitude: number;
    city?: string;
    country?: string;
  }> => {
    setIsGettingLocation(true);
    setLocationError(null);

    try {
      // Get user's current location
      const position = await getUserLocation();
      const { latitude, longitude } = position.coords;

      // Try to get city/country information
      const locationInfo = await reverseGeocode(latitude, longitude);

      const locationData = {
        latitude,
        longitude,
        city: locationInfo?.city,
        country: locationInfo?.country,
      };

      setUserLocation(locationData);
      return locationData;
    } catch (error: any) {
      let errorMessage = "Failed to get location.";

      if (error.code === 1) {
        errorMessage =
          "Location permission denied. Please allow location access.";
      } else if (error.code === 2) {
        errorMessage =
          "Location unavailable. Please check your network connection.";
      } else if (error.code === 3) {
        errorMessage = "Location request timed out. Please try again.";
      }

      setLocationError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsGettingLocation(false);
    }
  };

  const sendTelegramMessage = async (
    formData: FormData,
    locationData?: {
      latitude: number;
      longitude: number;
      city?: string;
      country?: string;
    }
  ) => {
    let locationText = "";

    if (locationData) {
      const mapsLink = `https://www.google.com/maps?q=${locationData.latitude},${locationData.longitude}`;
      locationText = `
📍 *Location Information:*
   • *Coordinates:* ${locationData.latitude.toFixed(
     6
   )}, ${locationData.longitude.toFixed(6)}
   • *City:* ${locationData.city || "Unknown"}
   • *Country:* ${locationData.country || "Unknown"}
   • [View on Google Maps](${mapsLink})`;
    } else {
      locationText = "\n📍 *Location:* Not provided (user denied permission)";
    }

    const message = `
🎯 *New Contact Form Submission*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email || "Not provided"}
🏢 *Company:* ${formData.company || "Not specified"}

💬 *Message:*
${formData.message}
${locationText}

📅 *Submitted at:* ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}
🌐 *Source:* Portfolio Website
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
            disable_web_page_preview: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Telegram API Error:", data);
        throw new Error(data.description || "Failed to send message");
      }

      console.log("Telegram message sent successfully:", data);
      return true;
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      setTelegramError(
        "Form submitted successfully, but notification failed. I'll contact you via email."
      );
      return false;
    }
  };

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
    setTelegramError(null);
    setLocationError(null);

    try {
      // Ask for location permission first
      let locationData;
      try {
        // Show location permission dialog
        const permission = await navigator.permissions.query({
          name: "geolocation" as any,
        });

        if (permission.state === "denied") {
          // If permission was previously denied, show a message
          const shouldContinue = window.confirm(
            "Location permission was previously denied. Submit form without location?"
          );

          if (!shouldContinue) {
            setIsSubmitting(false);
            return;
          }
        } else {
          // Try to get location
          locationData = await getLocationDetails();
        }
      } catch (locationError: any) {
        // If user denies location, ask if they want to continue
        const shouldContinue = window.confirm(
          `${locationError.message}\n\nSubmit form without location?`
        );

        if (!shouldContinue) {
          setIsSubmitting(false);
          return;
        }
      }

      // Send to Telegram with location data
      const telegramSuccess = await sendTelegramMessage(
        data,
        locationData || undefined
      );

      // Simulate API call for your backend (you can add your actual API here)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log to console for debugging
      console.log("Form submitted:", {
        ...data,
        location: locationData,
        telegramSent: telegramSuccess,
        timestamp: new Date().toISOString(),
      });

      // Show success message
      setIsSubmitted(true);

      // Reset form
      reset();
      setUserLocation(null);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setTelegramError(
        "An error occurred. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get your Telegram Chat ID
  const getChatId = async () => {
    if (!TELEGRAM_BOT_TOKEN) {
      console.error("Telegram bot token is not set");
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
      );
      const data = await response.json();
      console.log("Telegram updates:", data);

      if (data.ok && data.result.length > 0) {
        const chatId = data.result[0].message.chat.id;
        console.log("Your Chat ID is:", chatId);
        alert(
          `Your Chat ID is: ${chatId}\nCopy this and replace TELEGRAM_CHAT_ID in the code.`
        );
      } else {
        console.log("No messages found. Send a message to your bot first.");
        alert(
          "No messages found. Please send a message to your bot (@lokesh_portfolio_bot) first, then try again."
        );
      }
    } catch (error) {
      console.error("Error fetching chat ID:", error);
    }
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
              <Button className="mb-4 gap-2 border-primary/30 text-white hover:text-white">
                <MessageSquare className="h-4 w-4 text-white hover:text-white" />
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

            {/* Telegram Chat ID Helper (Remove in production) */}
            {TELEGRAM_CHAT_ID === "YOUR_CHAT_ID" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 inline-block"
              >
                <Button
                  onClick={getChatId}
                  variant="outline"
                  size="sm"
                  className="border-amber-500/30 text-amber-600 hover:bg-amber-500/10"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Click here to get your Telegram Chat ID
                </Button>
                <p className="mt-2 text-sm text-amber-600/80">
                  Required for Telegram notifications
                </p>
              </motion.div>
            )}
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
                {/* Location Permission Note */}
                {/* <div className="mb-6 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <div>
                      <h4 className="font-semibold text-blue-500">
                        Location Permission
                      </h4>
                      <p className="text-sm text-blue-500/80">
                        When you click "Send Message", we'll ask for your
                        location permission to include it in the message. This
                        helps us provide better solutions.
                      </p>
                    </div>
                  </div>
                </div> */}

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
                          {telegramError && (
                            <span className="block mt-1 text-amber-600">
                              {telegramError}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Location Error Message */}
                {locationError && !isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <div>
                        <h4 className="font-semibold text-amber-500">
                          Location Error
                        </h4>
                        <p className="text-sm text-amber-500/80">
                          {locationError}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Telegram Error Message */}
                {telegramError && !isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <div>
                        <h4 className="font-semibold text-amber-500">
                          Notification Error
                        </h4>
                        <p className="text-sm text-amber-500/80">
                          {telegramError}
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
                          : "mt-2 h-30"
                      }
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg"
                    disabled={isSubmitting || isGettingLocation}
                  >
                    {isSubmitting || isGettingLocation ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        {isGettingLocation
                          ? "Uploading to database..."
                          : "Sending..."}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We'll ask for your location permission when submitting. Your
                    location is only used to provide better service and is
                    included in the notification. Your information is secure and
                    will never be shared.
                    {TELEGRAM_CHAT_ID === "YOUR_CHAT_ID" && (
                      <span className="block mt-1 text-amber-600">
                        ⚠️ Telegram notifications not configured. Click the
                        button above to get your Chat ID.
                      </span>
                    )}
                  </p>
                </form>
              </Card>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 grid gap-2 sm:grid-cols-1 lg:grid-cols-5"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={fadeInUp}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <Card
                      onClick={() => {
                        window.open(info.link, "_blank");
                      }}
                      className="group relative h-full cursor-pointer overflow-hidden border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50"
                    >
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
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-1 text-sm font-medium text-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {info.value}
                          <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                        </a>
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
