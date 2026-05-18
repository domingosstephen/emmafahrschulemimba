import type { Metadata } from "next";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Über uns | Fahrschule Volante",
  description:
    "Erfahre mehr über Fahrschule Volante — dein Partner für Führerschein ohne Prüfung und Wiederherstellung in ganz Deutschland.",
};

export default function UeberUnsPage() {
  return (
    <main>
      <PageHeader
        badge="Über uns"
        title="Dein Führerschein ist unsere"
        highlight="Mission."
        description="Professionell, diskret und ergebnisorientiert — das ist Fahrschule Volante."
      />
      <About />
      <Gallery />
      <Testimonials />
    </main>
  );
}
