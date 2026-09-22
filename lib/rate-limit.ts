/**
 * Fixed-window, in-memory rate limiter.
 *
 * Scope caveat: state lives in the process, so on a multi-instance or
 * serverless deployment each instance keeps its own counter and the effective
 * limit is `limit x instances`. That is enough to stop casual scripted abuse of
 * the contact endpoint; a shared store (Redis, Upstash) is the upgrade path if
 * this ever needs to be exact.
 */

interface Window {
  count: number;
  resetAt: number;
}

const windows = new Map<string, Window>();

// Bound memory if a burst of unique keys arrives.
const MAX_TRACKED_KEYS = 10_000;

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const existing = windows.get(key);

  if (!existing || now >= existing.resetAt) {
    if (windows.size >= MAX_TRACKED_KEYS) {
      for (const [entryKey, entry] of windows) {
        if (now >= entry.resetAt) windows.delete(entryKey);
      }
    }

    windows.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  const retryAfterSeconds = Math.ceil((existing.resetAt - now) / 1000);

  if (existing.count > limit) {
    return { allowed: false, remaining: 0, retryAfterSeconds };
  }

  return {
    allowed: true,
    remaining: limit - existing.count,
    retryAfterSeconds,
  };
}

/**
 * Best-effort client identity. `NextRequest.ip` was removed in Next 15, so this
 * reads the proxy headers. Values are attacker-controlled, which is acceptable
 * for throttling but never for authorisation.
 */
export function clientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
