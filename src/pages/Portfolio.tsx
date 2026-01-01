import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const portfolioItems = [
  {
    logo: "/images/9.jpeg",
    name: "Perfect Jeevansathi",
    category: "Matrimony Services",
    description: "Helped increase lead generation by 200% through targeted Google Ads and Local SEO optimization.",
    services: ["Google Ads", "Local SEO", "Lead Generation"],
    results: { leads: "+200%", traffic: "+150%", conversions: "3x" },
  },
  {
    logo: "/images/11.png",
    name: "LULE + CO.",
    category: "Fashion & Lifestyle",
    description: "Built a strong social media presence and drove ecommerce sales through strategic digital marketing.",
    services: ["Social Media", "E Commerce", "Content Marketing"],
    results: { leads: "+180%", traffic: "+220%", conversions: "2.5x" },
  },
  {
    logo: "/images/10.png",
    name: "Maple Village Lane",
    category: "Home Decor",
    description: "Developed comprehensive digital strategy to establish brand presence and drive online sales.",
    services: ["Web Design", "SEO", "Social Media"],
    results: { leads: "+250%", traffic: "+300%", conversions: "4x" },
  },
  {
    logo: "/images/6-removebg-preview.png",
    name: "ImproWise",
    category: "Education & Consulting",
    description: "Generated quality leads for educational programs through targeted PPC and content marketing.",
    services: ["Google Ads", "Lead Generation", "Content Marketing"],
    results: { leads: "+175%", traffic: "+140%", conversions: "2x" },
  },
  {
    logo: "/images/7-300x143.png",
    name: "Wheel to Heal",
    category: "Healthcare & Wellness",
    description: "Increased patient inquiries and brand awareness through local SEO and social media marketing.",
    services: ["Local SEO", "Social Media", "Google Ads"],
    results: { leads: "+220%", traffic: "+180%", conversions: "3.5x" },
  },
  {
    logo: "/images/5.png",
    name: "NDPS",
    category: "Education",
    description: "Boosted student admissions through comprehensive digital marketing and lead nurturing campaigns.",
    services: ["Lead Generation", "Social Media", "Google Ads"],
    results: { leads: "+160%", traffic: "+200%", conversions: "2.8x" },
  },
  {
    logo: "/images/4-removebg-preview.png",
    name: "Pusha's",
    category: "Food & Restaurant",
    description: "Drove footfall and online orders through local SEO optimization and social media engagement.",
    services: ["Local SEO", "Social Media", "Google Ads"],
    results: { leads: "+190%", traffic: "+250%", conversions: "3x" },
  },
  {
    logo: "/images/3.png",
    name: "Maiva's Food",
    category: "Food & Catering",
    description: "Established strong online presence and increased catering inquiries through digital marketing.",
    services: ["Social Media", "Local SEO", "Lead Generation"],
    results: { leads: "+210%", traffic: "+180%", conversions: "2.5x" },
  },
  {
    logo: "/images/2.png",
    name: "Organic Vio",
    category: "Organic Products",
    description: "Built brand awareness and drove online sales through comprehensive digital marketing strategy.",
    services: ["Social Media", "E Commerce", "SEO"],
    results: { leads: "+230%", traffic: "+280%", conversions: "3.2x" },
  },
];

const stats = [
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: TrendingUp, value: "280%", label: "Avg Traffic Growth" },
  { icon: Target, value: "3x", label: "Avg Lead Increase" },
  { icon: Award, value: "95%", label: "Client Satisfaction" },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground text-sm font-medium">
                  Our Work
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Our <span className="text-gradient">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Discover how we have helped businesses globally
              achieve remarkable growth through our digital marketing strategies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Brands We Have Helped <span className="text-gradient">Grow</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From local businesses to brands globally, we have delivered
              measurable results that drive real business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
              >
                {/* Logo Section */}
                <div className="p-8 bg-secondary/30 flex items-center justify-center min-h-[160px]">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="max-h-24 max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{item.results.leads}</p>
                      <p className="text-xs text-muted-foreground">Leads</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-secondary">{item.results.traffic}</p>
                      <p className="text-xs text-muted-foreground">Traffic</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary">{item.results.conversions}</p>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Trusted by Growing Brands
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 100+ businesses that have achieved remarkable growth with Digital Flavour.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+919111268785">
                  +91 9111268785
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

export default Portfolio;

