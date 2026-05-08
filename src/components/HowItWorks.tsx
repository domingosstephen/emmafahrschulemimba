"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Kontaktiere uns",
    description:
      "Ruf an, schreib uns auf WhatsApp oder fülle das Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Kostenlose Beratung",
    description:
      "Wir analysieren deine Situation kostenlos und zeigen dir die besten Optionen — transparent und unverbindlich.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Wir kümmern uns",
    description:
      "Wir übernehmen den gesamten Prozess für dich. Du lehnst dich zurück — wir erledigen den Rest.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.17M4.5 12a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Führerschein erhalten",
    description:
      "Du bekommst deinen Führerschein — schnell, sicher und ohne Prüfung. So einfach ist das.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="ablauf"
      className="relative py-32 bg-navy-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="text-amber-500 text-sm uppercase tracking-[0.2em] font-medium">
              Der Ablauf
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white">
              So{" "}
              <span className="gradient-text">funktioniert&apos;s</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-navy-300 text-lg max-w-2xl mx-auto">
              Vier einfache Schritte zu deinem Führerschein.
            </p>
          </ScrollReveal>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy-800 hidden lg:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-amber-500 to-amber-500/20 origin-top"
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.step}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 mb-4 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse"
                          : ""
                      }`}
                    >
                      <span className="text-amber-500/30 text-6xl font-bold">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-navy-300 text-lg leading-relaxed max-w-md inline-block">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-20 h-20 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center text-amber-500 shadow-xl shadow-navy-950/50 group-hover:border-amber-500/50 transition-colors">
                      {step.icon}
                    </div>
                    <div className="absolute -inset-3 rounded-3xl border border-amber-500/10" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
