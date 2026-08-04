import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tank Database — TYR",
  description: "Explore every TYR tank, its combat statistics, unique ability, and native progression components.",
};

export default function TanksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
