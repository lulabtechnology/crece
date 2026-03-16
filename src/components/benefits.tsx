import { BarChart3, BriefcaseBusiness, ShieldCheck, TrendingUp } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [BriefcaseBusiness, BarChart3, ShieldCheck, TrendingUp];

export function Benefits() {
  return (
    <AnimatedSection className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Ventajas institucionales"
          title={siteContent.benefits.title}
          description={siteContent.benefits.description}
        />

        <RevealList className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isWarm = index % 2 === 1;
            return (
              <RevealItem key={item.title}>
                <article className="crece-panel crece-premium-stroke h-full rounded-[1.8rem] p-6">
                  <div
                    className={`inline-flex rounded-2xl border p-3 ${
                      isWarm
                        ? "border-[#f1b64d]/22 bg-[#d88d25]/12 text-[#f3c976]"
                        : "border-[#a7cb4c]/18 bg-[#a7cb4c]/10 text-[#dce6bd]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="crece-display mt-5 text-[1.45rem] font-semibold text-[#f5efe4]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c6cec0]">{item.text}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </Container>
    </AnimatedSection>
  );
}
