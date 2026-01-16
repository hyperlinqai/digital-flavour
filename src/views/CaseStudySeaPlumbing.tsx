import { motion } from "framer-motion";
import { ArrowRight, MapPin, Search, Star, MessageSquare, PhoneCall, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner";

const stats = [
    {
        icon: PhoneCall,
        value: "15-20",
        label: "Mnthly Service Calls",
        sub: "Consistent Inbound Inquiries"
    },
    {
        icon: TrendingUp,
        value: "Top 5",
        label: "Local Pack Ranking",
        sub: "Achieved in 3-4 Months"
    },
    {
        icon: MapPin,
        value: "High",
        label: "Maps Visibility",
        sub: "In 'Near Me' Searches"
    },
];

const CaseStudySeaPlumbing = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <ServiceHeroBanner
                backgroundImage="/images/plumber_working_real.png"
                badge={{ icon: MapPin, text: "Case Study: Local SEO" }}
                title={
                    <>
                        Generating <span className="text-gradient">15-20 Monthly Calls</span> for a Local Plumbing Business
                    </>
                }
                description="How Digital Flavour helped Sea Plumbing dominate local search results in Casey City."
                primaryCTA={{ text: "Boost Your Local Presence", href: "/contact" }}
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
                                Our client, Sea Plumbing, is a trusted plumbing service provider serving Casey City and nearby areas. They wanted to increase their local visibility and generate more service calls from homeowners and businesses in need of plumbing solutions.
                            </p>

                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                The plumbing industry is highly competitive at the local level, and our client faced challenges such as:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Low visibility in Google local search results and Maps.",
                                    "Difficulty competing with established plumbing companies in the area.",
                                    "Limited online presence leading to fewer inbound service calls.",
                                    "Lack of optimized Google My Business profile to attract local customers."
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
                            At Digital Flavour, we designed a targeted local SEO strategy to drive results.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {[
                            {
                                title: "Google My Business Optimization",
                                desc: "Enhanced profile with accurate business information, service areas, and engaging photos.",
                                icon: MapPin
                            },
                            {
                                title: "Local Keyword Targeting",
                                desc: "Optimized for location-specific keywords like 'plumber in Casey City' and 'emergency plumbing near me'.",
                                icon: Search
                            },
                            {
                                title: "Citation Building",
                                desc: "Listed Sea Plumbing on top local directories to boost local authority.",
                                icon: MessageSquare
                            },
                            {
                                title: "Review Generation Strategy",
                                desc: "Encouraged satisfied customers to leave positive reviews, improving trust and rankings.",
                                icon: Star
                            },
                            {
                                title: "On-Page Local SEO",
                                desc: "Optimized website content with local keywords and created location-specific service pages.",
                                icon: TrendingUp
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
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                            Through a strategic local SEO campaign and consistent optimization, Digital Flavour successfully helped Sea Plumbing dominate local search results in Casey City. This campaign not only increased service calls but also established Sea Plumbing as a go-to plumbing service in their service area.
                        </p>

                        <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking to grow your local service business?</h3>
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

export default CaseStudySeaPlumbing;
