"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "+491632915446";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="kontakt" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-navy-500/[0.03] rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - Info */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <span className="text-amber-600 text-sm uppercase tracking-[0.2em] font-medium">
                Kontakt
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-navy-950 leading-tight">
                Lass uns über deinen
                <span className="gradient-text block">Führerschein reden.</span>
              </h2>
              <p className="mt-6 text-navy-600 text-lg leading-relaxed">
                Fülle das Formular aus oder kontaktiere uns direkt auf WhatsApp.
                Die erste Beratung ist immer kostenlos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-12 space-y-6">
                {/* WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-950">
                      Schreib uns auf WhatsApp
                    </div>
                    <div className="text-navy-500 text-sm">
                      Schnelle Antwort garantiert
                    </div>
                  </div>
                </a>

                {/* Contact info */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4 text-navy-600">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>scewobro@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-navy-600">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+49 163 291 5446</span>
                  </div>
                  <div className="flex items-center gap-4 text-navy-600">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>Musterstraße 123, 10115 Berlin</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column - Form */}
          <ScrollReveal className="lg:col-span-7" delay={0.3}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-navy-950/5 border border-navy-100/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950 mb-2">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-navy-500">
                    Wir melden uns innerhalb von 24 Stunden. Danke!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Vor- und Nachname *
                      </label>
                      <input
                        {...register("name", { required: "Pflichtfeld" })}
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? "border-red-400" : "border-navy-200"
                        } bg-navy-50/50 text-navy-950 placeholder:text-navy-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="Max Mustermann"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        {...register("email", {
                          required: "Pflichtfeld",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ungültige E-Mail",
                          },
                        })}
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? "border-red-400" : "border-navy-200"
                        } bg-navy-50/50 text-navy-950 placeholder:text-navy-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="max@email.de"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        {...register("phone", { required: "Pflichtfeld" })}
                        type="tel"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? "border-red-400" : "border-navy-200"
                        } bg-navy-50/50 text-navy-950 placeholder:text-navy-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all`}
                        placeholder="+49 163 291 5446"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Leistung *
                      </label>
                      <select
                        {...register("service", { required: "Bitte wählen" })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.service ? "border-red-400" : "border-navy-200"
                        } bg-navy-50/50 text-navy-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-auto cursor-pointer relative z-10`}
                      >
                        <option value="">Leistung wählen...</option>
                        <option value="ohne-pruefung">Führerschein ohne Prüfung</option>
                        <option value="wiederherstellung">Führerschein Wiederherstellung</option>
                        <option value="express">Express-Service</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Nachricht
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50/50 text-navy-950 placeholder:text-navy-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                      placeholder="Beschreibe kurz dein Anliegen..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-navy-950 text-white font-semibold rounded-xl hover:bg-navy-900 transition-all duration-300 hover:shadow-lg hover:shadow-navy-950/20 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="absolute inset-0 flex items-center justify-center text-navy-950 font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
                    </span>
                  </button>

                  <p className="text-xs text-navy-400 text-center">
                    Mit dem Absenden akzeptierst du unsere{" "}
                    <a href="#" className="text-amber-600 hover:underline">
                      Datenschutzerklärung
                    </a>
                    . Deine Daten werden niemals an Dritte weitergegeben.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
