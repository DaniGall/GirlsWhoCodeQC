/* eslint-disable @next/next/no-img-element -- Instagram supplies expiring CDN URLs. */
import { getInstagramPosts } from "../lib/instagram";
export default async function InstagramFeed() {
  const { posts, status } = await getInstagramPosts();
  return (
    <section className="instagram-section" id="instagram">
      <div className="shell section">
        <p className="eyebrow">LIFE IN THE LOOP</p>
        <div className="section-heading">
          <h2>
            A little glimpse
            <br />
            of our community.
          </h2>
          <a
            className="text-link"
            href="https://www.instagram.com/gwc.qc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @gwc.qc ↗
          </a>
        </div>
        {posts.length ? (
          <div className="instagram-grid">
            {posts.map((post) => {
              const image =
                post.media_type === "VIDEO"
                  ? post.thumbnail_url
                  : post.media_url;
              return (
                <a
                  className="post-card"
                  href={post.permalink}
                  key={post.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image?.startsWith("https://") ? (
                    <img
                      src={image}
                      alt={
                        post.caption?.slice(0, 160) ||
                        "Girls Who Code Queens College Instagram post"
                      }
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="post-placeholder">
                      View {post.media_type === "VIDEO" ? "reel" : "post"} ↗
                    </div>
                  )}
                  <div className="post-body">
                    <span className="eyebrow">
                      {post.media_type === "VIDEO"
                        ? "REEL"
                        : post.media_type === "CAROUSEL_ALBUM"
                          ? "CAROUSEL"
                          : "INSTAGRAM"}{" "}
                      ·{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        timeZone: "America/New_York",
                      }).format(new Date(post.timestamp))}
                    </span>
                    <p>{post.caption || "See what’s happening in the loop."}</p>
                    <span className="text-link">View on Instagram ↗</span>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="feed-empty">
            <span className="feed-symbol" aria-hidden="true">
              ♡
            </span>
            <div>
              <h3>Keep up with the loop.</h3>
              <p>
                {status === "unavailable"
                  ? "Our feed is taking a little break. Visit Instagram for the latest from our community."
                  : "Find chapter updates, event announcements, and community moments on our Instagram."}
              </p>
              <a
                className="text-link"
                href="https://www.instagram.com/gwc.qc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit @gwc.qc ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
