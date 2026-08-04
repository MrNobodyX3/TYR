import { ArmorSection } from "../components/armor-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { STEAM_URL } from "../lib/site";
import { TankBrowser } from "./tank-browser";

export default function TanksPage() {
  return (
    <main className="tanks-page" id="top">
      <SiteHeader
        active="tanks"
        statusText="VEHICLE DATABASE // 18 CHASSIS ONLINE"
        statusMeta="PLAYTEST DATA"
      />

      <section className="tank-database-hero" id="main-content" tabIndex={-1}>
        <div className="tank-database-art" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="tank-database-copy">
          <div className="eyebrow"><span>02</span> DEPLOYMENT DATABASE</div>
          <h1>CHOOSE YOUR<br /><em>MACHINE.</em></h1>
          <p>
            Compare every active chassis, learn its battlefield role, and inspect the numbers behind its
            firepower, mobility, scouting profile, and unique technology.
          </p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href={STEAM_URL} target="_blank" rel="noreferrer">
              Play Now <span>↗</span>
            </a>
            <a className="button button-secondary" href="#tank-roster">Browse all tanks</a>
          </div>
        </div>
      </section>

      <ArmorSection />
      <TankBrowser />
      <SiteFooter />
    </main>
  );
}
