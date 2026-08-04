import { AbilityVideo } from "./components/ability-video";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { sitePath, STEAM_URL } from "./lib/site";

const abilities = [
  { name: "Blink", tag: "REPOSITION", video: "/ability-blink.mp4", description: "Jump several vehicle lengths forward or back." },
  { name: "Drone", tag: "RECON", video: "/ability-drone.mp4", description: "Extend your sightline and expose the enemy." },
  { name: "Ram", tag: "IMPACT", video: "/ability-ram.mp4", description: "Overcharge the engine and turn mass into damage." },
  { name: "Stealth", tag: "AMBUSH", video: "/ability-stealth.mp4", description: "Break contact, reposition, and choose the next fight." },
  { name: "Wall", tag: "CONTROL", video: "/ability-wall.mp4", description: "Shape the battlefield and deny a firing lane." },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader active="overview" home statusText="TYR PLAYTEST // SYSTEMS ONLINE" statusMeta="Q3 2026" />

      <section className="hero" id="main-content" tabIndex={-1}>
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span>01</span> MULTIPLAYER TANK SHOOTER</div>
          <h1>POSITION.<br />ANGLE. <em>STRIKE.</em></h1>
          <p className="hero-copy">
            Pilot specialized armor, master battlefield-defining abilities, and win the engagement before the first shell leaves the barrel.
          </p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href={STEAM_URL} target="_blank" rel="noreferrer">Play Now <span>↗</span></a>
            <a className="button button-secondary" href={STEAM_URL} target="_blank" rel="noreferrer">Wishlist on Steam</a>
          </div>
          <div className="hero-data" aria-label="Game information">
            <div><strong>18</strong><span>Available tanks</span></div>
            <div><strong>05</strong><span>Battlefields</span></div>
            <div><strong>F2P</strong><span>All gameplay unlockable</span></div>
          </div>
        </div>

        <div className="trailer-shell">
          <div className="panel-label"><span>FEATURED TRANSMISSION</span><span>02:14 // HD</span></div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-jIYehgCYJs?rel=0"
              title="TYR official video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-caption"><span>▶</span> WATCH THE OFFICIAL GAMEPLAY TRANSMISSION</div>
        </div>

        <a className="scroll-cue" href="#overview"><span>SCROLL TO DEPLOY</span><i /></a>
      </section>

      <section className="overview section" id="overview">
        <div className="section-index">02 // FIELD BRIEF</div>
        <div className="overview-copy">
          <div>
            <p className="kicker">DELIBERATE COMBAT</p>
            <h2>OUTTHINK.<br /><span>OUTMANEUVER.</span></h2>
          </div>
          <p>
            TYR is a team-based armored shooter where information is ammunition. Angle your hull, manage your noise, exploit asymmetric vision, and commit only when the shot is yours.
          </p>
        </div>
        <div className="overview-visual">
          <img src={sitePath("/official-screenshot-06.png")} alt="A TYR squad advancing across the battlefield" width="1920" height="1080" loading="lazy" decoding="async" />
          <div className="scan-line" />
          <div className="overview-callout callout-a"><b>01</b><span>READ THE TERRAIN</span></div>
          <div className="overview-callout callout-b"><b>02</b><span>CONTROL THE SIGHTLINE</span></div>
          <div className="overview-callout callout-c"><b>03</b><span>COMMIT TO THE SHOT</span></div>
        </div>
      </section>

      <section className="abilities section" id="abilities">
        <div className="section-heading">
          <div>
            <div className="section-index">03 // KEYSTONE TECH</div>
            <h2>YOUR TANK.<br /><span>YOUR TACTIC.</span></h2>
          </div>
          <p>Each vehicle brings a unique power that can break a stalemate, set an ambush, or turn a losing fight.</p>
        </div>

        <div className="ability-grid">
          {abilities.map((ability, index) => (
            <a className="ability-card" href={sitePath("/tanks/#tank-roster")} key={ability.name} aria-label={`Explore ${ability.name} in the tank database`}>
              <div className="ability-media">
                <AbilityVideo src={sitePath(ability.video)} />
                <div className="media-grid" />
                <span>0{index + 1}</span>
              </div>
              <div className="ability-info">
                <div><small>{ability.tag}</small><h3>{ability.name}</h3></div>
                <div><p>{ability.description}</p><span className="ability-link">TANK DATABASE ↗</span></div>
              </div>
            </a>
          ))}
        </div>
        <div className="ability-cta">
          <a className="button button-primary focus-brackets" href={sitePath("/tanks/")}>Explore All Tanks <span>↗</span></a>
        </div>
      </section>

      <section className="roster section">
        <div className="roster-image">
          <img
            src={sitePath("/official-screenshot-05.png")}
            alt="A TYR heavy tank moving through the red-rock battlefield"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="roster-copy">
          <div className="section-index">04 // DEPLOYMENT ROSTER</div>
          <p className="kicker">HEAVY // FORTIS</p>
          <h2>MASTER<br /><span>THE MACHINE.</span></h2>
          <p>Deploy treaded and hover tanks across light, medium, and heavy classes. Build XP, unlock new armor, and evolve each ride through individual tech trees, ammo slots, and components.</p>
          <a className="button button-primary focus-brackets" href={STEAM_URL} target="_blank" rel="noreferrer">View on Steam <span>↗</span></a>
        </div>
      </section>

      <section className="final-cta section">
        <div className="cta-art" aria-hidden="true" />
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-copy">
          <div className="section-index">05 // AWAITING COMMAND</div>
          <h2>ENTER THE<br /><span>BATTLEFIELD.</span></h2>
          <p>Wishlist TYR on Steam and request access to the playtest.</p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href={STEAM_URL} target="_blank" rel="noreferrer">Play Now <span>↗</span></a>
            <a className="button button-secondary" href={STEAM_URL} target="_blank" rel="noreferrer">Wishlist on Steam</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
