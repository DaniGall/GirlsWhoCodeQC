import "server-only";
export type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};
export type InstagramFeedResult = {
  status: "ready" | "unconfigured" | "unavailable";
  posts: InstagramPost[];
};
export async function getInstagramPosts(): Promise<InstagramFeedResult> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const account = process.env.INSTAGRAM_USER_ID;
  const version = process.env.INSTAGRAM_API_VERSION;
  if (!token || !account || !version)
    return { status: "unconfigured", posts: [] };
  if (!/^\d+$/.test(account) || !/^v\d+\.\d+$/.test(version))
    return { status: "unavailable", posts: [] };
  try {
    const url = new URL(
      `https://graph.instagram.com/${version}/${account}/media`,
    );
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    );
    url.searchParams.set("limit", "6");
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return { status: "unavailable", posts: [] };
    const body = await response.json();
    if (!Array.isArray(body.data)) return { status: "unavailable", posts: [] };
    const posts = body.data.filter(
      (post: InstagramPost) =>
        typeof post.id === "string" &&
        typeof post.permalink === "string" &&
        /^https:\/\/(www\.)?instagram\.com\//.test(post.permalink) &&
        typeof post.timestamp === "string" &&
        Number.isFinite(Date.parse(post.timestamp)) &&
        ["IMAGE", "VIDEO", "CAROUSEL_ALBUM"].includes(post.media_type) &&
        (post.caption === undefined || typeof post.caption === "string") &&
        (post.media_url === undefined || typeof post.media_url === "string") &&
        (post.thumbnail_url === undefined ||
          typeof post.thumbnail_url === "string"),
    );
    return { status: "ready", posts: posts.slice(0, 6) };
  } catch {
    return { status: "unavailable", posts: [] };
  }
}
