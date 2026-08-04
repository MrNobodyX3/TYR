export type TankClass = "Light" | "Medium" | "Heavy";

export type Tank = {
  name: string;
  slug: string;
  class: TankClass;
  drive: "Hover" | "Treaded";
  health: number;
  speed: number;
  reverse: number;
  damage: number;
  penetration: number;
  reload: number;
  detection: number;
  camo: number;
  difficulty: number;
  ability: string;
  abilityDescription: string;
  components: readonly [string, string, string];
  artPosition: string;
};

export const tanks: Tank[] = [
  { name: "Alecto", slug: "alecto", class: "Light", drive: "Hover", health: 1000, speed: 57, reverse: 25, damage: 110, penetration: 60, reload: 2.5, detection: 35, camo: 32, difficulty: 3, ability: "Blink", abilityDescription: "Teleport a short distance forward along the vehicle's facing direction.", components: ["Core Amp", "Power Converter", "Shell Charger"], artPosition: "1.6% 27.3%" },
  { name: "Fuse", slug: "fuse", class: "Light", drive: "Hover", health: 910, speed: 62, reverse: 35, damage: 225, penetration: 50, reload: 7, detection: 55, camo: 45, difficulty: 4, ability: "Glom Missile", abilityDescription: "Guide a missile onto a surface, then shoot it to detonate a chain of attached missiles.", components: ["Vuln Breaker", "Stable Rangefinder", "Energy Expander"], artPosition: "13.1% 44.6%" },
  { name: "Ikarus", slug: "ikarus", class: "Light", drive: "Hover", health: 890, speed: 52, reverse: 40, damage: 85, penetration: 50, reload: 7, detection: 25, camo: 42, difficulty: 5, ability: "VTOL", abilityDescription: "Transform into a jet, launch into the air, and glide until touching down.", components: ["Core Injector", "Shift Cloak", "Momentum Imparter"], artPosition: "13.1% 27.3%" },
  { name: "Kestrel", slug: "kestrel", class: "Light", drive: "Hover", health: 900, speed: 61, reverse: 25, damage: 160, penetration: 70, reload: 9, detection: 25, camo: 39, difficulty: 3, ability: "Drone", abilityDescription: "Deploy a drone that spots enemies inside its scan area for ten seconds.", components: ["Stable Rangefinder", "Calibration Agitator", "Friction Capacitor"], artPosition: "24.7% 27.3%" },
  { name: "Phantom", slug: "phantom", class: "Light", drive: "Hover", health: 825, speed: 65, reverse: 20, damage: 290, penetration: 70, reload: 12, detection: 35, camo: 37, difficulty: 4, ability: "Stealth", abilityDescription: "Enter stealth after a short windup, breaking contact for a limited duration.", components: ["Phase Gear", "Energy Expander", "Drift Sparker"], artPosition: "1.6% 44.6%" },
  { name: "Seeker", slug: "seeker", class: "Light", drive: "Hover", health: 850, speed: 75, reverse: 30, damage: 155, penetration: 70, reload: 4, detection: 55, camo: 34, difficulty: 4, ability: "Snitch", abilityDescription: "Launch a tracking droid that hunts and pings the nearest unspotted enemy within 400 meters.", components: ["Sense Overdrive", "Shift Cloak", "Shell Charger"], artPosition: "24.7% 44.6%" },
  { name: "Arbalest", slug: "arbalest", class: "Medium", drive: "Treaded", health: 1150, speed: 40, reverse: 32, damage: 400, penetration: 100, reload: 15, detection: 70, camo: 9, difficulty: 2, ability: "Siege", abilityDescription: "Anchor into siege mode for one shot with 30% more damage and penetration plus internal-module knockout.", components: ["Quick Slot", "Duplicator", "Sensitive Sights"], artPosition: "38.5% 27.3%" },
  { name: "Ark", slug: "ark", class: "Medium", drive: "Treaded", health: 1000, speed: 48, reverse: 15, damage: 282, penetration: 90, reload: 8, detection: 55, camo: 26, difficulty: 1, ability: "Bush", abilityDescription: "Grow dense cover at your location and immediately drop from enemy spotting.", components: ["Shell Stabilizer", "Camo Web", "Signature Obscurer"], artPosition: "50% 27.3%" },
  { name: "Deadeye", slug: "deadeye", class: "Medium", drive: "Treaded", health: 1200, speed: 45, reverse: 30, damage: 235, penetration: 80, reload: 15.3, detection: 55, camo: 25, difficulty: 3, ability: "Elevate", abilityDescription: "Detach and raise the turret for up to seventeen seconds or until the vehicle reloads.", components: ["Shell Stabilizer", "Camo Web", "Vuln Breaker"], artPosition: "61.6% 44.6%" },
  { name: "Ranger", slug: "ranger", class: "Medium", drive: "Treaded", health: 1375, speed: 46.5, reverse: 28, damage: 195, penetration: 70, reload: 5.8, detection: 55, camo: 23, difficulty: 2, ability: "Ramp", abilityDescription: "Construct a boosting ramp that launches any vehicle driving across it.", components: ["Sense Overdrive", "Micro Plating", "Quick Slot"], artPosition: "38.5% 62.1%" },
  { name: "Rook", slug: "rook", class: "Medium", drive: "Treaded", health: 1425, speed: 36, reverse: 18, damage: 210, penetration: 80, reload: 7, detection: 70, camo: 21, difficulty: 2, ability: "Wall", abilityDescription: "Build a low defensive wall at a target location; multiple walls can be stacked.", components: ["Weakness Analyzer", "Hot Chamber", "Propagation Drive"], artPosition: "61.6% 27.3%" },
  { name: "Tempest", slug: "tempest", class: "Medium", drive: "Treaded", health: 1275, speed: 44, reverse: 20, damage: 125, penetration: 60, reload: 20, detection: 70, camo: 21, difficulty: 5, ability: "Recall", abilityDescription: "Create paired recall zones and charge them to teleport between the battlefield and base.", components: ["Vuln Breaker", "Micro Plating", "Fabricator"], artPosition: "38.5% 44.6%" },
  { name: "Valor", slug: "valor", class: "Medium", drive: "Hover", health: 1200, speed: 46, reverse: 28, damage: 160, penetration: 60, reload: 4.8, detection: 100, camo: 24, difficulty: 1, ability: "Heal", abilityDescription: "Charge a restorative shell that repairs an ally while also healing Valor during the charge.", components: ["Synchronizer", "Catalytic Reservoir", "Core Booster"], artPosition: "50% 44.6%" },
  { name: "Atlas", slug: "atlas", class: "Heavy", drive: "Treaded", health: 2050, speed: 23, reverse: 10, damage: 360, penetration: 80, reload: 13, detection: 100, camo: 0, difficulty: 2, ability: "Sonar", abilityDescription: "Reveal the positions of unspotted enemies within vision range to the Atlas pilot.", components: ["Relentless Adapter", "Bulkheads", "Mobility Surger"], artPosition: "75.3% 27.3%" },
  { name: "Fortis", slug: "fortis", class: "Heavy", drive: "Treaded", health: 1600, speed: 35, reverse: 18, damage: 315, penetration: 80, reload: 11.5, detection: 90, camo: 7, difficulty: 2, ability: "Mines", abilityDescription: "Drop a row of mines that damage enemies and disable their tracks for an extended duration.", components: ["Energy Vent", "Sidescrape Gear", "Hull Bellows"], artPosition: "86.9% 27.3%" },
  { name: "Helio", slug: "helio", class: "Heavy", drive: "Treaded", health: 1750, speed: 33, reverse: 18, damage: 200, penetration: 80, reload: 7, detection: 90, camo: 5, difficulty: 4, ability: "Repulsor", abilityDescription: "Project an expanding field at a target location that pushes enemies away for fifteen seconds.", components: ["Kinetic Absorber", "Adaptive Hardening", "Sense Overdrive"], artPosition: "98.4% 27.3%" },
  { name: "Maul", slug: "maul", class: "Heavy", drive: "Treaded", health: 1500, speed: 40, reverse: 12, damage: 215, penetration: 70, reload: 8, detection: 90, camo: 6, difficulty: 1, ability: "Ram", abilityDescription: "Overcharge forward and devastate enemy vehicles caught in the collision.", components: ["Reactive Modules", "Advanced Repair Gear", "Extended Gearing"], artPosition: "75.3% 44.6%" },
  { name: "Tricera", slug: "tricera", class: "Heavy", drive: "Treaded", health: 1650, speed: 31, reverse: 17, damage: 283, penetration: 80, reload: 11, detection: 90, camo: 4, difficulty: 3, ability: "Smokescreen", abilityDescription: "Lay down a broad wall of smoke that blocks line-of-sight spotting.", components: ["Reactive Modules", "Shell Charger", "Hot Chamber"], artPosition: "86.9% 44.6%" },
];
