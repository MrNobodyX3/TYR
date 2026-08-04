"use client";

import { useState } from "react";
import { tanks, type Tank, type TankClass } from "./tank-data";

type Filter = "All" | TankClass;

const FILTER_OPTIONS: readonly Filter[] = ["All", "Light", "Medium", "Heavy"];
const COMPONENT_LEVELS = [3, 6, 10] as const;

function TankCard({ tank, selected, onSelect }: { tank: Tank; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      className={`tank-select-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span className="tank-thumb" style={{ backgroundPosition: tank.artPosition }} aria-hidden="true" />
      <span className="tank-card-meta">
        <small>{tank.class}{" // "}{tank.drive}</small>
        <strong>{tank.name}</strong>
        <em>{tank.ability}</em>
      </span>
    </button>
  );
}

function TankDetail({ tank }: { tank: Tank }) {
  return (
    <aside className="tank-detail" aria-live="polite" aria-atomic="true">
      <div className="tank-detail-topline">
        <span>{tank.class}</span>
        <span>{tank.drive}</span>
        <span>DIFFICULTY {tank.difficulty}/5</span>
      </div>
      <div
        className="tank-detail-thumb"
        style={{ backgroundPosition: tank.artPosition }}
        role="img"
        aria-label={`${tank.name} tank`}
      />
      <div className="tank-detail-title">
        <small>SELECTED CHASSIS</small>
        <h2>{tank.name}</h2>
      </div>
      <div className="tank-ability">
        <small>UNIQUE ABILITY</small>
        <h3>{tank.ability}</h3>
        <p>{tank.abilityDescription}</p>
      </div>
      <div className="tank-stat-grid">
        <div><span>Health</span><strong>{tank.health}</strong></div>
        <div><span>Max speed</span><strong>{tank.speed} <small>KPH</small></strong></div>
        <div><span>Reverse</span><strong>{tank.reverse} <small>KPH</small></strong></div>
        <div><span>Damage</span><strong>{tank.damage}</strong></div>
        <div><span>Penetration</span><strong>{tank.penetration} <small>MM</small></strong></div>
        <div><span>Reload</span><strong>{tank.reload} <small>SEC</small></strong></div>
        <div><span>Vision</span><strong>400 <small>M</small></strong></div>
        <div><span>Detection</span><strong>{tank.detection} <small>M</small></strong></div>
        <div><span>Camouflage</span><strong>{tank.camo}<small>%</small></strong></div>
      </div>
      <div className="tank-components">
        <small>NATIVE COMPONENTS</small>
        {tank.components.map((component, index) => (
          <div key={component}>
            <span>LV {COMPONENT_LEVELS[index]}</span>
            <strong>{component}</strong>
          </div>
        ))}
      </div>
      <p className="tank-data-note">Playtest values are subject to balance changes.</p>
    </aside>
  );
}

export function TankBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedName, setSelectedName] = useState("Kestrel");

  const selectedTank = tanks.find((tank) => tank.name === selectedName) ?? tanks[0];
  const filteredTanks = filter === "All" ? tanks : tanks.filter((tank) => tank.class === filter);

  const selectFilter = (nextFilter: Filter) => {
    setFilter(nextFilter);

    if (nextFilter !== "All" && selectedTank.class !== nextFilter) {
      const firstMatch = tanks.find((tank) => tank.class === nextFilter);
      if (firstMatch) setSelectedName(firstMatch.name);
    }
  };

  const filterLabel = filter === "All" ? "vehicles" : `${filter.toLowerCase()} vehicles`;

  return (
    <section className="tank-browser section" id="tank-roster">
      <div className="tank-browser-heading">
        <div>
          <div className="section-index">04 // VEHICLE SELECT</div>
          <h2>18 TANKS.<br /><span>ONE ROSTER.</span></h2>
        </div>
        <div className="tank-filter-controls">
          <div className="tank-filters" aria-label="Filter tanks by class">
            {FILTER_OPTIONS.map((option) => (
              <button
                type="button"
                key={option}
                className={filter === option ? "active" : ""}
                onClick={() => selectFilter(option)}
                aria-pressed={filter === option}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="tank-filter-status" aria-live="polite">
            {filteredTanks.length} {filterLabel} online
          </p>
        </div>
      </div>

      <div className="tank-browser-layout">
        <div className="tank-card-grid" aria-label={`${filter} tanks`}>
          {filteredTanks.map((tank) => (
            <TankCard
              key={tank.name}
              tank={tank}
              selected={selectedTank.name === tank.name}
              onSelect={() => setSelectedName(tank.name)}
            />
          ))}
        </div>
        <TankDetail tank={selectedTank} />
      </div>
    </section>
  );
}
