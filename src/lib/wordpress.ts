const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://public-api.wordpress.com/wp/v2/sites/digitalflavour.co'; // Placeholder URL

export type Post = {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media?: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
};

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(`${WP_API_URL}/posts?_embed`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        // Fallback or empty on error
        return [];
    }

    return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}
