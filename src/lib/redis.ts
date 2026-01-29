import Redis from 'ioredis';

// Create Redis client with connection error handling
const createRedisClient = () => {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

    const client = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
        enableReadyCheck: true,
        lazyConnect: true,
        retryStrategy: (times) => {
            if (times > 3) {
                return null; // Stop retrying
            }
            return Math.min(times * 100, 3000);
        },
    });

    client.on('error', (err) => {
        console.warn('Redis connection error:', err.message);
    });

    client.on('connect', () => {
        console.log('Redis connected successfully');
    });

    return client;
};

// Singleton Redis client
let redis: Redis | null = null;

const getRedisClient = (): Redis | null => {
    if (!redis) {
        try {
            redis = createRedisClient();
        } catch (error) {
            console.warn('Failed to create Redis client:', error);
            return null;
        }
    }
    return redis;
};

// Default cache TTL: 1 hour
const DEFAULT_TTL = 3600;

/**
 * Get cached data from Redis
 */
export async function getCache<T>(key: string): Promise<T | null> {
    try {
        const client = getRedisClient();
        if (!client) return null;

        await client.connect().catch(() => { }); // Ignore if already connected
        const data = await client.get(key);

        if (data) {
            return JSON.parse(data) as T;
        }
        return null;
    } catch (error) {
        console.warn(`Redis get error for key ${key}:`, error);
        return null;
    }
}

/**
 * Set cache data in Redis with TTL
 */
export async function setCache<T>(
    key: string,
    data: T,
    ttl: number = DEFAULT_TTL
): Promise<boolean> {
    try {
        const client = getRedisClient();
        if (!client) return false;

        await client.connect().catch(() => { }); // Ignore if already connected
        await client.setex(key, ttl, JSON.stringify(data));
        return true;
    } catch (error) {
        console.warn(`Redis set error for key ${key}:`, error);
        return false;
    }
}

/**
 * Delete cache entry from Redis
 */
export async function deleteCache(key: string): Promise<boolean> {
    try {
        const client = getRedisClient();
        if (!client) return false;

        await client.connect().catch(() => { }); // Ignore if already connected
        await client.del(key);
        return true;
    } catch (error) {
        console.warn(`Redis delete error for key ${key}:`, error);
        return false;
    }
}

/**
 * Delete multiple cache entries by pattern
 */
export async function deleteCachePattern(pattern: string): Promise<boolean> {
    try {
        const client = getRedisClient();
        if (!client) return false;

        await client.connect().catch(() => { }); // Ignore if already connected
        const keys = await client.keys(pattern);

        if (keys.length > 0) {
            await client.del(...keys);
        }
        return true;
    } catch (error) {
        console.warn(`Redis delete pattern error for ${pattern}:`, error);
        return false;
    }
}

// Cache key constants
export const CACHE_KEYS = {
    POSTS: 'wp:posts',
    POST: (slug: string) => `wp:post:${slug}`,
    ALL_SLUGS: 'wp:slugs',
} as const;
