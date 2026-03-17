import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-14 sm:py-22">
      <Container className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <SectionHeading
            eyebrow="Empresa"
            title={siteContent.institutional.title}
            description={siteContent.institutional.description}
          />

          <div className="mt-6 rounded-[1.55rem] border border-[#0f4e2f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,.92),rgba(244,248,239,.9))] px-5 py-5 shadow-[0_18px_46px_rgba(18,52,34,0.06)] sm:mt-8 sm:px-6 sm:py-6">
            <div className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
              {siteContent.institutional.sideNoteTitle}
            </div>
            <p className="mt-3 text-[0.98rem] leading-8 text-[#4f6658] sm:text-[1.05rem]">
              {siteContent.institutional.sideNoteText}
            </p>
          </div>
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
        </div>
      </Container>
    </AnimatedSection>
  );
}
