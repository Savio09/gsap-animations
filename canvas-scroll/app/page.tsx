"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".hero h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Image animations on scroll
      gsap.utils.toArray<HTMLElement>(".img").forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Card animations on scroll
      gsap.utils.toArray<HTMLElement>(".card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // SVG path animation
      const path = document.querySelector(".svg-path path");
      if (path) {
        const pathLength = (path as SVGPathElement).getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(path, {
          scrollTrigger: {
            trigger: ".svg-path",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          strokeDashoffset: 0,
          ease: "none",
        });
      }

      // Outro animation
      gsap.from(".outro h1", {
        scrollTrigger: {
          trigger: ".outro",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef}>
      <section className="hero">
        <h1>Designed to keep information clear and connected</h1>
      </section>
      <section className="spotlight">
        <div className="row">
          <div className="img">
            <img src="./img1.jpg" alt="A random image" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <h2>A cleaner way to handle incoming updates</h2>
              <p>
                Instead of showing every message or notufication instantly, the
                app groups related items and presents them in an organied panel.
                It keeps your workspace calm, even when activity spikes
              </p>
            </div>
          </div>
          <div className="col">
            <div className="img">
              <img src="./img-2.jpg" alt="Another random image" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="img">
              <img src="./img-3.jpg" alt="Just another random image" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Built for increasing information demand.</h2>
              <p>
                Whether it is files, notes, or incoming messages, the app sorts
                and priorotises items automatically. It prevents clutter and
                helps maintain clarity during busy periods.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="img">
            <img src="./img1.jpg" alt="A random image" />
          </div>
        </div>
        <div className="svg-path">
          <svg
            width="1284"
            height="2616"
            viewBox="0 0 1284 2616"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624.546 46.4264C624.546 46.4264 240.115 2.56225 146.083 401.327C52.0503 800.091 690.924 939.659 690.924 939.659C690.924 939.659 2026.74 1394.25 524.984 1438.11C-976.771 1481.98 1570.4 2775.97 1075.35 2068.16C580.298 1360.36 253.949 2604.5 253.949 2604.5"
              stroke="#FF5FDA"
              strokeWidth="90"
            />
          </svg>
        </div>
      </section>
      <section className="outro">
        <h1>Clearer organization ready for whatever comes next</h1>
      </section>
    </div>
  );
}
