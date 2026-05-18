import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "So funktioniert's | Fahrschule Volante",
  description:
    "Vier einfache Schritte zu deinem Führerschein. Erfahre, wie unser Prozess funktioniert.",
};

export default function AblaufPage() {
  return (
    <main>
      <PageHeader
        badge="Der Ablauf"
        title="Vier Schritte zu deinem"
        highlight="Führerschein."
        description="Von der ersten Kontaktaufnahme bis zum Führerschein in der Hand — so einfach ist es."
      />
      <HowItWorks />
    </main>
  );
}
