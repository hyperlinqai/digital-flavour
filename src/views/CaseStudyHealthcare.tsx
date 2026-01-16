import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, Users, TrendingUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: TrendingUp,
        value: "₹15 Lakh+",
        label: "Revenue Generated",
        sub: "In Just 3-4 Months"
    },
    {
        icon: Users,
        value: "High",
        label: "Qualified Leads",
        sub: "Significant Increase"
    },
    {
        icon: Activity,
        value: "Lower",
        label: "Cost Per Lead",
        sub: "Higher Conversion Rates"
    },
];

const CaseStudyHealthcare = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/healthcare_hero_v1.png"
                badge={{ icon: Activity, text: "Case Study: Healthcare & Wellness" }}
                title={
                    <>
                        Generating <span className="text-gradient">₹15 Lakh Revenue</span> for a Healthcare Brand
                    </>
                }
                description="How Digital Flavour’s 360° digital marketing strategy helped an alkaline hydrogen water brand build a strong online presence and drive consistent sales."
                primaryCTA={{ text: "Boost Your Healthcare Business", href: "/contact" }}
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
                                Our client is a healthcare brand offering alkaline hydrogen water. They wanted to strengthen their online presence and generate consistent, high-quality leads to increase their revenue through digital channels.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The healthcare market is highly competitive, and our client faced several challenges:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Low website traffic and poor Google visibility.",
                                    "Inconsistent lead flow.",
                                    "High competition from established brands.",
                                    "Lack of a clear paid advertising strategy."
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
                            At Digital Flavour, we implemented a 360° digital marketing strategy to ensure comprehensive growth and visibility.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                title: "SEO & Local SEO",
                                desc: "Improving search rankings and Google Maps visibility to attract organic traffic."
                            },
                            {
                                title: "Google Ads",
                                desc: "Capturing high-intent healthcare searches to drive immediate leads."
                            },
                            {
                                title: "Meta Ads",
                                desc: "Building awareness and retargeting interested users on social platforms."
                            },
                            {
                                title: "Social Media Marketing",
                                desc: "Creating educational and trust-building content to engage the audience."
                            },
                            {
                                title: "Conversion Tracking",
                                desc: "Monitoring analytics and performance to continuously optimize campaigns."
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
                            Through a strategic, data-driven digital marketing approach, Digital Flavour helped the client generate ₹15 lakh in revenue within just 3–4 months. Our 360° marketing strategy not only boosted sales but also built a strong digital foundation for long-term growth.
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to achieve similar growth?</h3>
                            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Contact Digital Flavour today and let’s build your success story!
                            </p>
                            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-white/90">
                                <a href="/contact">
                                    Get Started
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

export default CaseStudyHealthcare;
