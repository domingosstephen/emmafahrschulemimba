import type { Metadata } from "next";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Leistungen | FahrSchule Direkt",
  description:
    "Führerschein ohne Prüfung, Wiederherstellung nach Sperre und Express-Service. Alle Leistungen im Überblick.",
};

export default function LeistungenPage() {
  return (
    <main>
      <PageHeader
        badge="Unsere Leistungen"
        title="Dein Führerschein,"
        highlight="unser Auftrag."
        description="Führerschein ohne Prüfung oder Wiederherstellung nach Sperre — diskret, professionell und ergebnisorientiert."
      />
      <Services />
    </main>
  );
}
