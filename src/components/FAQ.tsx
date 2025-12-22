import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services including Local SEO Optimization, Google Ads management, Lead Generation, E-Commerce Marketing, Web Design, and Social Media Marketing. Each service is tailored to meet your specific business goals.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long term strategy. Typically, you can expect to see initial improvements within 3 to 4 months, with more significant results appearing after 6 to 12 months. The timeline depends on factors like your industry competition, website condition, and the keywords you are targeting.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is customized based on your business needs, goals, and the scope of services required. We offer flexible packages ranging from project based pricing to monthly retainers. Contact us for a free consultation and personalized quote.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We work with businesses of all sizes, from startups to established enterprises. We believe every business deserves access to quality digital marketing, and we tailor our strategies to fit your budget and objectives.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We use a data driven approach with comprehensive analytics and reporting. Key metrics include website traffic, conversion rates, ROI, lead generation, and ranking improvements. You will receive regular reports with clear insights into your campaign performance.",
  },
  {
    question: "Can I cancel my contract at any time?",
    answer:
      "We offer flexible terms with no long term lock in contracts. We believe in earning your business through results, not binding agreements. Standard notice periods apply, and we will ensure a smooth transition if you decide to move on.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
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
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know 
            about our services and how we can help grow your business.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Get in touch with us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;


