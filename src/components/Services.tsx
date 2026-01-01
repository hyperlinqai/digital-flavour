import { motion } from "framer-motion";
import {
  Search,
  LineChart,
  Megaphone,
  ShoppingCart,
  Globe,
  Share2,
  ArrowRight,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Local SEO Optimization",
    description: "Dominate local search rankings in your area with data driven SEO strategies.",
    features: ["Google Business Profile", "Local Citations", "Review Management"],
    href: "/services/local-seo",
  },
  {
    icon: Globe,
    title: "Global SEO",
    description: "Expand globally with international SEO strategies for multiple countries.",
    features: ["Multi Language SEO", "Hreflang Setup", "International Links"],
    href: "/services/global-seo",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Maximize ROI with targeted PPC campaigns that convert clicks into customers.",
    features: ["Search Ads", "Display Ads", "YouTube Ads"],
    href: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    description: "Reach billions on Facebook, Instagram, and WhatsApp with targeted ads.",
    features: ["Facebook Ads", "Instagram Ads", "WhatsApp Ads"],
    href: "/services/meta-ads",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Attract and convert high quality leads with targeted campaigns.",
    features: ["Landing Pages", "Lead Magnets", "Email Campaigns"],
    href: "/services/lead-generation",
  },
  {
    icon: ShoppingCart,
    title: "E Commerce Marketing",
    description: "Drive sales and grow your online store with ecommerce marketing.",
    features: ["Product Listings", "Shopping Ads", "Sales Funnels"],
    href: "/services/ecommerce-marketing",
  },
  {
    icon: Target,
    title: "Web Design",
    description: "Create stunning, responsive websites that captivate and convert.",
    features: ["UI/UX Design", "Responsive Dev", "Performance"],
    href: "/services/web-design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across platforms.",
    features: ["Content Strategy", "Community Management", "Influencer Marketing"],
    href: "/services/social-media-marketing",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Comprehensive Digital{" "}
            <span className="text-gradient">Marketing Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From SEO to paid advertising, we offer end to end digital marketing
            services to help your business thrive online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm sm:text-base hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10 sm:mt-16"
        >
          <Button variant="hero" size="lg" className="text-sm sm:text-base" asChild>
            <a href="/services">
              Explore All Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
