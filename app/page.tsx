"use client";

import { useState } from "react";

const steamUrl = "https://store.steampowered.com/app/2445260/Tyr/";

const armorZones = [
  {
    id: "hull",
    label: "Hull plating",
    result: "BLOCK",
    value: "166.3MM EFFECTIVE ARMOR",
    detail: "125MM ARMOR @ 41.24°",
    color: "#aeb8ff",
    position: "zone-hull",
  },
  {
    id: "angle",
    label: "Angled armor",
    result: "50% CHANCE",
    value: "70.3MM EFFECTIVE ARMOR",
    detail: "50MM ARMOR @ 44.62°",
    color: "#ffe000",
    position: "zone-angle",
  },
  {
    id: "module",
    label: "Critical module",
    result: "CRITICAL HIT MODULE",
    value: "39.6MM EFFECTIVE ARMOR",
    detail: "26MM ARMOR @ 48.94°",
    color: "#0a88ff",
    position: "zone-module",
  },
  {
    id: "treads",
    label: "Treads module",
    result: "TREADS MODULE",
    value: "57.3MM EFFECTIVE ARMOR",
    detail: "35MM ARMOR @ 52.28°",
    color: "#147dff",
    position: "zone-treads",
  },
  {
    id: "immobilize",
    label: "Drive wheel",
    result: "TREADS IMMOBILIZED",
    value: "42.7MM EFFECTIVE ARMOR",
    detail: "26MM ARMOR @ 52.44°",
    color: "#ff34cf",
    position: "zone-immobilize",
  },
];

const abilities = [
  { name: "Blink", tag: "REPOSITION", video: "/ability-blink.mp4", description: "Jump several vehicle lengths forward or back." },
  { name: "Drone", tag: "RECON", video: "/ability-drone.mp4", description: "Extend your sightline and expose the enemy." },
  { name: "Ram", tag: "IMPACT", video: "/ability-ram.mp4", description: "Overcharge the engine and turn mass into damage." },
  { name: "Stealth", tag: "AMBUSH", video: "/ability-stealth.mp4", description: "Break contact, reposition, and choose the next fight." },
  { name: "Wall", tag: "CONTROL", video: "/ability-wall.mp4", description: "Shape the battlefield and deny a firing lane." },
];

