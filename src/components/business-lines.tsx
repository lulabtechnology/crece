import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [BriefcaseBusiness, GraduationCap];

export function BusinessLines() {
  return (
    <AnimatedSection className="relative py-16 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,250,242,.52),rgba(231,239,224,.72),rgba(248,251,246,.4))]" />
      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.1rem] p-5 sm:rounded-[2.6rem] sm:p-8 lg:p-10">
          <div className="crece-glow-green absolute -left-12 top-8 h-44 w-44 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-10 bottom-8 h-44 w-44 rounded-full blur-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />

          <div className="relative">
            <SectionHeading
              eyebrow={siteContent.businessLines.eyebrow}
              title={siteContent.businessLines.title}
              description={siteContent.businessLines.description}
              align="center"
            />

            <RevealList className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2">
              {siteContent.businessLines.items.map((item, index) => {
                const Icon = icons[index % icons.length];
                const warm = index === 0;
                return (
                  <RevealItem key={item.title}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="crece-panel-soft group block h-full rounded-[1.7rem] p-5 sm:rounded-[1.95rem] sm:p-7 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`inline-flex rounded-[1.15rem] border p-3 ${
                          warm
                            ? "border-[#d68b1f]/22 bg-[#efbb5a]/18 text-[#a06413]"
                            : "border-[#2b7a47]/18 bg-[#89b64a]/12 text-[#245f3a]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#678170] sm:text-[0.72rem]">{item.label}</div>
                      <h3 className="crece-display mt-3 text-[1.55rem] leading-[1.02] font-semibold tracking-[-0.05em] text-[#173225] sm:text-[1.9rem]">{item.title}</h3>
                      <p className="mt-4 text-[0.98rem] leading-7 text-[#4f6658]">{item.text}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b57113]">
                        {item.ctaLabel}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </a>
                  </RevealItem>
                );
              })}
            </RevealList>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 border-t border-[#0f4e2f]/8 pt-7 sm:mt-9 sm:flex-row sm:pt-9">
              <p className="text-center text-sm leading-7 text-[#5b6d60]">
                Para ver el portafolio completo de CRECE, continúa en su sitio principal.
              </p>
              <a
                href={siteContent.businessLines.websiteCta.href}
                target="_blank"
                rel="noreferrer"
                className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              >
                {siteContent.businessLines.websiteCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
