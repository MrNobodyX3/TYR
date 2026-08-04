"use client";

import { useEffect, useRef } from "react";

export function AbilityVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: 0.2 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={src} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} />;
}
