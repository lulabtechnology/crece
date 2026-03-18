import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="crece-section-band relative py-16 sm:py-28">
      <div className="absolute inset-x-0 top-[12%] bottom-[12%] -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(15,78,47,.03),rgba(255,255,255,.08))]" />
      <Container>
        <div className="relative mx-auto max-w-[86rem]">
          <div className="crece-glow-green absolute -left-10 top-8 h-48 w-48 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-10 bottom-10 h-44 w-44 rounded-full blur-3xl" />

          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.15rem] p-3 sm:rounded-[2.6rem] sm:p-5">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
            <div className="crece-image-frame crece-premium-stroke relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem]">
              <Image
                src={siteContent.institutional.image}
                alt="Perfil institucional de CRECE"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,27,18,.06),rgba(9,27,18,.18))]" />

              <div className="absolute left-4 top-4 rounded-full border border-white/26 bg-[rgba(11,33,22,.44)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:left-6 sm:top-6">
                Empresa
              </div>

              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <div className="max-w-[42rem] rounded-[1.55rem] border border-white/22 bg-[linear-gradient(180deg,rgba(255,255,255,.95),rgba(245,249,241,.9))] p-5 text-[#173225] shadow-[0_24px_60px_rgba(18,52,34,0.14)] backdrop-blur-xl sm:rounded-[1.8rem] sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#7c662f]">Perfil institucional</div>
                  <h2 className="crece-display mt-3 max-w-[34rem] text-balance text-[1.75rem] leading-[0.98] font-semibold tracking-[-0.055em] sm:text-[2.4rem] lg:text-[2.85rem]">
                    {siteContent.institutional.title}
                  </h2>
                  <p className="mt-4 max-w-[38rem] text-[0.96rem] leading-7 text-[#4e6557] sm:text-[1rem]">
                    {siteContent.institutional.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
