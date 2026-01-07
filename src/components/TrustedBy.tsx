import { motion } from "framer-motion";

const partners = [
    { name: "Google Ads", logo: "/images/partners/google-ads.png" },
    { name: "Meta", logo: "/images/partners/meta.png" },
    { name: "Google Analytics", logo: "/images/partners/google-analytics.png" },
    { name: "Clutch", logo: "/images/partners/clutch.png" },
    { name: "MSME", logo: "/images/partners/msme.png" },
];

const TrustedBy = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto container-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <p className="text-gray-600 text-lg font-medium">
                        Trusted & Certified Partner Of
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 hover:grayscale hover:opacity-70"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
