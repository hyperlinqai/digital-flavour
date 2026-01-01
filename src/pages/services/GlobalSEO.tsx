import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  TrendingUp,
  Target,
  BarChart3,
  Languages,
  Search,
  MapPin,
  Zap,
  Shield,
  Link2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+", label: "Countries Targeted" },
  { value: "300%", label: "Avg Traffic Growth" },
  { value: "15+", label: "Languages Supported" },
  { value: "10x", label: "Global Reach" },
];

const benefits = [
  {
    icon: Globe,
    title: "Worldwide Visibility",
    description: "Expand your reach beyond borders and tap into international markets with strategic global SEO.",
  },
  {
    icon: Languages,
    title: "Multi Language SEO",
    description: "Optimize your content for multiple languages and regions to connect with diverse audiences.",
  },
  {
    icon: MapPin,
    title: "Geo Targeting",
    description: "Target specific countries, regions, and cities with precision location based optimization.",
  },
  {
    icon: Link2,
    title: "International Link Building",
    description: "Build high quality backlinks from authoritative websites across different countries.",
  },
  {
    icon: Shield,
    title: "Hreflang Implementation",
    description: "Proper technical setup to ensure search engines serve the right content to the right audience.",
  },
  {
    icon: BarChart3,
    title: "Global Analytics",
    description: "Track and analyze your international SEO performance with detailed country wise reports.",
  },
];

const services = [
  {
    title: "International Keyword Research",
    description: "Discover high value keywords in your target markets with localized search intent analysis.",
    features: [
      "Market specific keyword analysis",
      "Competitor research by country",
      "Search volume by region",
      "Localized long tail keywords",
      "Seasonal trend analysis",
      "Intent mapping per market",
    ],
  },
  {
    title: "Multi Regional SEO",
    description: "Optimize your website structure for multiple countries and regions effectively.",
    features: [
      "Country specific URL structures",
      "Hreflang tag implementation",
      "Geo targeting in Search Console",
      "Regional content strategy",
      "Local hosting recommendations",
      "CDN optimization",
    ],
  },
  {
    title: "Content Localization",
    description: "Create culturally relevant content that resonates with your international audience.",
    features: [
      "Native language content creation",
      "Cultural adaptation",
      "Local keyword integration",
      "Region specific landing pages",
      "Transcreation services",
      "Local schema markup",
    ],
  },
  {
    title: "International Link Building",
    description: "Build authoritative backlinks from relevant websites in your target markets.",
    features: [
      "Country specific outreach",
      "Local directory submissions",
      "International PR distribution",
      "Guest posting in target markets",
      "Local influencer partnerships",
      "Regional citation building",
    ],
  },
];

const targetMarkets = [
  { name: "North America", countries: "USA, Canada" },
  { name: "Europe", countries: "UK, Germany, France" },
  { name: "Asia Pacific", countries: "Australia, Singapore" },
  { name: "Middle East", countries: "UAE, Saudi Arabia" },
  { name: "South Asia", countries: "India, Bangladesh" },
  { name: "Africa", countries: "South Africa, Nigeria" },
];

const GlobalSEO = () => {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground text-sm font-medium">
                  Global SEO Services
                </span>
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Global SEO Services{" "}
                <span className="text-gradient">Agency</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expand your business globally with international SEO strategies that
                help you rank in multiple countries and reach customers worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="/contact">
                    Get Global SEO Strategy
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="tel:+919111268785">
                    Call: +91 9111268785
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <h3 className="text-xl font-bold mb-6 text-foreground">Target Markets We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {targetMarkets.map((market, index) => (
                    <motion.div
                      key={market.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="p-4 bg-accent rounded-lg"
                    >
                      <p className="font-bold text-foreground">{market.name}</p>
                      <p className="text-sm text-muted-foreground">{market.countries}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Why Global SEO?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Benefits of <span className="text-gradient">International SEO</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take your business to the world stage with comprehensive
                global SEO strategies.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                <img
                  src="/images/global-seo-concept.png"
                  alt="Global SEO Visualization"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl card-shadow z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Global Reach</p>
                    <p className="text-lg font-bold text-foreground">50+ Countries</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto container-padding">
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
              Global SEO <span className="text-gradient">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 card-shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How We Deliver <span className="text-gradient">Global Results</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Market Research", desc: "Analyze target markets and competition" },
              { step: "02", title: "Strategy Development", desc: "Create customized global SEO plan" },
              { step: "03", title: "Implementation", desc: "Execute multi regional optimization" },
              { step: "04", title: "Monitor & Scale", desc: "Track results and expand reach" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              Ready to Go Global?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us help your business reach customers across the world with strategic global SEO.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="/contact">
                  Start Global Expansion
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/services">
                  View All Services
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

export default GlobalSEO;

