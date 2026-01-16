import { getPostBySlug } from '@/lib/wordpress';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title.rendered} - Digital Flavour`,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160),
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <article className="pt-32 pb-20">
                <div className="container mx-auto container-padding max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    {featuredImage && (
                        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                            <img
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    )}

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {date}
                        </div>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </div>
            </article>

            <Footer />
        </main>
    );
}
