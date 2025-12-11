type Bucket = { count: number; reset: number }
const buckets = new Map<string, Bucket>()

// Basic IP-based rate limit: 5 requests per 60s
export function rateLimit(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const key = ip || 'unknown'
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs })
    return { allowed: true, remaining: limit - 1, reset: now + windowMs }
  }

  if (bucket.count >= limit) {
    return { allowed: false, remaining: 0, reset: bucket.reset }
  }

  bucket.count += 1
  buckets.set(key, bucket)
  return { allowed: true, remaining: limit - bucket.count, reset: bucket.reset }
}