"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowRight,
  Clock,
  MessageSquare,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9111268785",
    description: "Mon to Sat, 10 AM to 7 PM",
    href: "tel:+919111268785",
  },
  {
    icon: Mail,
    title: "Email",
    value: "digiflavour243@gmail.com",
    description: "We reply within 24 hours",
    href: "mailto:digiflavour243@gmail.com",
  },
  {
    icon: MapPin,
    title: "Locations",
    details: [
      {
        label: "India",
        value: "Indore, MP",
        href: "https://maps.google.com/?q=16, Juna Pitha Main Rd, G - 2, Keshavkunj, Ahilya Pura, Indore, Madhya Pradesh 452007",
      },
      {
        label: "Dubai",
        value: "Dubai, UAE",
        href: "https://share.google/uI9b9GlQa4InVzWP1",
      },
    ],
    // These are required to satisfy the map function initially but won't be used for the multi-location card
    value: "",
    description: "",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon to Sat: 10 AM to 07 PM",
    description: "Sunday: Closed",
    href: "#",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/Digi-Flavour/pfbid0G3mH8fYUft91x1ATGfWEqZNpWruvVoqsXd1eNMU37qc87DdPuYKwyVjG1iScEuFHl/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/digital_flavour_indore", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/digital-flavour/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@DigitalFlavour", label: "YouTube" },
];

const reasons = [
  "Free consultation and strategy session",
  "Custom solutions tailored to your business",
  "Transparent pricing with no hidden costs",
  "Dedicated account manager for your project",
  "Regular reporting and performance updates",
  "Proven track record with 100+ clients",
  "No long term contracts, results speak for themselves",
];

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Our team will get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <ServiceHeroBanner
        backgroundImage="/images/main-hero/contact-us.png"
        badge={{ icon: MessageSquare, text: "Get In Touch" }}
        title={
          <>
            Let's Start Your <span className="text-gradient">Digital Journey</span>
          </>
        }
        description="Ready to grow your business online? Connect with our digital marketing experts and get a free strategy consultation today."
        primaryCTA={{ text: "Book a Meeting", href: "https://calendly.com/digiflavour243/30min" }}
        secondaryCTA={{ text: "Call Us", href: "tel:+919111268785", icon: PhoneCall }}
      />

      {/* Contact Info Cards */}
      <section className="py-12 bg-background -mt-10 relative z-20">
        <div className="container mx-auto container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const hasDetails = 'details' in info && info.details;

              const CardContent = () => (
                <>
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">{info.title}</h3>

                  {hasDetails ? (
                    <div className="flex flex-col gap-2">
                      {(info as any).details.map((loc: any) => (
                        <a
                          key={loc.label}
                          href={loc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg bg-background/50 hover:bg-muted/80 transition-all border border-transparent hover:border-primary/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p className="text-primary font-bold text-sm">{loc.label}</p>
                          <p className="text-muted-foreground text-xs">{loc.value}</p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-primary font-medium mb-1 whitespace-nowrap">{info.value}</p>
                      <p className="text-muted-foreground text-sm whitespace-nowrap">{info.description}</p>
                    </>
                  )}
                </>
              );

              if (hasDetails) {
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group text-center"
                  >
                    <CardContent />
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group text-center"
                >
                  <CardContent />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Why Contact Us?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Success is Our <span className="text-gradient">Priority</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you are a startup looking to establish your online presence or
                an established business aiming to scale, we have the expertise and
                passion to help you achieve your goals.
              </p>

              {/* Reasons List */}
              <ul className="space-y-4 mb-10">
                {reasons.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-6 md:p-8 card-shadow"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="local-seo">Local SEO Optimization</option>
                    <option value="google-ads">Google Ads Management</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="ecommerce">E Commerce Marketing</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground mt-2">
              Indore, Madhya Pradesh
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden card-shadow"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8!2d75.8516194!3d22.71746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd2bc12c2285%3A0xf916ffd289470421!2sDigital%20Flavour%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Indore!5e0!3m2!1sen!2sin!4v1703251200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Digital Flavour Office Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Prefer to Talk? Call Us Now!
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is ready to discuss your project and provide a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="tel:+919111268785">
                  <Phone className="w-5 h-5" />
                  +91 9111268785
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:digiflavour243@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </Button>
              <Button
                variant="default"
                size="xl"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="https://calendly.com/digiflavour243/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactUs;
