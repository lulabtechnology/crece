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
    <AnimatedSection id={siteContent.training.id} className="pt-2 pb-14 sm:pt-4 sm:pb-28">
      <Container>
        <SectionHeading eyebrow="Programa del seminario" title={siteContent.training.title} description={siteContent.training.description} align="center" />

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.02fr_.98fr]">
          <div className="crece-image-frame crece-premium-stroke overflow-hidden">
            <Image src={siteContent.training.image} alt="Programa del seminario" width={1200} height={900} className="h-full w-full object-cover" />
          </div>

          <div className="grid gap-6">
            <div className="crece-panel crece-premium-stroke rounded-[1.7rem] p-5 sm:rounded-[2rem] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-[#d68b1f]/22 bg-[#efbb5a]/18 p-3 text-[#a06413]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-[#7a8677]">Inversión</div>
                  <div className="mt-1 flex items-end gap-3">
                    <span className="crece-display text-4xl font-semibold text-[#173225]">{siteContent.training.offer.price}</span>
                    {siteContent.training.offer.regularPrice ? <span className="pb-1 text-sm text-[#7a8677] line-through">{siteContent.training.offer.regularPrice}</span> : null}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#8f6a28]">{siteContent.training.offer.note}</p>
            </div>

            <RevealList className="grid gap-4 md:grid-cols-2">
              {siteContent.training.details.map((detail, index) => {
                const Icon = detailIcons[index % detailIcons.length];
                const isWarm = index % 2 === 0;
                return (
                  <RevealItem key={detail.label}>
                    <div className="crece-panel-soft rounded-3xl p-5">
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isWarm ? "text-[#d68b1f]" : "text-[#2b7a47]"}`} />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-[#7a8677]">{detail.label}</p>
                          <p className="mt-1 text-sm font-medium text-[#173225]">{detail.value}</p>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealList>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 xl:grid-cols-[.66fr_1.34fr]">
          <div className="crece-panel-soft rounded-[1.7rem] p-5 sm:rounded-[2rem] sm:p-6">
            <h3 className="crece-display text-[1.45rem] font-semibold text-[#173225]">Por qué asistir</h3>
            <ul className="mt-5 grid gap-3">
              {siteContent.training.reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-[#4f6658]">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#2b7a47]" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="crece-panel-soft rounded-[1.7rem] p-5 sm:rounded-[2rem] sm:p-6">
            <h3 className="crece-display text-[1.45rem] font-semibold text-[#173225]">Contenido del seminario</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteContent.training.topics.map((topic) => (
                <div key={topic} className="rounded-2xl border border-[#0f4e2f]/8 bg-white/80 px-4 py-4 text-sm text-[#4f6658]">{topic}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
