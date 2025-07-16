export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin; // Client-side
  return process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'; // Server-side
}
export const getParams = (
  obj: Record<string, string | Array<string> | undefined>
) =>
  Object.entries(obj)
    .filter((entry) => entry[1])
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
