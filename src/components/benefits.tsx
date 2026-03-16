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
          eyebrow="Ventaja estratégica"
          title={siteContent.benefits.title}
          description={siteContent.benefits.description}
        />

        <RevealList className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <RevealItem key={item.title}>
                <article className="h-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03))] p-6 shadow-[0_10px_40px_rgba(3,7,18,.18)]">
                  <div className="inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </Container>
    </AnimatedSection>
  );
}
