import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Target,
  BarChart3,
  Zap,
  Eye,
  Heart,
  Share2,
  ShoppingCart,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { value: "3B+", label: "Daily Active Users" },
  { value: "200%", label: "Avg ROI Increase" },
  { value: "40%", label: "Lower CPA" },
  { value: "5x", label: "Better Targeting" },
];

const benefits = [
  {
    icon: Users,
    title: "Massive Audience Reach",
    description: "Access over 3 billion users across Facebook, Instagram, WhatsApp, and Messenger platforms.",
  },
  {
    icon: Target,
    title: "Advanced Targeting",
    description: "Target users based on demographics, interests, behaviors, and custom audiences.",
  },
  {
    icon: Eye,
    title: "Visual Storytelling",
    description: "Create engaging visual ads with images, videos, carousels, and stories that capture attention.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track every metric from impressions to conversions with comprehensive reporting.",
  },
  {
    icon: Heart,
    title: "Brand Awareness",
    description: "Build strong brand recognition and loyalty through consistent social presence.",
  },
  {
    icon: ShoppingCart,
    title: "E Commerce Integration",
    description: "Seamlessly connect your product catalog for dynamic shopping ads.",
  },
];

const services = [
  {
    title: "Facebook Ads Management",
    description: "Strategic Facebook advertising campaigns that reach your ideal customers.",
    features: [
      "Campaign strategy and planning",
      "Ad creative development",
      "Audience research and targeting",
      "A/B testing and optimization",
      "Conversion tracking setup",
      "Monthly performance reports",
    ],
  },
  {
    title: "Instagram Advertising",
    description: "Visually stunning Instagram ads that drive engagement and sales.",
    features: [
      "Feed and Stories ads",
      "Reels advertising",
      "Shopping ads integration",
      "Influencer collaboration",
      "Brand awareness campaigns",
      "Lead generation forms",
    ],
  },
  {
    title: "Meta Pixel & Tracking",
    description: "Advanced tracking and retargeting for maximum conversion optimization.",
    features: [
      "Meta Pixel installation",
      "Conversion API setup",
      "Custom event tracking",
      "Retargeting audiences",
      "Lookalike audience creation",
      "Attribution modeling",
    ],
  },
  {
    title: "WhatsApp Business Ads",
    description: "Connect directly with customers through WhatsApp click to chat ads.",
    features: [
      "Click to WhatsApp campaigns",
      "Automated responses setup",
      "Lead qualification",
      "Customer support integration",
      "Broadcast messaging",
      "Catalog integration",
    ],
  },
];

const adFormats = [
  { icon: Eye, name: "Image Ads", desc: "High quality static visuals" },
  { icon: Zap, name: "Video Ads", desc: "Engaging video content" },
  { icon: Share2, name: "Carousel Ads", desc: "Multiple products showcase" },
  { icon: MessageCircle, name: "Stories Ads", desc: "Full screen immersive" },
  { icon: ShoppingCart, name: "Collection Ads", desc: "Instant shopping experience" },
  { icon: Users, name: "Lead Ads", desc: "In app form submissions" },
];

const MetaAds = () => {
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
                <Share2 className="w-4 h-4 text-primary" />
                <span className="text-accent-foreground text-sm font-medium">
                  Meta Ads Services in Indore
                </span>
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meta Ads Management{" "}
                <span className="text-gradient">Agency in Indore</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Reach billions of users on Facebook, Instagram, and WhatsApp with 
                targeted Meta advertising campaigns that drive real business results.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="/contact">
                    Get Free Consultation
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
                <h3 className="text-xl font-bold mb-6 text-foreground">Meta Ad Formats We Master</h3>
                <div className="grid grid-cols-2 gap-4">
                  {adFormats.map((format, index) => (
                    <motion.div
                      key={format.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-accent rounded-lg"
                    >
                      <format.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{format.name}</p>
                        <p className="text-xs text-muted-foreground">{format.desc}</p>
                      </div>
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
              Why Meta Ads?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Benefits of <span className="text-gradient">Meta Advertising</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Leverage the power of the world's largest social media platforms 
              to grow your business in Indore and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
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
              Meta Ads <span className="text-gradient">Solutions</span>
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
              Ready to Advertise on Meta Platforms?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free Meta Ads audit and discover opportunities to grow your business in Indore.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
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

export default MetaAds;

