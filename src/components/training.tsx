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
    <AnimatedSection id={siteContent.training.id} className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Formación / seminario"
          title={siteContent.training.title}
          description={siteContent.training.description}
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_.98fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={siteContent.training.image}
              alt="Seminario financiero"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Oferta</div>
                  <div className="mt-1 flex items-end gap-3">
                    <span className="text-4xl font-semibold text-white">{siteContent.training.offer.price}</span>
                    <span className="pb-1 text-sm text-slate-400 line-through">
                      {siteContent.training.offer.regularPrice}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-cyan-100/90">{siteContent.training.offer.note}</p>
            </div>

            <RevealList className="grid gap-4 md:grid-cols-2">
              {siteContent.training.details.map((detail, index) => {
                const Icon = detailIcons[index % detailIcons.length];
                return (
                  <RevealItem key={detail.label}>
                    <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-300" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{detail.label}</p>
                          <p className="mt-1 text-sm font-medium text-white">{detail.value}</p>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealList>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[.65fr_1.35fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
            <h3 className="text-lg font-semibold text-white">Razones para asistir</h3>
            <ul className="mt-5 grid gap-3">
              {siteContent.training.reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-slate-200">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6">
            <h3 className="text-lg font-semibold text-white">Qué aprenderás</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {siteContent.training.topics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4 text-sm text-slate-200"
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
