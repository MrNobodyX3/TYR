"use client";

import { useEffect, useState } from "react";
import { NAVIGATION, sitePath, STEAM_URL, type NavigationKey } from "../lib/site";

type SiteHeaderProps = {
  active: NavigationKey;
  home?: boolean;
  statusText: string;
  statusMeta: string;
};

type NavigationItem = (typeof NAVIGATION)[number];

function NavigationLink({
  item,
  active,
  href,
  onNavigate,
  mobile = false,
}: {
  item: NavigationItem;
  active: NavigationKey;
  href: string;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  const selected = active === item.id;

  return (
    <a
      className={selected ? "active" : undefined}
      href={href}
      aria-current={selected ? (item.id === "overview" ? "location" : "page") : undefined}
      onClick={onNavigate}
    >
      {mobile ? <><span>{item.label}</span><small aria-hidden="true">↗</small></> : item.label}
    </a>
  );
}

export function SiteHeader({ active, home = false, statusText, statusMeta }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const hrefFor = (href: string) => (home && href.startsWith("/#") ? href.slice(1) : sitePath(href));

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="queue-strip">
        <img className="queue-emblem" src={sitePath("/fav.svg")} alt="" aria-hidden="true" width="21" height="21" />
        <span className="queue-copy">{statusText}</span>
        <span className="queue-pulse" aria-hidden="true" />
        <span className="queue-meta">{statusMeta}</span>
      </div>

      <nav className="top-nav" aria-label="Primary navigation">
        <a className="wordmark" href={home ? "#top" : sitePath("/")} aria-label="TYR home">
          <img src={sitePath("/tyr-logo.svg")} alt="TYR" width="112" height="40" />
        </a>

        <div className="nav-cluster">
          <div className="nav-links">
            {NAVIGATION.map((item) => (
              <NavigationLink
                key={item.id}
                item={item}
                active={active}
                href={hrefFor(item.href)}
              />
            ))}
          </div>
        </div>

        <a className="nav-cta" href={STEAM_URL} target="_blank" rel="noreferrer">
          <span className="nav-cta-label">Wishlist <span className="nav-cta-extra">on Steam</span></span><span aria-hidden="true">↗</span>
        </a>

        <button
          className="nav-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span /><span />
        </button>

        <div
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          {NAVIGATION.map((item) => (
            <NavigationLink
              key={item.id}
              item={item}
              active={active}
              href={hrefFor(item.href)}
              onNavigate={() => setMenuOpen(false)}
              mobile
            />
          ))}
        </div>
      </nav>
    </>
  );
}
