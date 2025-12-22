import { motion } from "framer-motion";
import { 
  Search, 
  LineChart, 
  Megaphone, 
  ShoppingCart, 
  Globe, 
  Share2,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Local SEO Optimization",
    description: "Dominate search rankings with data driven SEO strategies that drive organic traffic and visibility.",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
    href: "/services/local-seo",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Maximize ROI with targeted PPC campaigns that convert clicks into customers.",
    features: ["Search Ads", "Display Ads", "Remarketing"],
    href: "/services/google-ads",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Attract and convert high quality leads with targeted campaigns that grow your pipeline.",
    features: ["Landing Pages", "Lead Magnets", "Email Campaigns"],
    href: "/services/lead-generation",
  },
  {
    icon: ShoppingCart,
    title: "E Commerce Marketing",
    description: "Drive sales and grow your online store with targeted ecommerce marketing strategies.",
    features: ["Product Listings", "Shopping Ads", "Sales Funnels"],
    href: "/services/ecommerce-marketing",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Create stunning, responsive websites that captivate and convert visitors.",
    features: ["UI/UX Design", "Responsive Dev", "Performance"],
    href: "/services/web-design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across all social platforms.",
    features: ["Content Strategy", "Community Management", "Paid Social"],
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Digital{" "}
            <span className="text-gradient">Marketing Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From SEO to paid advertising, we offer end to end digital marketing 
            services to help your business thrive online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 md:p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
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
          className="text-center mt-16"
        >
          <Button variant="hero" size="xl">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
