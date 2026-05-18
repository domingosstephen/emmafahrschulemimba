import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Kontakt | Fahrschule Volante",
  description:
    "Kontaktiere uns für eine kostenlose Beratung. Per Formular oder WhatsApp — wir sind für dich da.",
};

export default function KontaktPage() {
  return (
    <main>
      <PageHeader
        badge="Kontakt"
        title="Lass uns über deinen"
        highlight="Führerschein reden."
        description="Fülle das Formular aus oder kontaktiere uns auf WhatsApp. Kostenlos und unverbindlich."
      />
      <ContactForm />
    </main>
  );
}
