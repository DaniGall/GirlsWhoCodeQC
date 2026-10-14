export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-row">
        <div>
          <strong>Girls Who Code · Queens College</strong>
          <p>A little curiosity. A lot of possibility.</p>
          <small>
            © {new Date().getFullYear()} Girls Who Code Queens College.
          </small>
        </div>
        <nav aria-label="Community links">
          <a
            href="https://www.instagram.com/gwc.qc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://discord.gg/zfUWpb8KgK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord ↗
          </a>
          <a href="mailto:qcloop882@gmail.com">Get in touch ↗</a>
          <a
            href="https://girlswhocode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Girls Who Code HQ ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
