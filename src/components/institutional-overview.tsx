import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-16 sm:py-32">
      <div className="absolute inset-x-0 top-[14%] bottom-[14%] -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(15,78,47,.04),rgba(255,255,255,.06))]" />
      <Container>
        <div className="relative mx-auto max-w-[84rem]">
          <div className="crece-glow-green absolute -left-8 top-8 h-44 w-44 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-8 bottom-10 h-40 w-40 rounded-full blur-3xl" />

          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.5rem] sm:p-5">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
            <div className="absolute left-6 top-6 hidden h-16 w-16 rounded-full border border-white/60 bg-white/55 blur-[1px] sm:block" />
            <div className="crece-image-frame crece-premium-stroke relative rounded-[1.7rem] sm:rounded-[2.1rem]">
              <Image
                src={siteContent.institutional.image}
                alt="Perfil institucional de CRECE"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
