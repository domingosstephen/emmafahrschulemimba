"use client";

import { useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 100, suffix: "%", label: "Ohne Prüfung" },
  { value: 48, suffix: "h", label: "Express-Bearbeitung" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 100, suffix: "%", label: "Diskret & Vertraulich" },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Marquee text */}
        <div className="overflow-hidden mb-20 -mx-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-8xl md:text-[10rem] font-bold text-navy-950/[0.03] mx-8 select-none"
              >
                FAHRSCHULE VOLANTE
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 mb-2 group-hover:text-amber-600 transition-colors duration-500">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="divider-gold w-12 mx-auto mb-3" />
                <div className="text-navy-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
