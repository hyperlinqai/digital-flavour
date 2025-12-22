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

const benefits = [
  {
    icon: Target,
    title: "Targeted Advertising",
    description: "Reach the right audience in Indore with precise targeting based on keywords, location, and demographics.",
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
  { value: "200+", label: "Campaigns Managed" },
  { value: "₹2Cr+", label: "Ad Spend Managed" },
];

const GoogleAds = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6">
                <Megaphone className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground text-sm font-medium">
                  Google Ads Agency in Indore
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Expert Google Ads Management in{" "}
              <span className="text-gradient">Indore</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Drive instant traffic and qualified leads with our expert Google Ads 
              management services. We help Indore businesses maximize ROI with 
              data driven PPC campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="/contact">
                  Get Free PPC Audit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+919111268785">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
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
              Why Choose Our Google Ads Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Grow Your Business with <span className="text-gradient">Google Ads</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We create and manage high performing Google Ads campaigns that deliver 
              real results for businesses in Indore and across Madhya Pradesh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
                Our Google Ads Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Complete PPC Solutions for <span className="text-gradient">Indore Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From search ads to display campaigns, we offer comprehensive Google Ads 
                management services to help your business grow in Indore.
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
              Partner with the best Google Ads agency in Indore. Let us help you achieve your growth goals.
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

