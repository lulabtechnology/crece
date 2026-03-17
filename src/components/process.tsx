import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { RevealItem, RevealList } from "./reveal-list";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <AnimatedSection className="crece-section-band py-14 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Cómo funciona" title={siteContent.process.title} description={siteContent.process.description} />

        <RevealList className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.process.steps.map((step, index) => (
            <RevealItem key={step.title}>
              <article className="crece-panel crece-premium-stroke relative h-full overflow-hidden rounded-[1.6rem] p-5 sm:rounded-[1.8rem] sm:p-6">
                <div className={`absolute left-0 top-0 h-full w-1 ${index % 2 === 0 ? "bg-[#2b7a47]/28" : "bg-[#d68b1f]/28"}`} />
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7a8677]">Paso {index + 1}</div>
                <h3 className="crece-display mt-4 text-[1.38rem] font-semibold text-[#173225]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4f6658]">{step.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealList>
      </Container>
    </AnimatedSection>
  );
}
