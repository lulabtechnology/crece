import Image from "next/image";
import { CalendarDays, Clock3, GraduationCap, MapPin, BadgeCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const info = [
  { label: "Fecha", value: siteContent.seminarPromo.date, icon: CalendarDays },
  { label: "Horario", value: siteContent.seminarPromo.schedule, icon: Clock3 },
  { label: "Modalidad", value: siteContent.seminarPromo.format, icon: MapPin },
  { label: "Inversión", value: siteContent.seminarPromo.investment, icon: GraduationCap }
];

export function SeminarPromo() {
  return (
    <AnimatedSection id={siteContent.seminarPromo.id} className="relative py-20 sm:py-28">
      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.2rem] border border-[#f1b64d]/10 p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0">
            <Image
              src={siteContent.seminarPromo.image}
              alt="Seminario de análisis financiero con IA"
              fill
              className="object-cover object-center opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,13,.96)_0%,rgba(7,16,13,.84)_48%,rgba(7,16,13,.90)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(167,203,76,.14),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(216,141,37,.22),transparent_24%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.92fr] lg:items-center">
            <div>
              <span className="crece-outline-tag--warm inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
                {siteContent.seminarPromo.badge}
              </span>
              <SectionHeading
                eyebrow="Capacitación"
                title={siteContent.seminarPromo.title}
                description={siteContent.seminarPromo.description}
              />

              <ul className="mt-7 grid gap-3">
                {siteContent.seminarPromo.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#d8ddcf] sm:text-base">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-[#a7cb4c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteContent.seminarPromo.cta.href}
                  className="crece-button-primary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {siteContent.seminarPromo.cta.label}
                </a>
                <a
                  href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero reservar mi cupo para el seminario de CRECE.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="crece-button-secondary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white/10"
                >
                  WhatsApp seminario
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {info.map((item, index) => {
                const Icon = item.icon;
                const warm = index === 1 || index === 3;
                return (
                  <div key={item.label} className="crece-panel-soft rounded-[1.7rem] p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`rounded-2xl border p-3 ${
                          warm
                            ? "border-[#f1b64d]/22 bg-[#d88d25]/12 text-[#f4cb74]"
                            : "border-[#a7cb4c]/20 bg-[#a7cb4c]/10 text-[#dce7bc]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[#98a18f]">{item.label}</div>
                        <div className="mt-2 text-base font-semibold text-[#f5efe4] sm:text-lg">{item.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="crece-panel-soft rounded-[1.7rem] border border-[#f1b64d]/12 p-5 sm:col-span-2">
                <div className="text-xs uppercase tracking-[0.22em] text-[#e2b85d]">Disponibilidad</div>
                <div className="crece-display mt-2 text-2xl font-semibold text-[#f5efe4]">{siteContent.seminarPromo.urgency}</div>
                <p className="mt-2 text-sm leading-7 text-[#c9d0c0]">
                  Este bloque está presentado como anuncio independiente para que no compita con la propuesta institucional ni con la línea de consultoría.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
