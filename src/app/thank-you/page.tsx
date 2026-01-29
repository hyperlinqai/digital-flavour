"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYouPage = () => {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <section className="flex-1 flex items-center justify-center py-20 bg-gradient-to-b from-background to-secondary/20">
                <div className="container mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto"
                    >
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                            <CheckCircle2 className="w-14 h-14 text-green-500" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Thank You for{" "}
                            <span className="text-gradient">Reaching Out!</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground mb-8"
                        >
                            We've received your message and sent you a confirmation email.
                            Our team will get back to you within 24 hours.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button variant="hero" size="lg" asChild>
                                <Link href="/">
                                    <Home className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/services">
                                    Explore Our Services
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 p-6 bg-card rounded-2xl card-shadow"
                        >
                            <h3 className="font-semibold text-foreground mb-2">
                                What happens next?
                            </h3>
                            <ul className="text-muted-foreground text-sm space-y-2">
                                <li>✓ You'll receive a confirmation email shortly</li>
                                <li>✓ Our team will review your requirements</li>
                                <li>✓ We'll reach out within 24 hours with a personalized response</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ThankYouPage;
