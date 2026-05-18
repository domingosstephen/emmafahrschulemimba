"use client";

import ScrollReveal from "./ScrollReveal";

const footerLinks = {
  leistungen: [
    { label: "Führerschein ohne Prüfung", href: "/leistungen" },
    { label: "Führerschein Wiederherstellung", href: "/leistungen" },
    { label: "Express-Service", href: "/leistungen" },
  ],
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "So funktioniert's", href: "/ablauf" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { label: "Datenschutz", href: "#" },
    { label: "Cookie-Richtlinie", href: "#" },
    { label: "AGB", href: "#" },
    { label: "Impressum", href: "#" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top CTA band */}
        <ScrollReveal>
          <div className="relative bg-gradient-to-r from-amber-500 to-amber-400 rounded-3xl p-8 md:p-12 mb-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-20 w-32 h-32 bg-white/10 rounded-full translate-y-1/2" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-950">
                  Bereit für deinen Führerschein?
                </h3>
                <p className="text-navy-800 mt-2 text-lg">
                  Kostenlose Beratung. Unverbindlich. Jetzt starten.
                </p>
              </div>
              <a
                href="/kontakt"
                className="px-8 py-4 bg-navy-950 text-white font-bold rounded-full hover:bg-navy-900 transition-all duration-300 whitespace-nowrap hover:shadow-xl"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block group">
              <span className="text-2xl font-bold text-white">
                Fahr<span className="gradient-text">Schule</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-navy-400">
                Direkt
              </span>
            </a>
            <p className="mt-4 text-navy-400 leading-relaxed max-w-sm">
              Dein Partner für Führerschein ohne Prüfung und
              Führerschein-Wiederherstellung. Diskret und professionell in ganz
              Deutschland.
            </p>

            {/* Social placeholder */}
            <div className="flex gap-4 mt-6">
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-navy-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold uppercase text-sm tracking-wider mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-navy-400 hover:text-amber-500 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-500 text-sm">
              &copy; {currentYear} FahrSchule Direkt. Alle Rechte vorbehalten.
            </p>
            <p className="text-navy-600 text-xs">
              Langemarckstraße 189, 28199 Bremen, Deutschland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
