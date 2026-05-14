"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "Führerschein ohne Prüfung",
    description:
      "Erhalte deinen Führerschein ohne die Fahrprüfung ablegen zu müssen. Wir kümmern uns um den gesamten Prozess — schnell, sicher und diskret.",
    features: [
      "Keine Fahrprüfung nötig",
      "Offiziell registriert",
      "Schnelle Bearbeitung",
      "Vollständig diskret",
    ],
    accent: "from-emerald-500 to-emerald-400",
    iconPath:
      "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z",
  },
  {
    number: "02",
    title: "Führerschein Wiederherstellung",
    description:
      "Führerschein gesperrt oder entzogen? Wir helfen dir, deinen Führerschein schnell und unkompliziert zurückzubekommen — ohne Stress und Bürokratie.",
    features: [
      "Analyse deiner Situation",
      "Komplette Abwicklung",
      "Rechtliche Unterstützung",
      "Schnelle Wiederherstellung",
    ],
    accent: "from-teal-500 to-teal-400",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    number: "03",
    title: "Express-Service",
    description:
      "Dringend einen Führerschein benötigt? Unser Express-Service garantiert die schnellstmögliche Bearbeitung deines Anliegens.",
    features: [
      "Priorisierte Bearbeitung",
      "Persönlicher Ansprechpartner",
      "Regelmäßige Updates",
      "Garantierte Fristen",
    ],
    accent: "from-cyan-600 to-cyan-500",
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/[0.02] to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <ScrollReveal className="md:col-span-4">
            <span className="text-amber-600 text-sm uppercase tracking-[0.2em] font-medium">
              Unsere Leistungen
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-navy-950">
              Dein Weg zum
              <span className="gradient-text block">Führerschein.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-4 md:col-start-9 flex items-end" delay={0.2}>
            <p className="text-navy-600 text-lg leading-relaxed">
              Ob neuer Führerschein oder Wiederherstellung — diskret,
              professionell und ergebnisorientiert.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-3xl overflow-hidden card-lift border border-navy-100/50"
    >
      <div className="grid md:grid-cols-12 gap-0">
        <div className={`md:col-span-1 bg-gradient-to-b ${service.accent} p-6 flex items-center justify-center`}>
          <span className="text-white/90 text-5xl font-bold md:-rotate-90 whitespace-nowrap">
            {service.number}
          </span>
        </div>

        <div className="md:col-span-7 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-4">
            <svg
              className="w-8 h-8 text-navy-950 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
            </svg>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-950 group-hover:text-amber-600 transition-colors duration-300">
              {service.title}
            </h3>
          </div>
          <p className="text-navy-600 text-lg leading-relaxed ml-12">
            {service.description}
          </p>
        </div>

        <div className="md:col-span-4 bg-navy-50/50 p-8 md:p-12 flex items-center">
          <ul className="space-y-3 w-full">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-navy-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold hover:gap-3 transition-all duration-300"
              >
                Jetzt anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
