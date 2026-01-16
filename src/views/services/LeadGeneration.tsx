import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  Phone,
  ArrowRight,
  Users,
  Mail,
  BarChart3,
  Zap,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const benefits = [
  {
    icon: Users,
    title: "Quality Leads",
    description: "Generate high quality, sales ready leads that are genuinely interested in your products or services.",
  },
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Reach your ideal customers with precision targeting and personalized messaging.",
  },
  {
    icon: Zap,
    title: "Faster Conversions",
    description: "Convert leads into customers faster with optimized funnels and automated follow ups.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description: "Track every lead from source to conversion with detailed analytics and reporting.",
  },
];

const services = [
  "Landing Page Design & Optimization",
  "Lead Magnet Creation",
  "Email Marketing Campaigns",
  "Facebook & Instagram Lead Ads",
  "Google Lead Form Extensions",
  "Marketing Automation Setup",
  "CRM Integration",
  "Lead Nurturing Sequences",
  "A/B Testing & Optimization",
  "Performance Analytics & Reporting",
];

const stats = [
  { value: "3x", label: "More Qualified Leads" },
  { value: "45%", label: "Lower Cost Per Lead" },
  { value: "450+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
];

const LeadGeneration = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <ServiceHeroBanner
        backgroundImage="/images/banners/lead-generation-banner.png"
        badge={{ icon: LineChart, text: "Lead Generation Services" }}
        title={
          <>
            Best Lead Generation <span className="text-gradient">Agency</span>
          </>
        }
        description="Fill your sales pipeline with high quality leads. Our lead generation services help businesses attract, capture, and convert more prospects into paying customers."
        primaryCTA={{ text: "Get More Leads Now", href: "/contact" }}
        secondaryCTA={{ text: "Call Now", href: "tel:+919111268785", icon: Phone }}
      />

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
                Why Choose Our Lead Generation Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Grow Your Customer <span className="text-gradient">Base</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We help businesses generate more qualified leads and convert them into loyal customers.
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
                  src="/images/lead-gen-concept.png"
                  alt="Lead Generation Visualization"
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
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Monthly Leads</p>
                    <p className="text-lg font-bold text-foreground">500+ Generated</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Our Lead Generation Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete Lead Gen Solutions for <span className="text-gradient">Your Business</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From landing pages to automated nurturing, we provide end to end lead
                generation services for businesses.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 card-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Start Generating More Leads
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us create a custom lead generation strategy for your business.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free lead generation audit",
                  "Custom funnel strategy",
                  "Landing page recommendations",
                  "ROI projection report",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="/contact">
                  Get Your Free Strategy
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
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
              Ready to Fill Your Pipeline with Quality Leads?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with the best lead generation agency. Let us help you grow your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="/contact">
                  Hire Us Today
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
                  <Phone className="w-5 h-5" />
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

export default LeadGeneration;

