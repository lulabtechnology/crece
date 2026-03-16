import type { ReactNode } from "react";
import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
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
          <Image
            src={siteContent.contact.ctaImages.desktop}
            alt="CTA financiero"
            fill
            className="object-cover object-center opacity-22"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={siteContent.contact.ctaImages.mobile}
            alt="CTA financiero móvil"
            fill
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,.08),rgba(3,7,18,.8)_25%,rgba(3,7,18,.98)_100%)]" />
      </div>

      <Container className="grid items-start gap-10 lg:grid-cols-[.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title={siteContent.contact.title}
            description={siteContent.contact.subtitle}
          />

          <div className="mt-8 grid gap-4">
            <InfoCard
              icon={<Mail className="h-5 w-5 text-cyan-300" />}
              label="Correo"
              value={siteContent.contact.email}
              href={`mailto:${siteContent.contact.email}`}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5 text-cyan-300" />}
              label="Teléfono"
              value={siteContent.contact.phone}
              href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}
            />
            <InfoCard
              icon={<Globe className="h-5 w-5 text-cyan-300" />}
              label="Web"
              value={siteContent.contact.website}
              href={`https://${siteContent.contact.website}`}
            />
          </div>
        </div>

        <ContactForm />
      </Container>
    </AnimatedSection>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-5 text-left transition-colors duration-300 hover:bg-white/10"
    >
      <div className="rounded-2xl border border-white/10 bg-black/25 p-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
        <div className="mt-1 text-sm font-medium text-white sm:text-base">{value}</div>
      </div>
    </a>
  );
}
