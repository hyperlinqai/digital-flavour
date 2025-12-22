import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9111268785",
    href: "tel:+919111268785",
  },
  {
    icon: Mail,
    title: "Email",
    value: "marketing@digitalflavour.co",
    href: "mailto:marketing@digitalflavour.co",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Indore, Madhya Pradesh",
    href: "https://maps.google.com/?q=16, Juna Pitha Main Rd, G - 2, Keshavkunj, Ahilya Pura, Indore, Madhya Pradesh 452007",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient">Grow Your Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can help you achieve your digital marketing goals. 
            Get your free growth strategy today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Additional CTA */}
            <div className="bg-primary rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                Book a Free Consultation
              </h3>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Let's discuss your project and create a custom strategy.
              </p>
              <Button 
                variant="secondary" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-card rounded-2xl p-6 md:p-8 card-shadow"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project and goals..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
