import type { Metadata } from "next";
import "@fontsource-variable/big-shoulders/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "TYR — Position. Angle. Strike.",
  description: "TYR is a tactical multiplayer tank shooter from Stoke Games. Wishlist now on Steam.",
  icons: {
    icon: [{ url: "/fav.svg", type: "image/svg+xml" }],
    shortcut: "/fav.svg",
    apple: "/fav.svg",
  },
  openGraph: {
    title: "TYR — Position. Angle. Strike.",
    description: "Pilot specialized armor. Master the sightline. Win the engagement.",
    type: "website",
    images: [{ url: "/og.png", width: 1733, height: 908, alt: "TYR — Position. Angle. Strike." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TYR — Position. Angle. Strike.",
    description: "A tactical multiplayer tank shooter from Stoke Games.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
