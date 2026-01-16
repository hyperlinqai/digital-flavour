import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
    {
        id: 1,
        title: "The Future of SEO in 2026",
        excerpt: "Discover the latest trends and strategies that will dominate the search engine landscape this year.",
        date: "March 15, 2026",
        author: "Digital Flavour Team",
        image: "/images/global-seo-concept.png",
        category: "SEO"
    },
    {
        id: 2,
        title: "Why Social Media Marketing is Essential",
        excerpt: "Learn how to leverage social platforms to build brand awareness and drive engagement.",
        date: "March 10, 2026",
        author: "Digital Flavour Team",
        image: "/images/social-media-concept.png",
        category: "Social Media"
    },
    {
        id: 3,
        title: "Optimizing E-Commerce Conversions",
        excerpt: "Practical tips to turn your website visitors into loyal customers.",
        date: "March 5, 2026",
        author: "Digital Flavour Team",
        image: "/images/ecommerce-concept.png",
        category: "E-Commerce"
    }
];

const Blog = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto container-padding text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our <span className="text-gradient">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Insights, strategies, and news from the world of digital marketing.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                        {post.excerpt}
                                    </p>

                                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:gap-2 transition-all">
                                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Blog;
