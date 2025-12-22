import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight, Sun, Moon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceItems = [
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Global SEO", href: "/services/global-seo" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Meta Ads", href: "/services/meta-ads" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "E Commerce Marketing", href: "/services/ecommerce-marketing" },
  { name: "Web Design", href: "/services/web-design" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/df-logo.png"
              alt="Digital Flavour logo"
              className="w-18 h-16 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </a>
                  
                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="w-64 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          >
                            {service.name}
                          </a>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
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
              className="w-10 h-10"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+919111268785"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 9111268785</span>
              </a>
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
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
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="bg-accent/50">
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 border-t border-border mt-2">
                <Button variant="hero" className="flex-1" asChild>
                  <a href="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
