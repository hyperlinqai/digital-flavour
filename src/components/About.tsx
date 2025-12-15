import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Target, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead with cutting-edge digital marketing techniques.",
  },
  {
    icon: Rocket,
    title: "Rapid Growth",
    description: "Accelerate your business with proven growth frameworks.",
  },
];

const counters = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 11, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Client Retention" },
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
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto container-padding">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Partner in{" "}
              <span className="text-gradient">Digital Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2015, DigiMark has been at the forefront of digital marketing 
              innovation. We combine creativity with data-driven strategies to 
              deliver exceptional results for businesses across industries.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of experts is passionate about helping brands navigate 
              the digital landscape. We believe in transparent communication, 
              measurable outcomes, and building lasting partnerships with our clients.
            </p>

            {/* Checkmarks */}
            <ul className="space-y-4">
              {[
                "Data-driven strategies tailored to your goals",
                "Transparent reporting and communication",
                "Dedicated team of certified experts",
                "Proven track record of success",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 card-shadow"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {counters.map((counter) => (
              <div key={counter.label} className="text-center">
                <AnimatedCounter 
                  value={counter.value} 
                  suffix={counter.suffix} 
                  inView={isInView} 
                />
                <p className="text-muted-foreground mt-2">{counter.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
