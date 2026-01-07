import { motion } from "framer-motion";
import { Phone, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ServiceHeroBannerProps {
    backgroundImage: string;
    badge: {
        icon: LucideIcon;
        text: string;
    };
    title: ReactNode;
    description: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
        icon?: LucideIcon;
    };
}

const ServiceHeroBanner = ({
    backgroundImage,
    badge,
    title,
    description,
    primaryCTA,
    secondaryCTA,
}: ServiceHeroBannerProps) => {
    const BadgeIcon = badge.icon;
    const SecondaryIcon = secondaryCTA?.icon || Phone;

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
            </div>

            {/* Content */}
            <div className="container mx-auto container-padding relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                            <BadgeIcon className="w-4 h-4 text-primary" />
                            <span className="text-white text-sm font-medium">
                                {badge.text}
                            </span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button variant="hero" size="xl" asChild>
                            <a href={primaryCTA.href}>
                                {primaryCTA.text}
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </Button>
                        {secondaryCTA && (
                            <Button
                                variant="outline"
                                size="xl"
                                className="border-white/30 text-white hover:bg-white/10"
                                asChild
                            >
                                <a href={secondaryCTA.href}>
                                    <SecondaryIcon className="w-5 h-5" />
                                    {secondaryCTA.text}
                                </a>
                            </Button>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeroBanner;
