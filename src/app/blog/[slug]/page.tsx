import { getPostBySlug, getAllSlugs, extractSEO } from '@/lib/wordpress';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, User, Clock, List } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for the page using WordPress SEO data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found - Digital Flavour',
            description: 'The requested blog post could not be found.',
        };
    }

    const seo = extractSEO(post);
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];

    return {
        title: seo.title,
        description: seo.description,
        authors: seo.author ? [{ name: seo.author }] : undefined,
        openGraph: {
            title: seo.ogTitle || seo.title,
            description: seo.ogDescription || seo.description,
            type: 'article',
            publishedTime: seo.publishedTime,
            modifiedTime: seo.modifiedTime,
            authors: seo.author ? [seo.author] : undefined,
            images: seo.ogImage ? [{
                url: seo.ogImage,
                width: seo.ogImageWidth,
                height: seo.ogImageHeight,
                alt: featuredImage?.alt_text || post.title.rendered,
            }] : undefined,
            siteName: 'Digital Flavour',
            url: `https://digitalflavour.co/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.twitterTitle || seo.title,
            description: seo.twitterDescription || seo.description,
            images: seo.twitterImage ? [seo.twitterImage] : undefined,
        },
        alternates: seo.canonical ? {
            canonical: seo.canonical,
        } : undefined,
    };
}

// Calculate reading time
function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]+>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

// Extract headings for Table of Contents
interface TocItem {
    id: string;
    text: string;
    level: number;
}

function extractTableOfContents(content: string): TocItem[] {
    const headingRegex = /<h([2-3])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h[2-3]>/gi;
    const toc: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1]);
        const existingId = match[2];
        const text = match[3].replace(/<[^>]+>/g, '').trim();

        // Generate ID from text if not present
        const id = existingId || text.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .substring(0, 50);

        if (text) {
            toc.push({ id, text, level });
        }
    }

    return toc;
}

// Add IDs to headings in content
function addHeadingIds(content: string): string {
    return content.replace(
        /<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi,
        (match, level, attrs, text) => {
            // Check if ID already exists
            if (attrs.includes('id="')) {
                return match;
            }

            const cleanText = text.replace(/<[^>]+>/g, '').trim();
            const id = cleanText.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .substring(0, 50);

            return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
        }
    );
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const author = post._embedded?.author?.[0];
    const categories = post._embedded?.['wp:term']?.[0] || [];

    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const readingTime = calculateReadingTime(post.content.rendered);
    const toc = extractTableOfContents(post.content.rendered);
    const contentWithIds = addHeadingIds(post.content.rendered);

    // JSON-LD structured data for better SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title.rendered.replace(/<[^>]+>/g, ''),
        description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160),
        image: featuredImage,
        datePublished: post.date_gmt,
        dateModified: post.modified_gmt,
        author: {
            '@type': 'Person',
            name: author?.name || 'Digital Flavour',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Digital Flavour',
            logo: {
                '@type': 'ImageObject',
                url: 'https://digitalflavour.co/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://digitalflavour.co/blog/${slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header variant="opaque" />

            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="pt-32 pb-20">
                <div className="container mx-auto container-padding">
                    {/* Back Link */}
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="max-w-4xl mx-auto mb-10">
                        {/* Categories */}
                        {categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {categories.map((category) => (
                                    <span
                                        key={category.id}
                                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                    >
                                        {category.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
                            {author && (
                                <div className="flex items-center gap-2">
                                    {author.avatar_urls?.['48'] && (
                                        <img
                                            src={author.avatar_urls['48']}
                                            alt={author.name}
                                            className="w-10 h-10 rounded-full border-2 border-primary/20"
                                        />
                                    )}
                                    <div>
                                        <span className="flex items-center gap-1 font-medium text-foreground">
                                            {author.name}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {date}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {readingTime} min read
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {featuredImage && (
                        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden mb-12 shadow-xl">
                            <img
                                src={featuredImage}
                                alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {/* Content Layout with TOC Sidebar */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
                        {/* Main Content */}
                        <div className="max-w-4xl">
                            {/* Mobile Table of Contents */}
                            {toc.length > 0 && (
                                <div className="lg:hidden mb-8 bg-card rounded-xl border border-border p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <List className="w-5 h-5 text-primary" />
                                        <h2 className="font-bold text-lg text-foreground">Table of Contents</h2>
                                    </div>
                                    <nav>
                                        <ul className="space-y-2">
                                            {toc.map((item, index) => (
                                                <li
                                                    key={index}
                                                    style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}
                                                >
                                                    <a
                                                        href={`#${item.id}`}
                                                        className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
                                                    >
                                                        {item.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            )}

                            {/* Article Content */}
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                            />

                            {/* Share / CTA Section */}
                            <div className="mt-16 pt-8 border-t border-border">
                                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-10 text-center">
                                    <h3 className="text-2xl font-bold mb-3 text-foreground">Need Help with Your Digital Marketing?</h3>
                                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                        Let our experts help you achieve your business growth goals with proven strategies.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                    >
                                        Get Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Sidebar with Sticky TOC */}
                        {toc.length > 0 && (
                            <aside className="hidden lg:block">
                                <div className="sticky top-28">
                                    <div className="bg-card rounded-xl border border-border p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <List className="w-5 h-5 text-primary" />
                                            <h2 className="font-bold text-foreground">Table of Contents</h2>
                                        </div>
                                        <nav>
                                            <ul className="space-y-2">
                                                {toc.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}
                                                    >
                                                        <a
                                                            href={`#${item.id}`}
                                                            className={`text-muted-foreground hover:text-primary transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary pl-3 -ml-3 ${item.level === 3 ? 'text-xs' : ''
                                                                }`}
                                                        >
                                                            {item.text}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>

                                    {/* Quick Contact */}
                                    <div className="mt-6 bg-primary/5 rounded-xl p-6 text-center">
                                        <p className="text-sm text-muted-foreground mb-3">Need help with SEO?</p>
                                        <Link
                                            href="/contact"
                                            className="text-primary font-semibold text-sm hover:underline"
                                        >
                                            Get Free Consultation →
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        )}
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
