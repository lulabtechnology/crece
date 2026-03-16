import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

export function ValueFusion() {
  return (
    <AnimatedSection id={siteContent.fusion.id} className="relative py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <SectionHeading
            eyebrow="Propuesta fusionada"
            title={siteContent.fusion.title}
            description={siteContent.fusion.description}
          />
          <RevealList className="mt-8 grid gap-4">
            {siteContent.fusion.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{pillar.text}</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={siteContent.fusion.image}
              alt="Visual propuesta fusionada"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
