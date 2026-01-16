import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Users,
  TrendingUp,
  Heart,
  Linkedin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const values = [
  {
    icon: Target,
    title: "Results Driven",
    description: "Every strategy is designed with measurable outcomes in mind. We focus on metrics that matter.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead with the latest digital marketing techniques and emerging trends.",
  },
  {
    icon: Rocket,
    title: "Rapid Growth",
    description: "Accelerate your business with proven growth frameworks and scalable solutions.",
  },
  {
    icon: Heart,
    title: "Client Centric",
    description: "Your success is our success. We build lasting partnerships, not just campaigns.",
  },
];

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "6+", label: "Years of Excellence" },
  { number: "95%", label: "Client Retention" },
];

const services = [
  "Search Engine Optimization (SEO)",
  "Performance Marketing & Google Ads",
  "Social Media Marketing",
  "E Commerce Marketing",
  "Website Development",
  "Lead Generation",
  "Local SEO & GMB Optimization",
  "Conversion Rate Optimization",
];

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <ServiceHeroBanner
        backgroundImage="/images/main-hero/about-us.png"
        badge={{ icon: Award, text: "About Digital Flavour" }}
        title={
          <>
            Your Trusted <span className="text-gradient">Digital Growth</span> Partner
          </>
        }
        description="Digital Flavour has been transforming businesses through innovative digital marketing strategies. We blend performance-driven marketing with conversion-optimized tech to deliver scalable ROI."
        primaryCTA={{ text: "Work With Us", href: "/contact" }}
        secondaryCTA={{ text: "Our Services", href: "/#services" }}
      />

      {/* Founder Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="/images/WhatsApp-Image-2023-12-20-at-3.05.40-PM-e1722093740566-qrqe1ndog3xtnhgmrr7xrhh8y1po0qam6r55k0qv6g.jpeg"
                  alt="Ragini Neema with awards"
                  className="rounded-2xl shadow-xl w-full max-w-lg mx-auto"
                />
                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl"
                >
                  <p className="text-3xl font-bold">6+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-primary font-semibold mb-4">
                Meet Our Founder
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ragini Neema
              </h2>
              <p className="text-xl text-primary font-medium mb-4">
                Founder & CEO, Digital Flavour
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ragini Neema is a visionary digital marketing expert with a passion for
                helping businesses achieve exponential growth. With years of experience
                in performance marketing, SEO, and brand strategy, she founded Digital
                Flavour to bridge the gap between businesses and their digital potential.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Under her leadership, Digital Flavour has helped over 100+ businesses
                scale their online presence, generate qualified leads, and achieve
                measurable ROI. Her data driven approach and commitment to client success
                have made Digital Flavour a trusted name in the industry.
              </p>
              <a
                href="https://www.linkedin.com/in/ragini-neema-b0194714a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Mission & <span className="text-gradient">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with innovative digital marketing
                solutions that drive measurable growth. We're committed to turning
                clicks into customers and campaigns into sustainable revenue streams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted digital growth partner for businesses globally,
                known for delivering exceptional results, fostering long term relationships,
                and setting new standards in digital marketing excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Drives <span className="text-gradient">Us Forward</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide every decision we make and every strategy we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-card">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-primary font-semibold mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive <span className="text-gradient">Digital Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a local brand hungry for leads or an online business seeking
                predictable growth, we design strategies that make strangers want to buy
                from you and keep coming back.
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
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
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
              className="bg-primary rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold text-primary-foreground mb-8">
                Why Clients Choose Us
              </h3>
              <ul className="space-y-6">
                {[
                  "We track what matters: leads, sales, ROAS, and conversions",
                  "Every campaign is built around your audience and goals",
                  "Real data. Real results. Weekly reports and live dashboards",
                  "No fluff, just strategies that deliver measurable ROI",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 card-shadow"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {achievements.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Add Rocket Fuel to Your Growth?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Your customers are searching. Let's make sure they find you.
            </p>
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="https://calendly.com/digiflavour243/30min" target="_blank" rel="noopener noreferrer">
                Book Your Free Audit
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

export default AboutUs;

