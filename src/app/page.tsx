import Link from "next/link";
import InstagramFeed from "../component/InstagramFeed";
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">QUEENS COLLEGE · GIRLS WHO CODE</p>
          <h1>
            Your people.
            <br />
            Your potential.
            <br />
            <em>Your next chapter.</em>
          </h1>
          <p className="intro">
            A community for curious minds and future changemakers. Come learn,
            build, and find your place in tech—with us.
          </p>
          <div className="actions">
            <a
              className="button"
              href="https://discord.gg/wPAVtrCSgq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your community ↗
            </a>
            <Link className="text-link" href="/About">
              Get to know us →
            </Link>
          </div>
          <p className="hero-note">
            All experience levels welcome. Curiosity is enough.
          </p>
        </div>
        <div
          className="hero-art"
          aria-label="An illustration of a coding window"
        >
          <span className="art-spark">✳</span>
          <div className="code-window">
            <div className="window-bar">
              <span>● ● ●</span>
              <span>hello_world.ts</span>
            </div>
            <div className="code-content">
              <p>
                <span>const</span> yourNextChapter = &#123;
              </p>
              <p>
                &nbsp; community: <em>&quot;found&quot;</em>,
              </p>
              <p>
                &nbsp; curiosity: <em>&quot;unlimited&quot;</em>,
              </p>
              <p>
                &nbsp; possibilities: <em>Infinity</em>
              </p>
              <p>&#125;;</p>
              <br />
              <p className="code-comment">
                {"// better when we build together ♡"}
              </p>
            </div>
          </div>
          <div className="art-sticker">
            You belong
            <br />
            in tech. ♡
          </div>
          <span className="art-caption">LEARN. CONNECT. CREATE.</span>
        </div>
      </section>
      <div className="values-strip">
        <div className="shell">
          A space to start <span>✳</span> A community to grow <span>✳</span> A
          future to build
        </div>
      </div>
      <section className="section shell">
        <p className="eyebrow">MORE THAN A CODING CLUB</p>
        <div className="section-heading">
          <h2>
            Big ideas start
            <br />
            with a little connection.
          </h2>
          <p>
            We bring students together to explore technology, share what we
            know, and support each other along the way.
          </p>
        </div>
        <div className="card-grid">
          {[
            [
              "01",
              "Learn by doing",
              "Explore coding through workshops, collaborative projects, and opportunities to try something new.",
            ],
            [
              "02",
              "Find your people",
              "Meet other students who share your curiosity, trade ideas, and build friendships beyond the classroom.",
            ],
            [
              "03",
              "Grow together",
              "Practice your skills, learn from different perspectives, and take your next step in tech with support.",
            ],
          ].map(([n, title, body]) => (
            <article className="feature-card" key={n}>
              <span className="card-number">{n} /</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <InstagramFeed />
      <section className="shell join-panel">
        <span className="eyebrow">THERE’S A PLACE FOR YOU HERE</span>
        <h2>
          Let’s make something great.
          <br />
          <em>Together.</em>
        </h2>
        <p>Say hello, hear about meetups, and join the conversation.</p>
        <a
          className="button"
          href="https://discord.gg/wPAVtrCSgq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord ↗
        </a>
      </section>
    </>
  );
}
