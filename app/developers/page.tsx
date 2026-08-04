import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { STEAM_URL } from "../lib/site";

const CREW = [
  ["Veigar Bouius", "Studio Director"],
  ["Andrew Spiering", "Engineering Director"],
  ["Evan Altwarg", "Associate Test Engineer"],
  ["Josh Black", "Senior Concept Artist"],
  ["Romain Clesse", "Principal Environment Artist"],
  ["Joey Davidson", "Communications & Community Lead"],
  ["Michael Delceg", "Lead Environment Artist"],
  ["Bryan Flynn", "Senior Concept Artist"],
  ["Rachel Frick", "Hard Surface Artist"],
  ["Katie Hancock", "Senior Producer / People Ops / HR"],
  ["Pierre-Luc Jacques", "Lead VFX Artist"],
  ["Jonathan Lee (JLee)", "Principal Environment Artist"],
  ["Travis Lewis", "Principal Game Designer"],
  ["Ricky Linn", "Lead Visual Designer"],
  ["Chris Miller", "Senior Technical Artist"],
  ["Phoebe Mullen", "Producer"],
  ["Linda Pansodtee", "Principal Software Engineer"],
  ["Kyle Rau", "Lead Hard Surface Artist"],
  ["Jason Voisin", "Principal Software Engineer"],
  ["Jim Williams", "Principal Technical Artist"],
  ["Joe Van Zeipel", "Principal UI Engineer"],
] as const;

const CREDITS = [
  "LEAGUE OF LEGENDS",
  "VALORANT",
  "STARCRAFT II",
  "MULTIVERSUS",
  "HOGWARTS LEGACY",
  "DESTINY",
  "CALL OF DUTY",
  "OVERWATCH",
] as const;

export const metadata: Metadata = {
  title: "The Developers — TYR",
  description: "Meet Stoke Games, the veteran multiplayer team building TYR in partnership with its players.",
};

export default function DevelopersPage() {
  return (
    <main className="developers-page" id="top">
      <SiteHeader active="developers" statusText="STOKE GAMES // DEVELOPMENT CHANNEL" statusMeta="EST. 2023" />

      <section className="developer-hero" id="main-content" tabIndex={-1}>
        <div className="developer-hero-art" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="developer-hero-copy">
          <div className="eyebrow"><span>06</span> STOKE GAMES // THE CREW</div>
          <h1>BUILT TO<br /><em>ENDURE.</em></h1>
          <p>Stoke Games was founded in 2023 to create multiplayer games that challenge players, reward mastery, and stand the test of time.</p>
          <div className="hero-actions">
            <a className="button button-primary focus-brackets" href="#studio">Meet the studio <span>↓</span></a>
            <a className="button button-secondary" href={STEAM_URL} target="_blank" rel="noreferrer">Follow TYR on Steam</a>
          </div>
        </div>
        <div className="developer-emblem"><img src="/stoke-games-logo.png" alt="Stoke Games" width="768" height="600" /></div>
      </section>

      <section className="studio-brief section" id="studio">
        <div className="section-index">07 // STUDIO DIRECTIVE</div>
        <div className="studio-statement">
          <h2>GAMEPLAY FIRST.<br /><span>PLAYERS ALWAYS.</span></h2>
          <p>TYR is being developed in partnership with its community. External playtests began early, giving Stoke direct feedback on combat, balance, progression, and the systems that make every engagement meaningful.</p>
        </div>
        <div className="studio-pillars">
          <article><span>01</span><h3>Challenge</h3><p>Deliberate systems that reward positioning, teamwork, and smart decisions.</p></article>
          <article><span>02</span><h3>Iterate</h3><p>Real matches and player feedback shape balance, clarity, and new content.</p></article>
          <article><span>03</span><h3>Endure</h3><p>A long-term multiplayer relationship built around trust and mastery.</p></article>
        </div>
      </section>

      <section className="experience-band section">
        <div className="section-heading">
          <div><div className="section-index">08 // COMBINED EXPERIENCE</div><h2>VETERANS OF<br /><span>THE ARENA.</span></h2></div>
          <p>The team’s collective credits span competitive multiplayer, live games, worldbuilding, hard-surface art, online engineering, and player-facing systems.</p>
        </div>
        <div className="credit-rail" aria-label="Games the Stoke Games team has worked on">
          {CREDITS.map((credit, index) => (
            <span key={credit}><small>{String(index + 1).padStart(2, "0")}</small>{credit}</span>
          ))}
        </div>
      </section>

      <section className="crew-section section" id="crew">
        <div className="section-heading">
          <div><div className="section-index">09 // ACTIVE ROSTER</div><h2>THE<br /><span>CREW.</span></h2></div>
          <p>Artists, designers, engineers, producers, community builders, and testers working together to make TYR readable, competitive, and deeply replayable.</p>
        </div>
        <div className="crew-grid">
          {CREW.map(([name, role], index) => (
            <article className="crew-card" key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{name}</h3><p>{role}</p></div>
            </article>
          ))}
        </div>
        <div className="crew-actions">
          <a className="button button-primary focus-brackets" href="#studio">Studio directive <span>↑</span></a>
          <a className="button button-secondary" href="mailto:hello@stoke.games">Contact the Studio</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
