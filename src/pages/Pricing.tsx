import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const seoData = [
    {
        feature: "Link Building",
        starter: "Basic (300–400 Backlinks)",
        advanced: "Advanced (800–900 Backlinks)",
        premium: "High-Quality (1200–1400 Backlinks)",
    },
    {
        feature: "On-Page SEO",
        starter: "Basic Optimization (Meta tags, H-tags, Robots.txt, Sitemap)",
        advanced: "Advanced (Includes Schema Markup, Canonical Tags, CTR optimization)",
        premium: "Technical & Off-Page (Includes Core Web Vitals, User Behavior, Internal Linking)",
    },
    {
        feature: "Content Strategy",
        starter: "N/A",
        advanced: "Content Creation & Optimization",
        premium: "Comprehensive Content Marketing",
    },
    {
        feature: "Reporting",
        starter: "Monthly Performance Report",
        advanced: "Monthly Performance Report",
        premium: "Weekly Performance Reports",
    },
    {
        feature: "Competitor Analysis",
        starter: "N/A",
        advanced: "Standard Competitor Analysis",
        premium: "Detailed Competitor Analysis",
    },
    {
        feature: "Specific Inclusions",
        starter: "• Social Bookmarking\n• Business Listings\n• Image/Infographic Submission",
        advanced: "• Blog Submission (2-3)\n• Guest Posting (2-3)\n• Forum Submission\n• PDF/Doc Submission",
        premium: "• Blog Submission (5-6)\n• Guest Posting (5-7)\n• Press Release (2-3)\n• Startup/Niche Submission",
    },
];

const smmData = [
    {
        feature: "Content Volume",
        starter: "10 Posts/Month\n(2 Reels, 6 Single, 2 Carousel)",
        advanced: "20 Posts/Month\n(5 Reels, 10 Single, 5 Carousel)",
        premium: "30 Posts/Month\n(8 Reels, 14 Single, 8 Carousel)",
    },
    {
        feature: "Strategy",
        starter: "Account Setup only",
        advanced: "Strategy Development",
        premium: "Comprehensive Strategy",
    },
    {
        feature: "Engagement",
        starter: "Basic Engagement & Monitoring",
        advanced: "Advanced Engagement & Community Mgmt",
        premium: "Advanced Engagement + Influencer Collaboration",
    },
    {
        feature: "Ad Management",
        starter: "N/A",
        advanced: "Social Media Ad Management*",
        premium: "Social Media Ad Management*",
    },
    {
        feature: "Platform Mgmt",
        starter: "Social Media Management",
        advanced: "Response Mgmt (FB, Insta)",
        premium: "Response Mgmt (LinkedIn, Twitter, FB, Insta, YT)",
    },
    {
        feature: "Reporting",
        starter: "Monthly Performance Report",
        advanced: "Monthly Performance Report",
        premium: "Weekly Performance Reports",
    },
    {
        feature: "Creative Assets",
        starter: "Standard Content",
        advanced: "Graphics, Campaign Design",
        premium: "Graphics, Video Creation for Ads",
    },
];

const PricingTable = ({ data, type }: { data: typeof seoData; type: string }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                    <tr>
                        <th className="text-left p-6 bg-secondary/10 rounded-tl-2xl border-b border-border w-1/4">Feature</th>
                        <th className="p-6 bg-card border-b border-border text-center w-1/4">
                            <span className="block text-xl font-bold text-primary mb-2">Starter</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-wider">{type} Package</span>
                        </th>
                        <th className="p-6 bg-primary/5 border-b border-border text-center w-1/4 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-b-lg font-bold">
                                POPULAR
                            </div>
                            <span className="block text-xl font-bold text-primary mb-2 pt-2">Advanced</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-wider">{type} Package</span>
                        </th>
                        <th className="p-6 bg-card border-b border-border rounded-tr-2xl text-center w-1/4">
                            <span className="block text-xl font-bold text-primary mb-2">Premium</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-wider">{type} Package</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.feature} className={`group hover:bg-muted/50 transition-colors ${index === data.length - 1 ? "" : "border-b border-border"}`}>
                            <td className="p-6 font-semibold text-foreground bg-secondary/5 group-hover:bg-secondary/10 transition-colors">
                                {row.feature}
                            </td>
                            <td className="p-6 text-center text-muted-foreground bg-card group-hover:bg-card/80">
                                <CellContent content={row.starter} />
                            </td>
                            <td className="p-6 text-center text-foreground font-medium bg-primary/5 group-hover:bg-primary/10">
                                <CellContent content={row.advanced} />
                            </td>
                            <td className="p-6 text-center text-muted-foreground bg-card group-hover:bg-card/80">
                                <CellContent content={row.premium} />
                            </td>
                        </tr>
                    ))}
                    {/* CTA Row */}
                    <tr>
                        <td className="p-6 bg-secondary/5 rounded-bl-2xl"></td>
                        <td className="p-6 bg-card text-center">
                            <Button variant="outline" className="w-full" asChild>
                                <a href="/contact">Choose Starter</a>
                            </Button>
                        </td>
                        <td className="p-6 bg-primary/5 text-center relative z-10">
                            <Button variant="hero" className="w-full shadow-lg hover:shadow-primary/20" asChild>
                                <a href="/contact">Choose Advanced</a>
                            </Button>
                        </td>
                        <td className="p-6 bg-card text-center rounded-br-2xl">
                            <Button variant="outline" className="w-full" asChild>
                                <a href="/contact">Choose Premium</a>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const CellContent = ({ content }: { content: string }) => {
    if (content === "N/A") {
        return <X className="w-6 h-6 text-muted-foreground/30 mx-auto" />;
    }

    if (content.includes("•")) {
        return (
            <ul className="text-left space-y-2 inline-block">
                {content.split("\n").map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{item.replace("•", "").trim()}</span>
                    </li>
                ))}
            </ul>
        );
    }

    // Handle line breaks in standard text (like the Content Volume row)
    if (content.includes("\n")) {
        return (
            <div className="flex flex-col gap-1">
                {content.split("\n").map((line, i) => (
                    <span key={i} className={i === 0 ? "font-semibold" : "text-sm text-muted-foreground"}>
                        {line}
                    </span>
                ))}
            </div>
        )
    }

    return <span>{content}</span>;
}

const Pricing = () => {
    const [activeTab, setActiveTab] = useState<"seo" | "smm">("seo");

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5 -z-10" />
                <div className="container mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Transparent <span className="text-gradient">Pricing</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                            Choose the perfect package for your business growth. No hidden fees, just measurable results.
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex p-1 bg-secondary/20 rounded-xl mb-12">
                            <button
                                onClick={() => setActiveTab("seo")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "seo"
                                        ? "bg-primary text-secondary shadow-lg"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                SEO Packages
                            </button>
                            <button
                                onClick={() => setActiveTab("smm")}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === "smm"
                                        ? "bg-primary text-secondary shadow-lg"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                SMM Packages
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Tables */}
            <section className="pb-32">
                <div className="container mx-auto container-padding">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden"
                    >
                        {activeTab === "seo" ? (
                            <PricingTable data={seoData} type="SEO" />
                        ) : (
                            <PricingTable data={smmData} type="SMM" />
                        )}
                    </motion.div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">
                            Need a custom plan tailored to your specific needs?
                        </p>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/contact">Contact Our Sales Team</a>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Pricing;
