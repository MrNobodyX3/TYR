import type { Metadata } from "next";
import "@fontsource-variable/big-shoulders/wght.css";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "TYR — Position. Angle. Strike.",
  description: "TYR is a tactical multiplayer tank shooter from Stoke Games. Wishlist now on Steam.",
  icons: {
    icon: [{ url: `${basePath}/fav.svg`, type: "image/svg+xml" }],
    shortcut: `${basePath}/fav.svg`,
    apple: `${basePath}/fav.svg`,
  },
  openGraph: {
    title: "TYR — Position. Angle. Strike.",
    description: "Pilot specialized armor. Master the sightline. Win the engagement.",
    type: "website",
    images: [{ url: `${basePath}/og.png`, width: 1733, height: 908, alt: "TYR — Position. Angle. Strike." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TYR — Position. Angle. Strike.",
    description: "A tactical multiplayer tank shooter from Stoke Games.",
    images: [`${basePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
