import type { ReactNode } from "react";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

export function ContactCta() {
  return (
    <AnimatedSection id={siteContent.contact.id} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hidden md:block">
          <Image src={siteContent.contact.ctaImages.desktop} alt="CTA financiero" fill className="object-cover object-center opacity-10 saturate-[0.9]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src={siteContent.contact.ctaImages.mobile} alt="CTA financiero móvil" fill className="object-cover object-center opacity-12 saturate-[0.9]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,251,246,.72),rgba(247,251,243,.96)_22%,rgba(240,246,235,.98)_100%)]" />
      </div>

      <Container className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contacto" title={siteContent.contact.title} description={siteContent.contact.subtitle} />

          <div className="mt-8 grid gap-4">
            <InfoCard icon={<Mail className="h-5 w-5 text-[#2b7a47]" />} label="Correo" value={siteContent.contact.email} href={`mailto:${siteContent.contact.email}`} />
            <InfoCard icon={<Phone className="h-5 w-5 text-[#d68b1f]" />} label="Teléfono" value={siteContent.contact.phone} href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`} />
            <InfoCard icon={<Globe className="h-5 w-5 text-[#2b7a47]" />} label="Web" value={siteContent.contact.website} href={`https://${siteContent.contact.website}`} />
          </div>
        </div>

        <ContactForm />
      </Container>
    </AnimatedSection>
  );
}

function InfoCard({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="crece-panel-soft flex items-center gap-4 rounded-[1.6rem] px-5 py-5 text-left transition-colors duration-300 hover:bg-white">
      <div className="rounded-2xl border border-[#0f4e2f]/8 bg-white/90 p-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-[#6d7d70]">{label}</div>
        <div className="mt-1 text-sm font-medium text-[#173225] sm:text-base">{value}</div>
      </div>
    </a>
  );
}
