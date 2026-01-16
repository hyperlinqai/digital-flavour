import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, Globe, Link, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: Search,
        value: "74%",
        label: "Increase in Keywords",
        sub: "From 378 to 658"
    },
    {
        icon: TrendingUp,
        value: "61%",
        label: "Growth in Organic Traffic",
        sub: "US Market Expansion"
    },
    {
        icon: Link,
        value: "12%",
        label: "Backlink Growth",
        sub: "High-Quality Links"
    },
];

const CaseStudyLuleAndCo = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/ecommerce_packing_real.png"
                badge={{ icon: Sparkles, text: "Case Study: E-Commerce SEO" }}
                title={
                    <>
                        Boosting <span className="text-gradient">Organic Growth</span> for a US E-Commerce Client
                    </>
                }
                description="Digital Flavour's success in driving visibility and qualified traffic for Lule and Co."
                primaryCTA={{ text: "Grow Your Business", href: "/contact" }}
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
                                Our client, Lule and Co., is a premium US-based e-commerce store specializing in home décor and furnishings. They wanted to increase their organic visibility and drive qualified traffic to their product pages to boost online sales.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The home décor e-commerce industry is highly competitive, and our client faced several challenges:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Limited organic search visibility in a crowded marketplace.",
                                    "Technical SEO issues affecting website crawlability and indexation.",
                                    "Weak backlink profile compared to competitors.",
                                    "Low organic traffic from their target US market."
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
                            At Digital Flavour, we designed a comprehensive SEO strategy to drive results.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                        {[
                            {
                                title: "In-Depth Keyword Research",
                                desc: "Identifying high-intent, product-specific keywords to target qualified buyers.",
                                icon: Search
                            },
                            {
                                title: "Competitor Analysis",
                                desc: "Analyzing top competitors to find content gaps and ranking opportunities.",
                                icon: BarChart3
                            },
                            {
                                title: "On-Page Optimization",
                                desc: "Crafting compelling meta titles and descriptions for better click-through rates.",
                                icon: Globe
                            },
                            {
                                title: "Technical SEO Fixes",
                                desc: "Resolving Search Console errors, URL issues, redirections, and duplicate content.",
                                icon: Sparkles
                            },
                            {
                                title: "Strategic Link Building",
                                desc: "Securing high-quality backlinks to improve domain authority and search rankings.",
                                icon: Link
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
                                    <item.icon className="w-5 h-5" />
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
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Through a data-driven SEO strategy and consistent execution, Digital Flavour successfully helped Lule and Co. achieve remarkable organic growth in just three months. This campaign not only boosted search visibility and traffic but also positioned the brand for long-term success in the competitive e-commerce space.
                        </p>
                        <p className="text-lg font-semibold text-primary mb-12">
                            Top 3 Rankings for Key Product Keywords like "off white veronica wool braided area rug" and "kitchen and bathroom decor."
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking to grow your e-commerce business with SEO?</h3>
                            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Contact Digital Flavour today and let's drive results together!
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

export default CaseStudyLuleAndCo;
