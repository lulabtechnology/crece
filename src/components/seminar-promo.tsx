import Image from "next/image";
import { BadgeCheck, CalendarDays, Clock3, GraduationCap, MapPin } from "lucide-react";
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
    <AnimatedSection id={siteContent.seminarPromo.id} className="crece-section-band relative py-20 sm:py-28">
      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0">
            <Image
              src={siteContent.seminarPromo.image}
              alt="Seminario de CRECE"
              fill
              className="object-cover object-center opacity-16"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,251,246,.96)_0%,rgba(247,251,243,.94)_48%,rgba(240,246,235,.98)_100%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_.92fr] lg:items-center">
            <div>
              <span className="crece-outline-tag--warm inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
                {siteContent.seminarPromo.badge}
              </span>
              <SectionHeading eyebrow="Capacitación" title={siteContent.seminarPromo.title} description={siteContent.seminarPromo.description} />

              <ul className="mt-7 grid gap-3">
                {siteContent.seminarPromo.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4f6658] sm:text-base">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-[#2b7a47]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={siteContent.seminarPromo.cta.href} className="crece-button-primary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5">
                  {siteContent.seminarPromo.cta.label}
                </a>
                <a
                  href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero reservar mi cupo para el seminario de CRECE.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="crece-button-secondary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white"
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
                      <div className={`rounded-2xl border p-3 ${warm ? "border-[#d68b1f]/22 bg-[#efbb5a]/18 text-[#a06413]" : "border-[#2b7a47]/18 bg-[#89b64a]/12 text-[#245f3a]"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[#7a8677]">{item.label}</div>
                        <div className="mt-2 text-base font-semibold text-[#173225] sm:text-lg">{item.value}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="crece-panel-soft rounded-[1.7rem] border border-[#d68b1f]/12 p-5 sm:col-span-2">
                <div className="text-xs uppercase tracking-[0.22em] text-[#a06413]">Disponibilidad</div>
                <div className="crece-display mt-2 text-2xl font-semibold text-[#173225]">{siteContent.seminarPromo.urgency}</div>
                <p className="mt-2 text-sm leading-7 text-[#4f6658]">{siteContent.seminarPromo.availabilityNote}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
