import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  Phone,
  ArrowRight,
  Megaphone,
  BarChart3,
  DollarSign,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const benefits = [
  {
    icon: Target,
    title: "Targeted Advertising",
    description: "Reach the right audience with precise targeting based on keywords, location, and demographics.",
  },
  {
    icon: DollarSign,
    title: "Maximize ROI",
    description: "Get the most out of your ad spend with optimized campaigns that deliver measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Instant Visibility",
    description: "Start appearing at the top of Google search results immediately and drive instant traffic.",
  },
  {
    icon: BarChart3,
    title: "Data Driven Results",
    description: "Make informed decisions with detailed analytics and transparent reporting on campaign performance.",
  },
];

const services = [
  "Google Search Ads Management",
  "Google Display Network Campaigns",
  "YouTube Video Advertising",
  "Google Shopping Ads",
  "Remarketing & Retargeting",
  "Landing Page Optimization",
  "Conversion Tracking Setup",
  "A/B Testing & Optimization",
  "Competitor Analysis",
  "Monthly Performance Reports",
];

const stats = [
  { value: "5x", label: "Average ROAS" },
  { value: "40%", label: "Lower CPC" },
  { value: "450+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
];

const GoogleAds = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <ServiceHeroBanner
        backgroundImage="/images/banners/google-ads-banner.png"
        badge={{
          icon: Megaphone,
          text: "Google Ads Management",
        }}
        title={
          <>
            Dominate Search Results with <span className="text-gradient">Google Ads</span>
          </>
        }
        description="Reach your perfect customer at the perfect moment. We create high-converting Google Ads campaigns that deliver measurable ROI."
        primaryCTA={{
          text: "Get Free Consultation",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "Call Expert",
          href: "tel:+919111268785",
        }}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Key Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Invest in <span className="text-gradient">Google Ads?</span></h2>
            <p className="text-muted-foreground text-lg">
              Drive immediate traffic and sales with data-driven PPC campaigns managed by experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl card-shadow hover:card-shadow-hover transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Our Google Ads Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete PPC Solutions for <span className="text-gradient">Your Business</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From search ads to display campaigns, we offer comprehensive Google Ads
                management services to help your business grow.
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
                Get Your Free PPC Audit
              </h3>
              <p className="text-muted-foreground mb-6">
                Let us analyze your current Google Ads performance and show you
                how to improve your ROI.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Complete account audit",
                  "Wasted spend analysis",
                  "Competitor ad research",
                  "Custom optimization plan",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="/contact">
                  Claim Your Free Audit
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
              Ready to Scale Your Business with Google Ads?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with the best Google Ads agency. Let us help you achieve your growth goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="/contact">
                  Start Your Campaign
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

export default GoogleAds;
