import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-14 sm:py-28">
      <Container>
        <div className="relative mx-auto max-w-5xl">
          <div className="crece-glow-green absolute -left-10 top-8 h-40 w-40 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-8 bottom-6 h-36 w-36 rounded-full blur-3xl" />

          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2rem] p-2.5 sm:rounded-[2.4rem] sm:p-4">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
            <div className="crece-image-frame crece-premium-stroke relative rounded-[1.6rem] sm:rounded-[2rem]">
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
