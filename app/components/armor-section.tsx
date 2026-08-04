"use client";

import { useEffect, useState, type CSSProperties } from "react";

type ArmorZone = {
  id: string;
  label: string;
  result: string;
  value: string;
  detail: string;
  color: string;
  position: string;
  x: string;
  y: string;
};

const ARMOR_ZONES: readonly ArmorZone[] = [
  {
    id: "hull",
    label: "Hull plating",
    result: "BLOCK",
    value: "166.3MM EFFECTIVE ARMOR",
    detail: "125MM ARMOR @ 41.24°",
    color: "#aeb8ff",
    position: "zone-hull",
    x: "52%",
    y: "34%",
  },
  {
    id: "angle",
    label: "Angled armor",
    result: "50% CHANCE",
    value: "70.3MM EFFECTIVE ARMOR",
    detail: "50MM ARMOR @ 44.62°",
    color: "#ffe000",
    position: "zone-angle",
    x: "60.5%",
    y: "48%",
  },
  {
    id: "penetration",
    label: "Penetration",
    result: "PENETRATION",
    value: "66.3MM EFFECTIVE ARMOR",
    detail: "45MM ARMOR @ 47.19°",
    color: "#16f3d0",
    position: "zone-penetration",
    x: "45%",
    y: "59%",
  },
  {
    id: "module",
    label: "Critical module",
    result: "CRITICAL HIT MODULE",
    value: "39.6MM EFFECTIVE ARMOR",
    detail: "26MM ARMOR @ 48.94°",
    color: "#0a88ff",
    position: "zone-module",
    x: "66.5%",
    y: "44.5%",
  },
  {
    id: "treads",
    label: "Treads module",
    result: "TREADS MODULE",
    value: "57.3MM EFFECTIVE ARMOR",
    detail: "35MM ARMOR @ 52.28°",
    color: "#147dff",
    position: "zone-treads",
    x: "62%",
    y: "69.5%",
  },
  {
    id: "immobilize",
    label: "Drive wheel",
    result: "TREADS IMMOBILIZED",
    value: "42.7MM EFFECTIVE ARMOR",
    detail: "26MM ARMOR @ 52.44°",
    color: "#ff34cf",
    position: "zone-immobilize",
    x: "28%",
    y: "62%",
  },
];

export function ArmorSection() {
  const [activeArmor, setActiveArmor] = useState(ARMOR_ZONES[0]);
  const [readoutOpen, setReadoutOpen] = useState(false);

  const openReadout = (zone: ArmorZone) => {
    setActiveArmor(zone);
    setReadoutOpen(true);
  };

  const isActive = (zone: ArmorZone) => readoutOpen && activeArmor.id === zone.id;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReadoutOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const readoutStyle = {
    "--zone-color": activeArmor.color,
    "--readout-x": activeArmor.x,
    "--readout-y": activeArmor.y,
  } as CSSProperties;

  return (
    <section className="armor section" id="armor">
      <div className="section-heading">
        <div>
          <div className="section-index">03 // ARMOR MODELING</div>
          <h2>EVERY ANGLE<br /><span>IS A DECISION.</span></h2>
        </div>
        <p>Hover, focus, or tap a highlighted armor color to inspect the projected shell result.</p>
      </div>

      <div className="armor-console" onMouseLeave={() => setReadoutOpen(false)}>
        <div className="armor-stage">
          <div className="armor-model-zoom">
            <img
              src="/armor-model.png"
              alt="Tricera tank with color-coded armor model"
              width="1223"
              height="719"
              decoding="async"
            />
            {ARMOR_ZONES.map((zone) => (
              <button
                key={zone.id}
                type="button"
                className={`armor-zone ${zone.position} ${isActive(zone) ? "is-active" : ""}`}
                style={{ "--zone-color": zone.color } as CSSProperties}
                onMouseEnter={() => openReadout(zone)}
                onFocus={() => openReadout(zone)}
                onClick={() => openReadout(zone)}
                aria-label={`Inspect ${zone.label}`}
                aria-controls="armor-readout"
                aria-expanded={isActive(zone)}
              >
                <span />
              </button>
            ))}
          </div>

          <div className="armor-vignette" />
          <div
            className={`armor-readout ${readoutOpen ? "is-open" : ""}`}
            id="armor-readout"
            style={readoutStyle}
            aria-live="polite"
            aria-hidden={!readoutOpen}
          >
            <button
              className="readout-close"
              type="button"
              onClick={() => setReadoutOpen(false)}
              aria-label="Close armor readout"
            >
              ×
            </button>
            <div className="readout-route">KESTREL <span>→</span> TRICERA</div>
            <h3>{activeArmor.result}</h3>
            <div className="dot-rule" />
            <strong>{activeArmor.value}</strong>
            <small>{activeArmor.detail}</small>
          </div>
        </div>

        <div className="armor-legend">
          {ARMOR_ZONES.map((zone) => (
            <button
              type="button"
              key={zone.id}
              className={isActive(zone) ? "active" : ""}
              onMouseEnter={() => openReadout(zone)}
              onFocus={() => openReadout(zone)}
              onClick={() => openReadout(zone)}
              aria-controls="armor-readout"
              aria-expanded={isActive(zone)}
            >
              <i style={{ backgroundColor: zone.color }} />
              <span>{zone.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
