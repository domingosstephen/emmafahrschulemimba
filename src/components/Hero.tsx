"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Erhalte", "Sichere", "Erneuere"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-800/50 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left content */}
          <div className="md:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-500 text-xs uppercase tracking-widest font-medium">
                Zertifizierter Service
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-6"
            >
              <span className="block overflow-hidden h-[1.1em] relative">
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block gradient-text"
                >
                  {words[wordIndex]}
                </motion.span>
              </span>
              <span className="block">deinen</span>
              <span className="block">
                Führerschein
                <span className="gradient-text">.</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-navy-300 max-w-lg leading-relaxed mb-10"
            >
              Führerschein ohne Prüfung erhalten oder gesperrten Führerschein
              zurückbekommen. Diskret, schnell und zuverlässig.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/kontakt"
                className="group relative px-8 py-4 bg-amber-500 text-navy-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25"
              >
                <span className="relative z-10">Kostenlose Beratung</span>
                <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              <a
                href="/leistungen"
                className="px-8 py-4 border border-navy-600 text-white font-medium rounded-full hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                Unsere Leistungen
              </a>
            </motion.div>
          </div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 hidden md:block"
          >
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-8 border border-navy-800 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute -inset-16 border border-navy-800/50 rounded-full animate-[spin_90s_linear_infinite_reverse]" />

              <div className="relative bg-navy-900/50 backdrop-blur-xl border border-navy-800 rounded-3xl p-8 space-y-6">
                {[
                  { number: "100%", label: "Ohne Fahrprüfung", icon: "✓" },
                  { number: "Diskret", label: "Vertrauliche Abwicklung", icon: "🔒" },
                  { number: "Schnell", label: "Express-Bearbeitung", icon: "⚡" },
                  { number: "24h", label: "Antwort garantiert", icon: "💬" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-lg group-hover:bg-amber-500/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-sm text-navy-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
