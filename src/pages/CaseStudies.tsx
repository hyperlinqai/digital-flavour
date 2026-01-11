import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHeroBanner from "@/components/ServiceHeroBanner"; // Reusing the hero banner component

const caseStudies = [
    {
        id: "real-estate-lead-gen",
        title: "Generating 124 Quality Leads for a Real Estate Client",
        category: "Real Estate",
        description: "How we used targeted ad strategies to drive high-intent leads for premium property listings.",
        image: "/images/real_estate_hero_v2.png", // Using the same image
        stats: "124 Leads in 1 Month",
        href: "/case-studies/real-estate-lead-gen"
    },
    {
        id: "travel-lead-gen",
        title: "Generating 300-400 Leads for a Travel Industry Client",
        category: "Travel",
        description: "How targeted video ad campaigns helped a travel company expand its reach and boost bookings.",
        image: "/images/travel_hero_v1.png",
        stats: "300-400+ Leads Generated",
        href: "/case-studies/travel-lead-gen"
    },
    {
        id: "healthcare-revenue",
        title: "Generating ₹15 Lakh Revenue for a Healthcare Brand",
        category: "Healthcare",
        description: "How a 360° digital marketing strategy drove consistent sales for an alkaline hydrogen water brand.",
        image: "/images/healthcare_hero_v1.png",
        stats: "₹15 Lakh Revenue in 3-4 Months",
        href: "/case-studies/healthcare-revenue"
    },
    {
        id: "return-gifts-website",
        title: "Creating a High-Converting Website for a Return Gifts Shop",
        category: "E-Commerce",
        description: "How a modern, user-friendly website design increased inquiries and built brand credibility.",
        image: "/images/return_gifts_hero_v1.png",
        stats: "Increased Inquiries & Engagement",
        href: "/case-studies/return-gifts-website"
    },
    // Add more case studies here in the future
];

const CaseStudies = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <ServiceHeroBanner
                backgroundImage="/images/real_estate_hero_v2.png" // Could use a general background here
                badge={{ icon: Building2, text: "Success Stories" }}
                title={
                    <>
                        Our <span className="text-gradient">Case Studies</span>
                    </>
                }
                description="Explore how we've helped businesses across various industries achieve their digital marketing goals."
                primaryCTA={{ text: "Start Your Project", href: "/contact" }}
            />

            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.a
                                key={study.id}
                                href={study.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                        {study.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4 text-sm font-semibold text-primary">{study.stats}</div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                        {study.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                                        Read Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CaseStudies;