export default function Home() {
  const [activeArmor, setActiveArmor] = useState(armorZones[0]);

  return (
    <main>
      <div className="queue-strip">
        <span className="queue-pulse" />
        TYR PLAYTEST // SYSTEMS ONLINE
        <span>Q3 2026</span>
      </div>

      <nav className="top-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="TYR home">TYR</a>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#armor">Armor</a>
          <a href="#abilities">Abilities</a>
        </div>
        <a className="nav-cta" href={steamUrl} target="_blank" rel="noreferrer">Wishlist on Steam <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span>01</span> MULTIPLAYER TANK SHOOTER</div>
          <h1>POSITION.<br />ANGLE. <em>STRIKE.</em></h1>
          <p className="hero-copy">
            Pilot specialized armor, master battlefield-defining abilities, and win the engagement before the first shell leaves the barrel.
          </p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href={steamUrl} target="_blank" rel="noreferrer">Play Now <span>↗</span></a>
            <a className="button button-secondary" href={steamUrl} target="_blank" rel="noreferrer">Wishlist on Steam</a>
          </div>
          <div className="hero-data" aria-label="Game information">
            <div><strong>12</strong><span>Unlockable tanks</span></div>
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
          <img src="/battlefield-ui.png" alt="TYR battlefield and main menu interface" />
          <div className="scan-line" />
          <div className="overview-callout callout-a"><b>01</b><span>READ THE TERRAIN</span></div>
          <div className="overview-callout callout-b"><b>02</b><span>CONTROL THE SIGHTLINE</span></div>
          <div className="overview-callout callout-c"><b>03</b><span>COMMIT TO THE SHOT</span></div>
        </div>
      </section>

      <section className="armor section" id="armor">
        <div className="section-heading">
          <div>
            <div className="section-index">03 // ARMOR MODELING</div>
            <h2>EVERY ANGLE<br /><span>IS A DECISION.</span></h2>
          </div>
          <p>Hover, focus, or tap a highlighted armor color to inspect the projected shell result.</p>
        </div>

        <div className="armor-console">
          <div className="console-tabs"><span>Q</span><span>TANKS</span><span className="selected">ARMOR</span><span>BATTLES</span><span>RANKED</span><span>E</span></div>
          <div className="armor-stage">
            <img src="/armor-model.png" alt="Tricera tank with color-coded armor model" />
            <div className="armor-vignette" />
            {armorZones.map((zone) => (
              <button
                key={zone.id}
                type="button"
                className={`armor-zone ${zone.position} ${activeArmor.id === zone.id ? "is-active" : ""}`}
                style={{ "--zone-color": zone.color } as React.CSSProperties}
                onMouseEnter={() => setActiveArmor(zone)}
                onFocus={() => setActiveArmor(zone)}
                onClick={() => setActiveArmor(zone)}
                aria-label={`Inspect ${zone.label}`}
              ><span /></button>
            ))}
            <div className="armor-readout" style={{ "--zone-color": activeArmor.color } as React.CSSProperties} aria-live="polite">
              <div className="readout-route">KESTREL <span>→</span> TRICERA</div>
              <h3>{activeArmor.result}</h3>
              <div className="dot-rule" />
              <strong>{activeArmor.value}</strong>
              <small>{activeArmor.detail}</small>
            </div>
          </div>
          <div className="armor-legend">
            {armorZones.map((zone) => (
              <button
                type="button"
                key={zone.id}
                className={activeArmor.id === zone.id ? "active" : ""}
                onMouseEnter={() => setActiveArmor(zone)}
                onFocus={() => setActiveArmor(zone)}
                onClick={() => setActiveArmor(zone)}
              >
                <i style={{ backgroundColor: zone.color }} />
                <span>{zone.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="abilities section" id="abilities">
        <div className="section-heading">
          <div>
            <div className="section-index">04 // KEYSTONE TECH</div>
            <h2>YOUR TANK.<br /><span>YOUR TACTIC.</span></h2>
          </div>
          <p>Each vehicle brings a unique power that can break a stalemate, set an ambush, or turn a losing fight.</p>
        </div>

        <div className="ability-grid">
          {abilities.map((ability, index) => (
            <article className="ability-card" key={ability.name}>
              <div className="ability-media">
                <video src={ability.video} autoPlay muted loop playsInline preload="metadata" />
                <div className="media-grid" />
                <span>0{index + 1}</span>
              </div>
              <div className="ability-info">
                <div><small>{ability.tag}</small><h3>{ability.name}</h3></div>
                <p>{ability.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="roster section">
        <div className="roster-image"><img src="/fortis-deployment.png" alt="Fortis heavy tank deployment roster" /></div>
        <div className="roster-copy">
          <div className="section-index">05 // DEPLOYMENT ROSTER</div>
          <p className="kicker">HEAVY // FORTIS</p>
          <h2>MASTER<br /><span>THE MACHINE.</span></h2>
          <p>Deploy treaded and hover tanks across light, medium, and heavy classes. Build XP, unlock new armor, and evolve each ride through individual tech trees, ammo slots, and components.</p>
          <a className="button button-primary focus-brackets" href={steamUrl} target="_blank" rel="noreferrer">View on Steam <span>↗</span></a>
        </div>
      </section>

      <section className="final-cta section">
        <div className="cta-art" aria-hidden="true" />
        <div className="cta-grid" aria-hidden="true" />
        <div className="cta-copy">
          <div className="section-index">06 // AWAITING COMMAND</div>
          <h2>ENTER THE<br /><span>BATTLEFIELD.</span></h2>
          <p>Wishlist TYR on Steam and request access to the playtest.</p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href={steamUrl} target="_blank" rel="noreferrer">Play Now <span>↗</span></a>
            <a className="button button-secondary" href={steamUrl} target="_blank" rel="noreferrer">Wishlist on Steam</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">TYR</a>
        <p>© 2026 STOKE GAMES. ALL RIGHTS RESERVED.</p>
        <div><a href={steamUrl} target="_blank" rel="noreferrer">STEAM ↗</a><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
