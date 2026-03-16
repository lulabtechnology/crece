import Image from "next/image";
import { BadgeCheck, CalendarDays, Clock3, GraduationCap, MonitorSmartphone } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { RevealItem, RevealList } from "./reveal-list";
import { SectionHeading } from "./section-heading";

const detailIcons = [CalendarDays, Clock3, MonitorSmartphone, BadgeCheck];

export function Training() {
  return (
    <AnimatedSection id={siteContent.training.id} className="pt-4 pb-20 sm:pb-28">
      <Container>
        <SectionHeading
          eyebrow="Programa del seminario"
          title={siteContent.training.title}
          description={siteContent.training.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
          <div className="crece-image-frame crece-premium-stroke overflow-hidden">
            <Image
              src={siteContent.training.image}
              alt="Programa del seminario"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-6">
            <div className="crece-panel crece-premium-stroke rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[#f1b64d]/22 bg-[#d88d25]/12 p-3 text-[#f3c976]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-[#9ea792]">Inversión</div>
                  <div className="mt-1 flex items-end gap-3">
                    <span className="crece-display text-4xl font-semibold text-[#f5efe4]">{siteContent.training.offer.price}</span>
                    {siteContent.training.offer.regularPrice ? (
                      <span className="pb-1 text-sm text-[#9ea792] line-through">
                        {siteContent.training.offer.regularPrice}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#e8cf9d]">{siteContent.training.offer.note}</p>
            </div>

            <RevealList className="grid gap-4 md:grid-cols-2">
              {siteContent.training.details.map((detail, index) => {
                const Icon = detailIcons[index % detailIcons.length];
                const isWarm = index % 2 === 0;
                return (
                  <RevealItem key={detail.label}>
                    <div className="crece-panel-soft rounded-3xl p-5">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isWarm ? "text-[#f1b64d]" : "text-[#a7cb4c]"}`} />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[#9ea792]">{detail.label}</p>
                          <p className="mt-1 text-sm font-medium text-[#f5efe4]">{detail.value}</p>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealList>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[.66fr_1.34fr]">
          <div className="crece-panel-soft rounded-[2rem] p-6">
            <h3 className="crece-display text-[1.5rem] font-semibold text-[#f5efe4]">Por qué asistir</h3>
            <ul className="mt-5 grid gap-3">
              {siteContent.training.reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-[#d1d8c8]">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#a7cb4c]" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="crece-panel-soft rounded-[2rem] p-6">
            <h3 className="crece-display text-[1.5rem] font-semibold text-[#f5efe4]">Contenido del seminario</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteContent.training.topics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/8 bg-[#0a1512]/56 px-4 py-4 text-sm text-[#d1d8c8]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
