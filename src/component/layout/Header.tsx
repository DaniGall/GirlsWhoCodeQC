"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell nav-row">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/GWC.png" alt="" width={44} height={44} />
          <span>
            Girls Who Code<span className="brand-sub">QUEENS COLLEGE</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {[
            ["/", "Home"],
            ["/About", "About"],
            ["/Team", "Our team"],
            ["/Event", "Events"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            className="button small"
            href="https://discord.gg/wPAVtrCSgq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the loop ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
