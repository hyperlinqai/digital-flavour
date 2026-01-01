import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Target, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead with the latest digital marketing techniques.",
  },
  {
    icon: Rocket,
    title: "Rapid Growth",
    description: "Accelerate your business with proven growth frameworks.",
  },
];

const counters = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 70, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 93, suffix: "%", label: "Client Retention" },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/10">
      <div className="container mx-auto container-padding">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-20">
          {/* Left - Founder Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src="/images/WhatsApp-Image-2025-02-11-at-12.31.09-PM-e1756475578188.jpeg"
                alt="Ragini Neema - Founder of Digital Flavour"
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover"
              />
            </div>
            {/* Founder Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-4 bg-card p-4 rounded-xl card-shadow"
            >
              <p className="font-bold text-foreground">Ragini Neema</p>
              <p className="text-sm text-primary">Founder & CEO</p>
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Your Partner in{" "}
              <span className="text-gradient">Digital Success</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Digital Flavour has been at the forefront of digital marketing
              innovation. We blend performance driven marketing with conversion optimized
              tech to deliver scalable ROI for businesses globally.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Under the leadership of Ragini Neema, our team is passionate about helping
              brands navigate the digital landscape. We believe in transparent communication,
              measurable outcomes, and building lasting partnerships with our clients.
            </p>

            {/* Checkmarks */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Data driven strategies tailored to your goals",
                "Transparent reporting and communication",
                "Dedicated team of certified experts",
                "Proven track record of success",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="text-sm sm:text-base" asChild>
              <a href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counters */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 card-shadow"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-4">
            {counters.map((counter) => (
              <div key={counter.label} className="text-center">
                <AnimatedCounter
                  value={counter.value}
                  suffix={counter.suffix}
                  inView={isInView}
                />
                <p className="text-muted-foreground mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{counter.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
