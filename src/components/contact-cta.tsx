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
            className="object-cover object-center opacity-20 saturate-[0.94]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={siteContent.contact.ctaImages.mobile}
            alt="CTA financiero móvil"
            fill
            className="object-cover object-center opacity-24 saturate-[0.94]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,13,.08),rgba(7,16,13,.76)_20%,rgba(7,16,13,.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(167,203,76,.14),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(216,141,37,.16),transparent_22%)]" />
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
              icon={<Mail className="h-5 w-5 text-[#a7cb4c]" />}
              label="Correo"
              value={siteContent.contact.email}
              href={`mailto:${siteContent.contact.email}`}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5 text-[#f1b64d]" />}
              label="Teléfono"
              value={siteContent.contact.phone}
              href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}
            />
            <InfoCard
              icon={<Globe className="h-5 w-5 text-[#a7cb4c]" />}
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
      className="crece-panel-soft flex items-center gap-4 rounded-[1.6rem] px-5 py-5 text-left transition-colors duration-300 hover:bg-[#182921]/92"
    >
      <div className="rounded-2xl border border-white/8 bg-black/25 p-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-[#99a18f]">{label}</div>
        <div className="mt-1 text-sm font-medium text-[#f3efe3] sm:text-base">{value}</div>
      </div>
    </a>
  );
}
