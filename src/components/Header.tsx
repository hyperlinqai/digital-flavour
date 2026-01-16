"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight, Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/#services",
    dropdownItems: [
      { name: "Local SEO", href: "/services/local-seo" },
      { name: "Global SEO", href: "/services/global-seo" },
      { name: "Google Ads", href: "/services/google-ads" },
      { name: "Meta Ads", href: "/services/meta-ads" },
      { name: "Lead Generation", href: "/services/lead-generation" },
      { name: "E Commerce Marketing", href: "/services/ecommerce-marketing" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    ]
  },
  {
    name: "Resources",
    href: "#",
    dropdownItems: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const Header = ({ variant = "transparent" }: { variant?: "transparent" | "opaque" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const isOpaque = isScrolled || variant === "opaque";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpaque
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/df-logo.png"
              alt="Digital Flavour logo"
              className="w-18 h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.dropdownItems ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors duration-200 font-medium py-2 ${isOpaque
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 min-w-[14rem]">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-card rounded-xl shadow-xl border border-border overflow-hidden py-1"
                      >
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium ${isOpaque
                    ? "text-muted-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle - always visible at top */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className={`w-10 h-10 ${!isOpaque ? "border-white/30 text-white hover:bg-white/10" : ""}`}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919111268785"
                className={`flex items-center gap-2 transition-colors ${isOpaque
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/90 hover:text-white"
                  }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9111268785</span>
              </a>
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">
                  Hire Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${isOpaque ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                item.dropdownItems ? (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileActiveDropdown === item.name && (
                      <div className="bg-accent/50">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 border-t border-border mt-2">
                <Button variant="hero" className="flex-1" asChild>
                  <Link href="/contact">
                    Hire Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
