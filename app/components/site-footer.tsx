import { STEAM_URL } from "../lib/site";

export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark" href="#top" aria-label="Back to the top"><img src="/tyr-logo.svg" alt="TYR" width="112" height="40" /></a>
      <div className="footer-signature"><img src="/fav.svg" alt="" aria-hidden="true" width="25" height="25" /><p>© 2026 STOKE GAMES. ALL RIGHTS RESERVED.</p></div>
      <div><a href={STEAM_URL} target="_blank" rel="noreferrer">STEAM ↗</a><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
