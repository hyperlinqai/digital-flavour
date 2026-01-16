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
  MessageCircle,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
  { value: "200%", label: "Avg ROI Increase" },
  { value: "40%", label: "Lower CPA" },
  { value: "450+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
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
      <ServiceHeroBanner
        backgroundImage="/images/banners/meta-ads-banner.png"
        badge={{ icon: Share2, text: "Meta Ads Services" }}
        title={
          <>
            Meta Ads <span className="text-gradient">Management Agency</span>
          </>
        }
        description="Reach billions of users on Facebook, Instagram, and WhatsApp with targeted Meta advertising campaigns that drive real business results."
        primaryCTA={{ text: "Get Free Consultation", href: "/contact" }}
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
                Why Meta Ads?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Benefits of <span className="text-gradient">Meta Advertising</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Leverage the power of the world's largest social media platforms
                to grow your business.
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
                  src="/images/meta-ads-concept.png"
                  alt="Meta Ads Visualization"
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
                    <p className="text-sm font-medium text-muted-foreground">Daily Users</p>
                    <p className="text-lg font-bold text-foreground">3B+ Active</p>
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
              Get a free Meta Ads audit and discover opportunities to grow your business.
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

