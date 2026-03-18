import Image from "next/image";
import { Award, Landmark } from "lucide-react";
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,27,18,.06),rgba(9,27,18,.24))]" />

              <div className="absolute left-4 top-4 rounded-full border border-white/26 bg-[rgba(11,33,22,.44)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:left-6 sm:top-6">
                Empresa
              </div>

              <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-6 sm:bottom-6 lg:grid-cols-[1.15fr_.85fr]">
                <div className="rounded-[1.55rem] border border-white/22 bg-[linear-gradient(180deg,rgba(15,36,27,.72),rgba(15,36,27,.56))] p-5 text-white shadow-[0_24px_60px_rgba(9,27,18,0.2)] backdrop-blur-xl sm:rounded-[1.8rem] sm:p-6">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/72">Perfil institucional</div>
                  <h2 className="crece-display mt-3 max-w-[34rem] text-balance text-[1.75rem] leading-[0.98] font-semibold tracking-[-0.055em] sm:text-[2.4rem] lg:text-[2.85rem]">
                    {siteContent.institutional.title}
                  </h2>
                  <p className="mt-4 max-w-[38rem] text-[0.96rem] leading-7 text-white/82 sm:text-[1rem]">
                    {siteContent.institutional.description}
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[1.45rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,.94),rgba(244,249,240,.88))] p-4 text-[#173225] shadow-[0_24px_54px_rgba(18,52,34,0.12)] backdrop-blur-xl sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex rounded-[1rem] border border-[#d68b1f]/24 bg-[#efbb5a]/16 p-2.5 text-[#a06413]">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7c662f]">{siteContent.institutional.sideNoteTitle}</div>
                        <p className="mt-2 text-[0.92rem] leading-6 text-[#4e6557]">{siteContent.institutional.sideNoteText}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.45rem] border border-white/18 bg-[linear-gradient(180deg,rgba(15,78,47,.9),rgba(12,58,35,.84))] p-4 text-white shadow-[0_24px_54px_rgba(9,27,18,0.18)] sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex rounded-[1rem] border border-white/18 bg-white/10 p-2.5 text-[#f0c46a]">
                        <Landmark className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Enfoque</div>
                        <p className="mt-2 text-[0.92rem] leading-6 text-white/82">
                          Atención cercana, lectura técnica y soluciones aplicadas a la realidad financiera de cada cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
