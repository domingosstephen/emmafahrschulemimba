"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Thomas K.",
    location: "Berlin",
    service: "Führerschein ohne Prüfung",
    text: "Ich hatte nie die Zeit für die Fahrprüfung. Fahrschule Volante hat alles für mich geregelt — schnell, diskret und professionell. Absolut empfehlenswert.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "München",
    service: "Führerschein Wiederherstellung",
    text: "Nach dem Entzug meines Führerscheins dachte ich, es wäre unmöglich. Das Team hat mir geholfen, ihn in kürzester Zeit zurückzubekommen. Großartig!",
    rating: 5,
  },
  {
    name: "Michael B.",
    location: "Hamburg",
    service: "Express-Service",
    text: "Brauchte meinen Führerschein dringend für die Arbeit. Der Express-Service hat alles möglich gemacht. Innerhalb weniger Tage war alles erledigt.",
    rating: 5,
  },
  {
    name: "Lisa W.",
    location: "Frankfurt",
    service: "Führerschein ohne Prüfung",
    text: "Einfacher Prozess, klare Kommunikation, schnelles Ergebnis. Genau das, was ich gebraucht habe. Danke an das gesamte Team!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="absolute top-20 left-10 text-[20rem] font-serif text-navy-900/30 leading-none select-none hidden lg:block">
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase tracking-[0.2em] font-medium">
              Kundenstimmen
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
              Das sagen unsere{" "}
              <span className="gradient-text">Kunden</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-navy-900/50 backdrop-blur-sm border border-navy-800 rounded-3xl p-8 md:p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-8">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-navy-950 font-bold text-lg">
                      {testimonials[activeIndex].name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-navy-400 text-sm">
                        {testimonials[activeIndex].location} &middot;{" "}
                        {testimonials[activeIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-amber-500/10 border border-amber-500/30"
                      : "bg-transparent border border-transparent hover:border-navy-700"
                  }`}
                >
                  <div
                    className={`font-medium transition-colors ${
                      i === activeIndex ? "text-amber-500" : "text-navy-400"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div className="text-navy-500 text-sm">{t.service}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
