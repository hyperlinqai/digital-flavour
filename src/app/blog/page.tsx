import { getPosts } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Digital Flavour',
    description: 'Insights, strategies, and news from the world of digital marketing.',
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container mx-auto container-padding text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-gradient">Blog</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Insights, strategies, and news from the world of digital marketing.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    {posts.length === 0 ? (
                        <p className="text-center text-muted-foreground">No posts found or failed to load.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => {
                                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-placeholder.png';
                                const date = new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                });

                                return (
                                    <article
                                        key={post.id}
                                        className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="aspect-video relative overflow-hidden">
                                            <div className="w-full h-full relative">
                                                <img
                                                    src={featuredImage}
                                                    alt={post.title.rendered}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    Digital Flavour Team
                                                </div>
                                            </div>

                                            <h2
                                                className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <div
                                                className="text-muted-foreground text-sm line-clamp-3 mb-6"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />

                                            {/* Replaced Button component with direct Link to avoid server/client prop serialization issues */}
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all p-0 h-auto"
                                            >
                                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
