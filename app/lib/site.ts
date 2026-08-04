export const STEAM_URL = "https://store.steampowered.com/app/2445260/Tyr/";

export type NavigationKey = "overview" | "tanks" | "developers";

export const NAVIGATION = [
  { id: "overview", label: "Overview", href: "/#overview" },
  { id: "tanks", label: "Tanks", href: "/tanks" },
  { id: "developers", label: "Developers", href: "/developers" },
] as const satisfies ReadonlyArray<{ id: NavigationKey; label: string; href: string }>;
