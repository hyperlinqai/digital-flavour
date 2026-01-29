import { getCache, setCache, CACHE_KEYS } from './redis';

const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://blog.digitalflavour.co/wp-json/wp/v2';

// Cache TTL: 1 hour
const CACHE_TTL = 3600;

// Types
export type PostAuthor = {
    id: number;
    name: string;
    slug: string;
    avatar_urls?: {
        24?: string;
        48?: string;
        96?: string;
    };
};

export type PostCategory = {
    id: number;
    name: string;
    slug: string;
    link: string;
};

export type FeaturedMedia = {
    id: number;
    source_url: string;
    alt_text?: string;
    media_details?: {
        width: number;
        height: number;
        sizes?: {
            medium?: { source_url: string };
            large?: { source_url: string };
            full?: { source_url: string };
        };
    };
};

// Yoast SEO data (if available)
export type YoastSEO = {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
    og_image?: Array<{
        url: string;
        width?: number;
        height?: number;
    }>;
    twitter_title?: string;
    twitter_description?: string;
    twitter_image?: string;
    canonical?: string;
    robots?: {
        index?: string;
        follow?: string;
    };
    schema?: Record<string, unknown>;
};

// RankMath SEO data (if available)
export type RankMathSEO = {
    title?: string;
    description?: string;
    focuskw?: string;
    robots?: string[];
};

export type Post = {
    id: number;
    date: string;
    date_gmt: string;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    link: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media?: number;
    author: number;
    categories: number[];
    tags: number[];
    // Yoast SEO (if plugin is installed and REST API enabled)
    yoast_head_json?: YoastSEO;
    // RankMath SEO (if plugin is installed)
    rank_math?: RankMathSEO;
    // Embedded data from _embed parameter
    _embedded?: {
        'wp:featuredmedia'?: FeaturedMedia[];
        'wp:term'?: PostCategory[][];
        author?: PostAuthor[];
    };
};

export type PostSEO = {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogImageWidth?: number;
    ogImageHeight?: number;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    canonical?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
};

/**
 * Extract SEO data from a post
 * Priority: Yoast > RankMath > Post data fallback
 */
export function extractSEO(post: Post): PostSEO {
    const yoast = post.yoast_head_json;
    const rankMath = post.rank_math;

    // Get featured image from embedded data
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
    const featuredImageUrl = featuredImage?.source_url;
    const featuredImageWidth = featuredImage?.media_details?.width;
    const featuredImageHeight = featuredImage?.media_details?.height;

    // Get author name
    const authorName = post._embedded?.author?.[0]?.name || 'Digital Flavour';

    // Clean excerpt for description (remove HTML tags)
    const cleanExcerpt = post.excerpt.rendered
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 160);

    // Clean title
    const cleanTitle = post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'");

    // If Yoast is available
    if (yoast) {
        return {
            title: yoast.title || cleanTitle,
            description: yoast.description || cleanExcerpt,
            ogTitle: yoast.og_title || yoast.title || cleanTitle,
            ogDescription: yoast.og_description || yoast.description || cleanExcerpt,
            ogImage: yoast.og_image?.[0]?.url || featuredImageUrl,
            ogImageWidth: yoast.og_image?.[0]?.width || featuredImageWidth,
            ogImageHeight: yoast.og_image?.[0]?.height || featuredImageHeight,
            twitterTitle: yoast.twitter_title || yoast.og_title || cleanTitle,
            twitterDescription: yoast.twitter_description || yoast.og_description || cleanExcerpt,
            twitterImage: yoast.twitter_image || yoast.og_image?.[0]?.url || featuredImageUrl,
            canonical: yoast.canonical,
            author: authorName,
            publishedTime: post.date_gmt,
            modifiedTime: post.modified_gmt,
        };
    }

    // If RankMath is available
    if (rankMath) {
        return {
            title: rankMath.title || cleanTitle,
            description: rankMath.description || cleanExcerpt,
            ogTitle: rankMath.title || cleanTitle,
            ogDescription: rankMath.description || cleanExcerpt,
            ogImage: featuredImageUrl,
            ogImageWidth: featuredImageWidth,
            ogImageHeight: featuredImageHeight,
            author: authorName,
            publishedTime: post.date_gmt,
            modifiedTime: post.modified_gmt,
        };
    }

    // Fallback to post data
    return {
        title: cleanTitle,
        description: cleanExcerpt,
        ogTitle: cleanTitle,
        ogDescription: cleanExcerpt,
        ogImage: featuredImageUrl,
        ogImageWidth: featuredImageWidth,
        ogImageHeight: featuredImageHeight,
        author: authorName,
        publishedTime: post.date_gmt,
        modifiedTime: post.modified_gmt,
    };
}

/**
 * Fetch all posts with caching
 */
export async function getPosts(perPage: number = 100): Promise<Post[]> {
    // Try cache first
    const cached = await getCache<Post[]>(CACHE_KEYS.POSTS);
    if (cached) {
        console.log('Posts loaded from cache');
        return cached;
    }

    try {
        const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=${perPage}`, {
            next: { revalidate: CACHE_TTL },
        });

        if (!res.ok) {
            console.error('WordPress API error:', res.status, res.statusText);
            return [];
        }

        const posts: Post[] = await res.json();

        // Cache the results
        await setCache(CACHE_KEYS.POSTS, posts, CACHE_TTL);
        console.log(`Fetched and cached ${posts.length} posts`);

        return posts;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
}

/**
 * Fetch a single post by slug with caching
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    // Try cache first
    const cacheKey = CACHE_KEYS.POST(slug);
    const cached = await getCache<Post>(cacheKey);
    if (cached) {
        console.log(`Post "${slug}" loaded from cache`);
        return cached;
    }

    try {
        const res = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
            next: { revalidate: CACHE_TTL },
        });

        if (!res.ok) {
            console.error('WordPress API error:', res.status, res.statusText);
            return null;
        }

        const posts: Post[] = await res.json();

        if (posts.length === 0) {
            return null;
        }

        const post = posts[0];

        // Cache the result
        await setCache(cacheKey, post, CACHE_TTL);
        console.log(`Fetched and cached post "${slug}"`);

        return post;
    } catch (error) {
        console.error(`Failed to fetch post "${slug}":`, error);
        return null;
    }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllSlugs(): Promise<string[]> {
    // Try cache first
    const cached = await getCache<string[]>(CACHE_KEYS.ALL_SLUGS);
    if (cached) {
        return cached;
    }

    try {
        // Fetch all posts (just need slugs, so we minimize data)
        const res = await fetch(`${WP_API_URL}/posts?per_page=100&_fields=slug`, {
            next: { revalidate: CACHE_TTL },
        });

        if (!res.ok) {
            return [];
        }

        const posts: Array<{ slug: string }> = await res.json();
        const slugs = posts.map((p) => p.slug);

        // Cache the slugs
        await setCache(CACHE_KEYS.ALL_SLUGS, slugs, CACHE_TTL);

        return slugs;
    } catch (error) {
        console.error('Failed to fetch slugs:', error);
        return [];
    }
}

/**
 * Get categories
 */
export async function getCategories(): Promise<PostCategory[]> {
    try {
        const res = await fetch(`${WP_API_URL}/categories?per_page=100`, {
            next: { revalidate: CACHE_TTL },
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return [];
    }
}
