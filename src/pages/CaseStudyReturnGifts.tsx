import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Target, Palette, Sparkles, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: ShoppingBag,
        value: "High",
        label: "Customer Inquiries",
        sub: "Increased Engagement"
    },
    {
        icon: Smartphone,
        value: "Smooth",
        label: "Mobile Experience",
        sub: "Responsive Design"
    },
    {
        icon: Target,
        value: "Strong",
        label: "Brand Credibility",
        sub: "Trust-Building Design"
    },
];

const CaseStudyReturnGifts = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/return_gifts_hero_v1.png"
                badge={{ icon: Sparkles, text: "Case Study: E-Commerce & Retail" }}
                title={
                    <>
                        Creating a <span className="text-gradient">High-Converting Website</span> for a Return Gifts Shop
                    </>
                }
                description="How Digital Flavour designed a modern, attractive, and conversion-focused website to showcase unique gifting solutions."
                primaryCTA={{ text: "Revamp Your Website", href: "/contact" }}
                secondaryCTA={{ text: "View All Case Studies", href: "/case-studies" }}
            />

            {/* Client Overview & Challenge */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Client Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Our client is a return gifts shop specializing in unique and customized gifting solutions for birthdays, weddings, and special occasions. They wanted a modern, attractive, and conversion-focused website to showcase their products and increase online inquiries.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The client faced several challenges with their online presence:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "No professional online presence.",
                                    "Difficulty showcasing products effectively.",
                                    "Low customer trust due to outdated design.",
                                    "No clear call-to-action for inquiries or orders.",
                                    "Poor mobile experience."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6">Key Results</h3>
                            <div className="space-y-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <stat.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                            <p className="font-semibold">{stat.label}</p>
                                            <p className="text-sm text-muted-foreground">{stat.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-secondary/10">
                <div className="container mx-auto container-padding">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
                        <p className="text-lg text-muted-foreground">
                            At Digital Flavour, we focused on creating a visually appealing and user-friendly experience.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                title: "Modern UI/UX Design",
                                desc: "Clean layout with attractive visuals to engage visitors immediately."
                            },
                            {
                                title: "Mobile-Responsive Design",
                                desc: "Ensuring a smooth and consistent experience across all devices."
                            },
                            {
                                title: "Conversion-Focused Structure",
                                desc: "Strategically placed CTAs and easy-to-use inquiry forms."
                            },
                            {
                                title: "Creative Product Display",
                                desc: "Using high-quality images and clear categories to showcase products."
                            },
                            {
                                title: "Fast Loading Speed",
                                desc: "Optimized performance to reduce bounce rates and improve user satisfaction."
                            },
                            {
                                title: "SEO-Friendly Setup",
                                desc: "Built with best practices for better search engine visibility."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-background rounded-xl p-6 shadow-sm border border-border/50"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conclusion & CTA */}
            <section className="py-20">
                <div className="container mx-auto container-padding max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                            With a visually appealing and conversion-driven website, Digital Flavour helped the return gifts shop build a strong digital identity. The new website not only looks modern and creative but also helps convert visitors into real customers.
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a high-converting website?</h3>
                            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Let Digital Flavour bring your digital vision to life.
                            </p>
                            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-white/90">
                                <a href="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 w-4 h-4" />
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

export default CaseStudyReturnGifts;
