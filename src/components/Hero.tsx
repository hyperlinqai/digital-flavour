import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "11+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: TrendingUp, value: "3x", label: "Average Lead Growth" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-accent-foreground text-sm font-medium">
                Rated 4.7/5 by 100+ Clients
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Marketing That{" "}
              <span className="text-gradient">Delivers Results</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your online presence with data-driven strategies. 
              We help businesses in Bangalore grow their digital footprint 
              and convert visitors into loyal customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl">
                Get Your Free Growth Strategy
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-accent rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Organic Traffic</div>
                    <div className="text-2xl font-bold text-foreground">+280%</div>
                    <div className="h-2 bg-primary/20 rounded-full mt-2">
                      <div className="h-full w-4/5 bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="bg-accent rounded-xl p-4">
                    <div className="text-sm text-muted-foreground mb-1">Lead Conversion</div>
                    <div className="text-2xl font-bold text-foreground">+150%</div>
                    <div className="h-2 bg-primary/20 rounded-full mt-2">
                      <div className="h-full w-3/5 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Graph Visualization */}
                <div className="h-48 flex items-end justify-between gap-2 bg-accent rounded-xl p-4">
                  {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100, 92, 110].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                      className="flex-1 bg-primary/80 rounded-t-md hover:bg-primary transition-colors"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-card rounded-xl p-4 card-shadow"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="font-bold text-foreground">↑ 42%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-8">Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["TechCorp", "Innovate", "GrowthLab", "NextGen", "Startup+"].map((brand) => (
              <div
                key={brand}
                className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
