"use client";

import ScrollReveal from "./ScrollReveal";

const values = [
  {
    title: "Diskretion",
    description:
      "Absolute Vertraulichkeit. Deine Daten und dein Anliegen bleiben bei uns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Professionalität",
    description:
      "Erfahrene Experten, die jeden Fall individuell und kompetent betreuen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Ergebnisse",
    description:
      "Wir arbeiten ergebnisorientiert — dein Führerschein ist unser Ziel.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Abstract visual placeholder */}
              <div className="aspect-square rounded-3xl bg-navy-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-tl-[100px]" />

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(212, 168, 83, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 168, 83, 0.5) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold gradient-text">10+</div>
                    <div className="text-navy-300 text-lg mt-2 uppercase tracking-widest">
                      Jahre Erfahrung
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-amber-500 text-navy-950 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  Seit 2014
                </div>
              </div>

              {/* Offset card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-navy-100/50 max-w-xs">
                <p className="text-sm font-medium text-navy-950">
                  Dein Führerschein — schnell, sicher und ohne Prüfung
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <span className="text-amber-600 text-sm uppercase tracking-[0.2em] font-medium">
                Über uns
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-navy-950 leading-tight">
                Dein Führerschein ist unsere{" "}
                <span className="gradient-text">Mission.</span>
              </h2>
              <p className="mt-6 text-navy-600 text-lg leading-relaxed">
                FahrSchule Direkt ist dein Partner, wenn es um den Führerschein
                geht — egal ob du einen neuen brauchst oder deinen gesperrten
                zurückholen willst. Diskret, professionell und auf dein Ergebnis
                fokussiert.
              </p>
            </ScrollReveal>

            {/* Values */}
            <div className="mt-12 space-y-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={0.1 + index * 0.1}>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-navy-950 transition-all duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-950 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-navy-500 mt-1">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
