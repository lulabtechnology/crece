import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [BriefcaseBusiness, GraduationCap];

export function BusinessLines() {
  return (
    <AnimatedSection className="relative py-14 sm:py-24">
      <Container>
        <div className="crece-panel crece-premium-stroke overflow-hidden rounded-[1.7rem] p-5 sm:rounded-[2rem] sm:p-8">
          <SectionHeading
            eyebrow={siteContent.businessLines.eyebrow}
            title={siteContent.businessLines.title}
            description={siteContent.businessLines.description}
            align="center"
          />

          <RevealList className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-2">
            {siteContent.businessLines.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const warm = index === 0;
              return (
                <RevealItem key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="crece-panel-soft group block h-full rounded-[1.55rem] p-5 sm:rounded-[1.7rem] sm:p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`inline-flex rounded-2xl border p-3 ${
                        warm
                          ? "border-[#d68b1f]/22 bg-[#efbb5a]/18 text-[#a06413]"
                          : "border-[#2b7a47]/18 bg-[#89b64a]/12 text-[#245f3a]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#678170]">{item.label}</div>
                    <h3 className="crece-display mt-3 text-[1.38rem] leading-tight font-semibold text-[#173225]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4f6658]">{item.text}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b57113]">
                      {item.ctaLabel}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </a>
                </RevealItem>
              );
            })}
          </RevealList>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 border-t border-[#0f4e2f]/8 pt-6 sm:mt-8 sm:flex-row sm:pt-8">
            <p className="text-center text-sm leading-7 text-[#5b6d60]">
              Para ver el portafolio completo de CRECE, continúa en su sitio principal.
            </p>
            <a
              href={siteContent.businessLines.websiteCta.href}
              target="_blank"
              rel="noreferrer"
              className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {siteContent.businessLines.websiteCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
