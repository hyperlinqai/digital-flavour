import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: Users,
        value: "124",
        label: "Quality Leads Generated",
        sub: "In Just 1 Month"
    },
    {
        icon: MessageSquare,
        value: "High",
        label: "Engagement",
        sub: "Direct Inquiries"
    },
    {
        icon: BarChart3,
        value: "ROI",
        label: "Cost-Effective",
        sub: "Strong Return on Investment"
    },
];

const CaseStudyDetail = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/real_estate_hero_v2.png" // Using the generated image or placeholder
                badge={{ icon: Target, text: "Case Study: Real Estate" }}
                title={
                    <>
                        Generating <span className="text-gradient">124 Quality Leads</span> for a Real Estate Client
                    </>
                }
                description="How Digital Flavour successfully helped a leading real estate developer increase inquiries for premium property listings."
                primaryCTA={{ text: "Get Similar Results", href: "/contact" }}
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
                                Our client, a leading real estate developer, wanted to increase inquiries for their premium property listings. They needed a digital marketing strategy that would drive high-intent leads from potential homebuyers and investors.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The real estate industry is highly competitive, and our client faced several challenges:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Attracting serious buyers rather than casual browsers.",
                                    "Optimizing ad spend to generate high-quality leads.",
                                    "Increasing engagement through direct inquiries."
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
                            At Digital Flavour, we designed a highly targeted ad strategy to ensure maximum relevance and conversion.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Lead Generation Campaigns",
                                desc: "Using compelling visuals and persuasive ad copy to attract homebuyers."
                            },
                            {
                                title: "Precise Audience Targeting",
                                desc: "Focusing on individuals searching for properties in the client's target locations."
                            },
                            {
                                title: "Optimized Budget Strategy",
                                desc: "Ensuring cost efficiency while maintaining a high conversion rate."
                            },
                            {
                                title: "Messenger & WhatsApp Ads",
                                desc: "Encouraging direct conversations with potential buyers."
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
                            Through a data-driven approach and strategic ad placements, Digital Flavour successfully helped the real estate client generate 124 high-quality leads in a single month. This campaign not only boosted inquiries but also set a foundation for future digital marketing success.
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking to scale your real estate business?</h3>
                            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Contact Digital Flavour today and let’s drive results together!
                            </p>
                            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-white/90">
                                <a href="/contact">
                                    Start Your Campaign
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

export default CaseStudyDetail;
