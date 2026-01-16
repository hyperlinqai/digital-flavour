"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "Global SEO", href: "/services/global-seo" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Meta Ads", href: "/services/meta-ads" },
    { name: "Lead Generation", href: "/services/lead-generation" },
    { name: "E Commerce Marketing", href: "/services/ecommerce-marketing" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ],
};
// ... socialLinks ...

// ... Footer component ...
// Replace footerLinks mapping:
{/* Services */ }
<div>
  <h3 className="font-semibold mb-6">Services</h3>
  <ul className="space-y-3">
    {footerLinks.services.map((link) => (
      <li key={link.name}>
        <Link
          href={link.href}
          className="text-background/70 hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Company */ }
<div>
  <h3 className="font-semibold mb-6">Company</h3>
  <ul className="space-y-3">
    {footerLinks.company.map((link) => (
      <li key={link.name}>
        <Link
          href={link.href}
          className="text-background/70 hover:text-primary transition-colors"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/Digi-Flavour/pfbid0G3mH8fYUft91x1ATGfWEqZNpWruvVoqsXd1eNMU37qc87DdPuYKwyVjG1iScEuFHl/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/digital_flavour_indore", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/digital-flavour/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@DigitalFlavour", label: "YouTube" },
];

const contactInfo = {
  email: "digiflavour243@gmail.com",
  phone: "9111268785",
  locations: [
    {
      label: "Indore, Madhya Pradesh",
      href: "https://maps.google.com/?q=16, Juna Pitha Main Rd, G - 2, Keshavkunj, Ahilya Pura, Indore, Madhya Pradesh 452007"
    },
    {
      label: "Dubai, UAE",
      href: "https://share.google/uI9b9GlQa4InVzWP1"
    }
  ]
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto container-padding">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/df-logo.png"
                alt="Digital Flavour logo"
                className="w-18 h-16 object-contain"
              />
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Transforming businesses through innovative digital marketing
              strategies. Your success is our mission.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${contactInfo.phone}`}
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>+91 {contactInfo.phone}</span>
                </a>
              </li>
              {contactInfo.locations.map((loc) => (
                <li key={loc.label}>
                  <a
                    href={loc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm">{loc.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://calendly.com/digiflavour243/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Calendar className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm">Book a Meeting</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Digital Flavour. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
