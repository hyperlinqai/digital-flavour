import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Megaphone,
  LineChart,
  ShoppingCart,
  Globe,
  Share2,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Search,
    title: "Local SEO Optimization",
    description: "Dominate local search results in your area. Get found by customers searching for your services nearby.",
    features: ["Google Business Profile", "Local Citations", "Review Management", "Local Keywords"],
    href: "/services/local-seo",
    color: "bg-orange-500/10",
  },
  {
    icon: Globe,
    title: "Global SEO Services",
    description: "Expand your reach globally with international SEO strategies that help you rank in multiple countries worldwide.",
    features: ["Multi Language SEO", "International Link Building", "Hreflang Setup", "Global Analytics"],
    href: "/services/global-seo",
    color: "bg-blue-500/10",
  },
  {
    icon: Megaphone,
    title: "Google Ads Management",
    description: "Maximize ROI with targeted PPC campaigns on Google Search, Display, and YouTube that convert clicks into customers.",
    features: ["Search Ads", "Display Ads", "YouTube Ads", "Remarketing"],
    href: "/services/google-ads",
    color: "bg-green-500/10",
  },
  {
    icon: Share2,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Reach billions of users on Facebook, Instagram, and WhatsApp with highly targeted social media advertising.",
    features: ["Facebook Ads", "Instagram Ads", "WhatsApp Ads", "Retargeting"],
    href: "/services/meta-ads",
    color: "bg-indigo-500/10",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Attract and convert high quality leads with targeted campaigns that grow your sales pipeline consistently.",
    features: ["Landing Pages", "Lead Magnets", "Email Campaigns", "CRM Integration"],
    href: "/services/lead-generation",
    color: "bg-purple-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E Commerce Marketing",
    description: "Drive sales and grow your online store with comprehensive ecommerce marketing strategies and shopping ads.",
    features: ["Product Listings", "Shopping Ads", "Conversion Optimization", "Cart Recovery"],
    href: "/services/ecommerce-marketing",
    color: "bg-pink-500/10",
  },
  {
    icon: Target,
    title: "Web Design & Development",
    description: "Create stunning, high converting websites that captivate visitors and turn them into loyal customers.",
    features: ["Responsive Design", "UI/UX Optimization", "Speed Optimization", "SEO Friendly"],
    href: "/services/web-design",
    color: "bg-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage audiences across all major social platforms with strategic content.",
    features: ["Content Strategy", "Community Management", "Influencer Marketing", "Analytics"],
    href: "/services/social-media-marketing",
    color: "bg-amber-500/10",
  },
];

const whyChooseUs = [
  "Data driven strategies tailored to your business goals",
  "Transparent reporting with real time dashboards",
  "Dedicated account manager for personalized support",
  "Proven track record with 100+ successful clients",
  "No long term contracts, results speak for themselves",
  "Local expertise with global capabilities",
];

const Services = () => {
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
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground text-sm font-medium">
                  Digital Marketing Services
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Comprehensive digital marketing solutions to help your business grow online.
              From SEO to paid advertising, we have got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Why Digital Flavour?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Us for Your{" "}
                <span className="text-gradient">Digital Marketing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are not just another agency. We are your growth partners committed
                to delivering measurable results that impact your bottom line.
              </p>

              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Ready to Grow Your Business?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Get a free digital marketing audit and discover opportunities
                to increase your online visibility and generate more leads.
              </p>
              <div className="space-y-4">
                <Button
                  variant="secondary"
                  size="xl"
                  className="w-full bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <a href="/contact">
                    Get Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="tel:+919111268785">
                    Call: +91 9111268785
                  </a>
                </Button>
              </div>
            </motion.div>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let our experts analyze your business and recommend the best digital marketing strategy for you.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="https://calendly.com/digiflavour243/30min" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;

