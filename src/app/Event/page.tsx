import InstagramFeed from "../../component/InstagramFeed";
export const revalidate = 3600;

export default function Event() {
  return (
    <>
      <section className="shell section page-content">
        <p className="eyebrow">LEARN SOMETHING. MEET SOMEONE.</p>
        <h1>
          Good things happen
          <br />
          <em>when we get together.</em>
        </h1>
        <p className="intro">
          Workshops, community conversations, and chances to create together.
          Find the latest chapter announcements on Instagram and Discord.
        </p>
        <div className="feed-empty">
          <span className="feed-symbol" aria-hidden="true">
            ✳
          </span>
          <div>
            <h2>Looking for our next meetup?</h2>
            <p>
              Visit our community channels for confirmed dates, locations, and
              RSVP details.
            </p>
            <a
              className="button"
              href="https://discord.gg/wPAVtrCSgq"
              target="_blank"
              rel="noopener noreferrer"
            >
              See announcements on Discord ↗
            </a>
          </div>
        </div>
      </section>
      <InstagramFeed />
    </>
  );
}
