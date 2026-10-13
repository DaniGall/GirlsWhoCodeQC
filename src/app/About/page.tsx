import Link from "next/link";
export default function About() {
  return (
    <div className="shell section page-content">
      <p className="eyebrow">OUR CHAPTER</p>
      <h1>
        A place to belong.
        <br />
        <em>A space to become.</em>
      </h1>
      <p className="intro">
        Girls Who Code Queens College is a college loop community supporting
        students as they explore coding, technology, and what comes next.
      </p>
      <div className="card-grid">
        <article className="feature-card">
          <h2>Our mission</h2>
          <p>
            We’re part of Girls Who Code’s mission to close the gender gap in
            technology and change the image of what a programmer looks like and
            does.
          </p>
        </article>
        <article className="feature-card">
          <h2>Our community</h2>
          <p>
            We connect students through shared learning, creative projects, and
            conversations about finding a path in tech. You don’t need to have
            it all figured out to join.
          </p>
        </article>
        <article className="feature-card">
          <h2>Your first step</h2>
          <p>
            Join our Discord to introduce yourself, connect with members, and
            hear about chapter activities.
          </p>
          <a
            className="text-link"
            href="https://discord.gg/wPAVtrCSgq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say hello ↗
          </a>
        </article>
      </div>
      <Link className="text-link" href="/Team">
        Meet the team →
      </Link>
    </div>
  );
}
