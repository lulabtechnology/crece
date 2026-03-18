import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { RevealItem, RevealList } from "./reveal-list";

export function Services() {
  return (
    <AnimatedSection id={siteContent.services.id} className="crece-section-band relative py-16 sm:py-28">
      <div className="absolute inset-x-0 top-[10%] bottom-[10%] -z-10 bg-[linear-gradient(180deg,rgba(250,251,247,.48),rgba(233,241,226,.72),rgba(249,251,246,.4))]" />
      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2rem] p-4 sm:rounded-[2.4rem] sm:p-6 lg:p-8">
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
          <div className="crece-glow-green absolute -left-10 top-10 h-36 w-36 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-10 bottom-10 h-36 w-36 rounded-full blur-3xl" />

          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[.98fr_1.02fr]">
            <div className="relative order-2 lg:order-1">
              <div className="crece-image-frame crece-premium-stroke rounded-[2rem]">
                <Image
                  src={siteContent.services.image}
                  alt="Consultoría financiera y gerencia tercerizada"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 h-px max-w-[8rem] bg-[linear-gradient(90deg,rgba(214,139,31,.75),rgba(43,122,71,.45),transparent)] sm:mb-7" />

              <RevealList className="grid gap-3.5 sm:gap-4">
                {siteContent.services.list.map((service, index) => {
                  const warm = index % 2 === 1;
                  return (
                    <RevealItem key={service}>
                      <div className="crece-panel-soft group relative overflow-hidden rounded-[1.6rem] px-4 py-4 sm:rounded-[1.8rem] sm:px-5 sm:py-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95">
                        <div className={`absolute inset-x-5 top-0 h-px ${warm ? "bg-[#d68b1f]/28" : "bg-[#2b7a47]/24"}`} />
                        <div className="flex items-center gap-4">
                          <div
                            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border text-[0.76rem] font-semibold tracking-[0.18em] ${
                              warm
                                ? "border-[#d68b1f]/22 bg-[#efbb5a]/14 text-[#99621a]"
                                : "border-[#2b7a47]/16 bg-[#89b64a]/10 text-[#245f3a]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <p className="text-[0.98rem] font-medium leading-7 text-[#173225] sm:text-[1.04rem]">{service}</p>
                          <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-[#d68b1f] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealList>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <a
                  href={siteContent.services.cta.href}
                  className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {siteContent.services.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={siteContent.services.websiteCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="crece-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white"
                >
                  {siteContent.services.websiteCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
