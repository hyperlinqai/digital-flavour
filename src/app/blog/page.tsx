import { getPosts } from '@/lib/wordpress';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Digital Marketing Insights & Strategies | Digital Flavour',
    description: 'Expert insights on SEO, Google Ads, social media marketing, and digital growth strategies. Stay updated with the latest trends from Digital Flavour.',
    openGraph: {
        title: 'Blog - Digital Marketing Insights & Strategies',
        description: 'Expert insights on SEO, Google Ads, social media marketing, and digital growth strategies.',
        type: 'website',
        siteName: 'Digital Flavour',
        url: 'https://digitalflavour.co/blog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - Digital Marketing Insights & Strategies',
        description: 'Expert insights on SEO, Google Ads, social media marketing, and digital growth strategies.',
    },
    alternates: {
        canonical: 'https://digitalflavour.co/blog',
    },
};

// Calculate reading time
function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]+>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogPage() {
    const posts = await getPosts();

    // JSON-LD structured data for blog listing
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Digital Flavour Blog',
        description: 'Expert insights on SEO, Google Ads, social media marketing, and digital growth strategies.',
        url: 'https://digitalflavour.co/blog',
        publisher: {
            '@type': 'Organization',
            name: 'Digital Flavour',
            logo: {
                '@type': 'ImageObject',
                url: 'https://digitalflavour.co/logo.png',
            },
        },
        blogPost: posts.slice(0, 10).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title.rendered.replace(/<[^>]+>/g, ''),
            url: `https://digitalflavour.co/blog/${post.slug}`,
            datePublished: post.date_gmt,
            dateModified: post.modified_gmt,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
            author: {
                '@type': 'Person',
                name: post._embedded?.author?.[0]?.name || 'Digital Flavour',
            },
        })),
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header variant="opaque" />

            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
                <div className="container mx-auto container-padding text-center">
                    <span className="inline-block text-primary font-semibold mb-4">
                        Our Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Digital Marketing <span className="text-gradient">Insights</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Expert strategies, tips, and industry insights to help you grow your business online.
                        Stay ahead with the latest in SEO, PPC, and digital marketing.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto container-padding">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">No posts found. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => {
                                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-placeholder.png';
                                const author = post._embedded?.author?.[0];
                                const categories = post._embedded?.['wp:term']?.[0] || [];
                                const readingTime = calculateReadingTime(post.content.rendered);

                                const date = new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                });

                                return (
                                    <article
                                        key={post.id}
                                        className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="block">
                                            <div className="aspect-video relative overflow-hidden">
                                                <img
                                                    src={featuredImage}
                                                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Category badge */}
                                                {categories.length > 0 && (
                                                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                                        {categories[0].name}
                                                    </span>
                                                )}
                                            </div>
                                        </Link>

                                        <div className="p-6">
                                            {/* Meta info */}
                                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {readingTime} min
                                                </div>
                                                {author && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-3 h-3" />
                                                        {author.name}
                                                    </div>
                                                )}
                                            </div>

                                            <Link href={`/blog/${post.slug}`}>
                                                <h2
                                                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2"
                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                />
                                            </Link>

                                            <div
                                                className="text-muted-foreground text-sm line-clamp-3 mb-6"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all"
                                            >
                                                Read Article
                                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto container-padding text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Turn these insights into results. Let our experts create a custom strategy for your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
