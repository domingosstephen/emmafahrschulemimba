import type { Metadata } from "next";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Über uns | FahrSchule Direkt",
  description:
    "Erfahre mehr über FahrSchule Direkt — dein Partner für Führerschein ohne Prüfung und Wiederherstellung in ganz Deutschland.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <PageHeader
        badge="Über uns"
        title="Dein Führerschein ist unsere"
        highlight="Mission."
        description="Professionell, diskret und ergebnisorientiert — das ist FahrSchule Direkt."
      />
      <About />
      <Testimonials />
    </main>
  );
}
