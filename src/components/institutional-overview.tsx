import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-14 sm:py-28">
      <Container>
        <div className="relative mx-auto max-w-5xl">
          <div className="crece-glow-green absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke relative">
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
