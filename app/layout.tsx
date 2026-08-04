import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "TYR — Position. Angle. Strike.",
    description: "TYR is a tactical multiplayer tank shooter from Stoke Games. Wishlist now on Steam.",
    openGraph: {
      title: "TYR — Position. Angle. Strike.",
      description: "Pilot specialized armor. Master the sightline. Win the engagement.",
      type: "website",
      images: [{ url: imageUrl, width: 1733, height: 908, alt: "TYR — Position. Angle. Strike." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "TYR — Position. Angle. Strike.",
      description: "A tactical multiplayer tank shooter from Stoke Games.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
