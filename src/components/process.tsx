import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

export function Process() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Implementación"
          title={siteContent.process.title}
          description="Un flujo claro para transformar análisis financiero en decisiones concretas y seguimiento real."
        />

        <RevealList className="mt-10 grid gap-4 lg:grid-cols-4">
          {siteContent.process.steps.map((step, index) => (
            <RevealItem key={step.title}>
              <article className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
                <div className="absolute right-4 top-4 text-6xl font-semibold text-white/6">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                  Paso {index + 1}
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </AnimatedSection>
  );
}
