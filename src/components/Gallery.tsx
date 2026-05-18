"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  { src: "/images/success-1.jpg", alt: "Erfolgreicher Fahrschüler mit Zertifikat" },
  { src: "/images/fuehrerschein-2.jpg", alt: "Führerschein Dokumente" },
  { src: "/images/success-3.jpg", alt: "Fahrschülerin mit bestandener Prüfung" },
  { src: "/images/lesson.jpg", alt: "Fahrstunde in Aktion" },
  { src: "/images/success-4.jpg", alt: "Zufriedene Kundin mit Führerschein" },
  { src: "/images/success-5.jpg", alt: "Kundin zeigt ihren neuen Führerschein" },
  { src: "/images/fuehrerschein-3.jpg", alt: "Deutsche Führerschein Dokumente" },
  { src: "/images/fuehrerschein-7.jpg", alt: "Führerschein im Auto" },
];

export default function Gallery() {
  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm uppercase tracking-[0.2em] font-medium">
              Unsere Erfolge
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-navy-950">
              Zufriedene{" "}
              <span className="gradient-text">Kunden</span>
            </h2>
            <p className="mt-6 text-navy-600 text-lg max-w-2xl mx-auto">
              Hunderte zufriedene Kunden vertrauen uns bereits. Hier sind einige Eindrücke.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.src} delay={index * 0.08}>
              <div className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
