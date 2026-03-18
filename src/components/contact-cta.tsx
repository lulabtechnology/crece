import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

export function ContactCta() {
  return (
    <AnimatedSection id={siteContent.contact.id} className="relative py-14 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hidden md:block">
          <Image src={siteContent.contact.ctaImages.desktop} alt="CTA financiero" fill className="object-cover object-center opacity-[0.12] saturate-[0.94]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src={siteContent.contact.ctaImages.mobile} alt="CTA financiero móvil" fill className="object-cover object-center opacity-[0.14] saturate-[0.94]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,251,246,.7),rgba(247,251,243,.94)_22%,rgba(240,246,235,.98)_100%)]" />
      </div>

      <Container className="grid items-start gap-7 sm:gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contacto" title={siteContent.contact.title} description={siteContent.contact.subtitle} />

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero más información sobre consultoría financiera en CRECE.")}`}
              target="_blank"
              rel="noreferrer"
              className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
            <a
              href={`https://${siteContent.contact.website}`}
              target="_blank"
              rel="noreferrer"
              className="crece-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-colors duration-300 hover:bg-white"
            >
              <Globe className="h-4 w-4 text-[#2b7a47]" />
              Ver web principal
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8">
            <InfoCard icon={<UserRound className="h-5 w-5 text-[#d68b1f]" />} label="Atención" value={siteContent.contact.contactPerson} secondary={siteContent.contact.role} />
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

function InfoCard({ icon, label, value, href, secondary }: { icon: ReactNode; label: string; value: string; href?: string; secondary?: string }) {
  const content = (
    <>
      <div className="rounded-[1.1rem] border border-[#0f4e2f]/8 bg-white/90 p-3 shadow-[0_10px_24px_rgba(18,52,34,0.05)]">{icon}</div>
      <div>
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d7d70]">{label}</div>
        <div className="mt-1 text-sm font-medium text-[#173225] sm:text-base">{value}</div>
        {secondary ? <div className="mt-1 text-sm text-[#5e7063]">{secondary}</div> : null}
      </div>
    </>
  );

  if (!href) {
    return <div className="crece-panel-soft flex items-center gap-4 rounded-[1.45rem] px-4 py-4 sm:rounded-[1.65rem] sm:px-5 sm:py-5 text-left">{content}</div>;
  }

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="crece-panel-soft flex items-center gap-4 rounded-[1.45rem] px-4 py-4 sm:rounded-[1.65rem] sm:px-5 sm:py-5 text-left transition-colors duration-300 hover:bg-white">
      {content}
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#b57113]" />
    </a>
  );
}
