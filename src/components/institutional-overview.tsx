import Image from "next/image";
import { Building2, HandCoins, LineChart, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [Building2, LineChart, HandCoins, ShieldCheck];

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-14 sm:py-28">
      <Container className="grid items-center gap-8 sm:gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <SectionHeading
            eyebrow="Empresa"
            title={siteContent.institutional.title}
            description={siteContent.institutional.description}
          />

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
            {siteContent.institutional.highlights.map((highlight, index) => (
              <span
                key={highlight}
                className={`inline-flex rounded-full px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-xs sm:tracking-[0.22em] ${
                  index === 1 ? "crece-outline-tag--warm" : "crece-outline-tag"
                }`}
              >
                {highlight}
              </span>
            ))}
          </div>

          <RevealList className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
            {siteContent.institutional.contributions.map((item, index) => {
              const Icon = icons[index % icons.length];
              const warm = index === 1 || index === 3;
              return (
                <RevealItem key={item.title}>
                  <article className="crece-panel crece-premium-stroke h-full rounded-[1.6rem] p-5 sm:rounded-[1.85rem] sm:p-6">
                    <div
                      className={`inline-flex rounded-2xl border p-3 ${
                        warm
                          ? "border-[#d68b1f]/22 bg-[#efbb5a]/18 text-[#a06413]"
                          : "border-[#2b7a47]/16 bg-[#89b64a]/12 text-[#245f3a]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="crece-display mt-5 text-[1.34rem] font-semibold text-[#173225]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4f6658]">{item.text}</p>
                  </article>
                </RevealItem>
              );
            })}
          </RevealList>
        </div>

        <div className="relative">
          <div className="crece-glow-green absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke">
            <Image
              src={siteContent.institutional.image}
              alt="Perfil institucional de CRECE"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="crece-panel relative mt-4 max-w-sm rounded-[1.35rem] p-4 sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0 sm:rounded-[1.5rem] sm:p-5">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">{siteContent.institutional.sideNoteTitle}</div>
            <p className="mt-3 text-sm leading-7 text-[#4f6658]">
              {siteContent.institutional.sideNoteText}
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
