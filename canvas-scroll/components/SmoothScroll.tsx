"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1, // Smoothness (0-1, lower = smoother)
        duration: 1.2, // Duration of the scroll animation
        smoothWheel: true, // Enable smooth scrolling for mouse wheel
        wheelMultiplier: 1, // Wheel scroll speed multiplier
      }}
    >
      {children}
    </ReactLenis>
  );
}
