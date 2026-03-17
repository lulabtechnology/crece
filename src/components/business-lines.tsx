import { ArrowRight, Building2, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [Building2, BriefcaseBusiness, GraduationCap];

export function BusinessLines() {
  return (
    <AnimatedSection className="relative py-20 sm:py-24">
      <Container>
        <div className="crece-panel crece-premium-stroke overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <SectionHeading
            eyebrow={siteContent.businessLines.eyebrow}
            title={siteContent.businessLines.title}
            description={siteContent.businessLines.description}
            align="center"
          />

          <RevealList className="mt-8 grid gap-4 lg:grid-cols-3">
            {siteContent.businessLines.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const warm = index === 1;
              return (
                <RevealItem key={item.title}>
                  <a
                    href={item.href}
                    className="crece-panel-soft group block h-full rounded-[1.7rem] p-6 transition-transform duration-300 hover:-translate-y-1"
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
                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#678170]">{item.label}</div>
                    <h3 className="crece-display mt-3 text-[1.38rem] leading-tight font-semibold text-[#173225]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#4f6658]">{item.text}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b57113]">
                      Ver bloque
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </a>
                </RevealItem>
              );
            })}
          </RevealList>
        </div>
      </Container>
    </AnimatedSection>
  );
}
