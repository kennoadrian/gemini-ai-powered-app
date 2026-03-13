import { Redis } from "ioredis";

const REDIS_URL = process.env.REDIS_URL;
const CACHE_TTL_SECONDS = 60 * 60 * 24; // 24 hours

let redis: Redis | null = null;

export function getRedis(): Redis | null {
  if (!REDIS_URL) return null;
  if (!redis) {
    redis = new Redis(REDIS_URL, { maxRetriesPerRequest: 2 });
  }
  return redis;
}

export async function getCachedResponse(cacheKey: string): Promise<string | null> {
  const client = getRedis();
  if (!client) return null;
  try {
    const value = await client.get(cacheKey);
    return value;
  } catch {
    return null;
  }
}

export async function setCachedResponse(
  cacheKey: string,
  response: string,
  ttlSeconds: number = CACHE_TTL_SECONDS
): Promise<void> {
  const client = getRedis();
  if (!client) return;
  try {
    await client.setex(cacheKey, ttlSeconds, response);
  } catch {
    // ignore cache write errors
  }
}
