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
    <AnimatedSection id={siteContent.contact.id} className="relative py-16 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 hidden md:block">
          <Image src={siteContent.contact.ctaImages.desktop} alt="CTA financiero" fill className="object-cover object-center opacity-[0.18] saturate-[0.98]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src={siteContent.contact.ctaImages.mobile} alt="CTA financiero móvil" fill className="object-cover object-center opacity-[0.2] saturate-[0.98]" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,251,247,.7),rgba(242,248,238,.88)_22%,rgba(231,240,225,.96)_100%)]" />
      </div>

      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.15rem] p-5 sm:rounded-[2.6rem] sm:p-8 lg:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
          <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="Contacto" title={siteContent.contact.title} description={siteContent.contact.subtitle} />

              <div className="mt-7 rounded-[1.7rem] border border-[#0f4e2f]/8 bg-[linear-gradient(180deg,rgba(16,58,35,.92),rgba(14,45,29,.88))] p-5 text-white shadow-[0_28px_68px_rgba(9,27,18,0.18)] sm:p-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Atención directa</div>
                <p className="crece-display mt-3 max-w-[26rem] text-balance text-[1.45rem] leading-[1.04] font-semibold tracking-[-0.05em] sm:text-[1.9rem]">
                  Una conversación clara para entender qué necesita hoy tu empresa.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero más información sobre consultoría financiera en CRECE.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Hablar por WhatsApp
                  </a>
                  <a
                    href={`https://${siteContent.contact.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="crece-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white"
                  >
                    <Globe className="h-4 w-4 text-[#2b7a47]" />
                    Ver web principal
                  </a>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:mt-9">
                <InfoCard icon={<UserRound className="h-5 w-5 text-[#d68b1f]" />} label="Atención" value={siteContent.contact.contactPerson} secondary={siteContent.contact.role} />
                <InfoCard icon={<Mail className="h-5 w-5 text-[#2b7a47]" />} label="Correo" value={siteContent.contact.email} href={`mailto:${siteContent.contact.email}`} />
                <InfoCard icon={<Phone className="h-5 w-5 text-[#d68b1f]" />} label="Teléfono" value={siteContent.contact.phone} href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`} />
                <InfoCard icon={<Globe className="h-5 w-5 text-[#2b7a47]" />} label="Web" value={siteContent.contact.website} href={`https://${siteContent.contact.website}`} />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function InfoCard({ icon, label, value, href, secondary }: { icon: ReactNode; label: string; value: string; href?: string; secondary?: string }) {
  const content = (
    <>
      <div className="rounded-[1.15rem] border border-[#0f4e2f]/8 bg-white/92 p-3.5 shadow-[0_12px_30px_rgba(18,52,34,0.06)]">{icon}</div>
      <div>
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6d7d70]">{label}</div>
        <div className="mt-1 text-sm font-medium text-[#173225] sm:text-[1.02rem]">{value}</div>
        {secondary ? <div className="mt-1 text-sm text-[#5e7063]">{secondary}</div> : null}
      </div>
    </>
  );

  if (!href) {
    return <div className="crece-panel-soft flex items-center gap-4 rounded-[1.55rem] px-4 py-4 sm:rounded-[1.75rem] sm:px-5 sm:py-5 text-left">{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="crece-panel-soft flex items-center gap-4 rounded-[1.55rem] px-4 py-4 sm:rounded-[1.75rem] sm:px-5 sm:py-5 text-left transition-colors duration-300 hover:bg-white"
    >
      {content}
      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#b57113]" />
    </a>
  );
}
