import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ScrollReveal from "@/components/ScrollReveal";

const servicePreview = [
  {
    title: "Führerschein ohne Prüfung",
    description:
      "Erhalte deinen Führerschein schnell und unkompliziert — ohne Fahrprüfung.",
    accent: "from-emerald-500 to-emerald-400",
    iconPath:
      "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z",
  },
  {
    title: "Führerschein Wiederherstellung",
    description:
      "Führerschein gesperrt oder entzogen? Wir holen ihn für dich zurück.",
    accent: "from-teal-500 to-teal-400",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Express-Service",
    description:
      "Dringend? Unser Express-Service garantiert schnellstmögliche Bearbeitung.",
    accent: "from-cyan-600 to-cyan-500",
    iconPath:
      "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Services Preview */}
      <section className="relative py-32 bg-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/[0.02] to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <ScrollReveal className="md:col-span-5">
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
                Ob neuer Führerschein oder Wiederherstellung — wir machen es
                möglich. Schnell, diskret und zuverlässig.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicePreview.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.15}>
                <a
                  href="/leistungen"
                  className="group block bg-white rounded-3xl overflow-hidden card-lift border border-navy-100/50 h-full"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.accent}`} />
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-navy-950 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      Mehr erfahren
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* CTA Section */}
      <section className="relative py-32 bg-navy-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Bereit für deinen
              <span className="gradient-text block">Führerschein?</span>
            </h2>
            <p className="mt-6 text-navy-300 text-lg max-w-2xl mx-auto">
              Die erste Beratung ist kostenlos und unverbindlich. Schildere uns
              deine Situation — wir finden die beste Lösung für dich.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/kontakt"
                className="group relative px-8 py-4 bg-amber-500 text-navy-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25"
              >
                <span className="relative z-10">Jetzt Kontakt aufnehmen</span>
                <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              <a
                href="/ablauf"
                className="px-8 py-4 border border-navy-600 text-white font-medium rounded-full hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                So funktioniert&apos;s
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
