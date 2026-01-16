import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, Users, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: Users,
        value: "300-400+",
        label: "Leads Generated",
        sub: "Across Multiple Campaigns"
    },
    {
        icon: MessageSquare,
        value: "High",
        label: "Engagement",
        sub: "Strong Messaging Interactions"
    },
    {
        icon: BarChart3,
        value: "Optimized",
        label: "Cost-Per-Lead",
        sub: "Great Return on Investment"
    },
];

const campaignStats = [
    { region: "Himachal Video Ad Campaign", leads: "171 leads" },
    { region: "Himachal/Amritsar Campaign", leads: "136 leads" },
    { region: "Rajasthan Video Ad Campaign", leads: "67 leads" },
];

const CaseStudyTravel = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/travel_hero_v1.png"
                badge={{ icon: MapPin, text: "Case Study: Travel Industry" }}
                title={
                    <>
                        Generating <span className="text-gradient">300-400+ Leads</span> for a Travel Client
                    </>
                }
                description="How Digital Flavour helped a travel company expand its reach and boost bookings through targeted video ad campaigns."
                primaryCTA={{ text: "Grow Your Travel Business", href: "/contact" }}
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
                                Our client, a well-known travel company, aimed to increase inquiries and bookings for their travel packages. They wanted to reach potential travelers through digital marketing, particularly focusing on video ad campaigns.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The client needed a cost-effective way to generate high-quality leads while maximizing engagement. Their goals included:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Expanding their reach across different regions (Himachal, Amritsar, and Rajasthan).",
                                    "Encouraging direct inquiries through messaging-based campaigns.",
                                    "Optimizing ad spend to maintain a high return on investment (ROI)."
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
                            className="space-y-8"
                        >
                            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
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
                            </div>

                            <div className="bg-accent/50 rounded-2xl p-8 border border-border">
                                <h3 className="text-xl font-bold mb-4">Campaign Breakdown</h3>
                                <div className="space-y-3">
                                    {campaignStats.map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/50">
                                            <span className="text-sm font-medium">{stat.region}</span>
                                            <span className="text-primary font-bold">{stat.leads}</span>
                                        </div>
                                    ))}
                                </div>
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
                            At Digital Flavour, we developed a targeted ad strategy focusing on high-volume video campaigns and audience segmentation.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                title: "High-Volume Video Ads",
                                desc: "Engaging video content tailored to different destinations (Himachal, Rajasthan, etc.)."
                            },
                            {
                                title: "Audience Segmentation",
                                desc: "Targeting travel enthusiasts, adventure seekers, and holiday planners."
                            },
                            {
                                title: "Optimized Bidding",
                                desc: "Using the highest volume bid strategy to ensure maximum reach."
                            },
                            {
                                title: "Smart Budget Allocation",
                                desc: "Daily budgets ranging from ₹200 to ₹300 per campaign to balance efficiency and cost."
                            },
                            {
                                title: "Messaging-Focused Ads",
                                desc: "Encouraging direct inquiries through WhatsApp and Messenger ads."
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
                            Through strategic digital marketing and data-driven ad optimization, Digital Flavour successfully helped the travel industry client generate high-quality leads at an efficient cost. This campaign not only increased direct inquiries but also established a scalable model for future marketing efforts.
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking to scale your travel business?</h3>
                            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Contact Digital Flavour today and let’s make your brand stand out!
                            </p>
                            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-white/90">
                                <a href="/contact">
                                    Start Your Journey
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

export default CaseStudyTravel;
