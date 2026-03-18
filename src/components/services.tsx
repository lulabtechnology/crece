import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <AnimatedSection id={siteContent.services.id} className="crece-section-band relative py-16 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(251,252,247,.42),rgba(231,239,224,.86),rgba(248,251,246,.4))]" />
      <Container>
        <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.1rem] p-5 sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
          <div className="crece-glow-green absolute -left-10 top-10 h-40 w-40 rounded-full blur-3xl" />
          <div className="crece-glow-gold absolute -right-10 bottom-10 h-40 w-40 rounded-full blur-3xl" />

          <SectionHeading
            eyebrow="Consultoría"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[.94fr_1.06fr] lg:gap-12">
            <div className="relative order-2 lg:order-1">
              <div className="crece-image-frame crece-premium-stroke overflow-hidden rounded-[2rem]">
                <Image
                  src={siteContent.services.image}
                  alt="Consultoría financiera y gerencia tercerizada"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.05),rgba(15,78,47,.18))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/24 bg-[rgba(12,34,24,.44)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-md sm:left-6 sm:top-6">
                  Acompañamiento financiero
                </div>
              </div>
            </div>

            <div className="order-1 min-w-0 lg:order-2">
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                {siteContent.services.pillars.map((pillar, index) => {
                  const warm = index === 1;
                  return (
                    <div
                      key={pillar.title}
                      className={`relative overflow-hidden rounded-[1.55rem] border px-4 py-4 sm:rounded-[1.8rem] sm:px-5 sm:py-5 ${
                        warm
                          ? "border-[#d68b1f]/20 bg-[linear-gradient(180deg,rgba(255,255,255,.97),rgba(255,247,232,.9))]"
                          : "border-[#0f4e2f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,.96),rgba(244,249,240,.9))]"
                      }`}
                    >
                      <div className={`absolute inset-x-5 top-0 h-px ${warm ? "bg-[#d68b1f]/28" : "bg-[#2b7a47]/24"}`} />
                      <div className={`text-[0.66rem] font-semibold uppercase tracking-[0.2em] ${warm ? "text-[#8d641d]" : "text-[#47614f]"}`}>
                        Plan {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="crece-display mt-3 text-[1.3rem] leading-[1.04] font-semibold tracking-[-0.04em] text-[#173225] sm:text-[1.55rem]">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-[0.94rem] leading-6 text-[#4c6555] sm:text-[0.98rem] sm:leading-7">{pillar.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3.5 sm:mt-6 sm:gap-4">
                {siteContent.services.list.map((service, index) => {
                  const warm = index % 2 === 1;
                  return (
                    <div
                      key={service}
                      className="crece-panel-soft group relative overflow-hidden rounded-[1.55rem] px-4 py-4 sm:rounded-[1.8rem] sm:px-5 sm:py-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/96"
                    >
                      <div className={`absolute inset-x-5 top-0 h-px ${warm ? "bg-[#d68b1f]/28" : "bg-[#2b7a47]/24"}`} />
                      <div className="flex items-center gap-4">
                        <div
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border ${
                            warm
                              ? "border-[#d68b1f]/22 bg-[#efbb5a]/14 text-[#99621a]"
                              : "border-[#2b7a47]/16 bg-[#89b64a]/10 text-[#245f3a]"
                          }`}
                        >
                          <BadgeCheck className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6b7d6f]">
                            Área {String(index + 1).padStart(2, "0")}
                          </div>
                          <p className="mt-1 text-[1rem] font-medium leading-7 text-[#173225] sm:text-[1.05rem]">{service}</p>
                        </div>
                        <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-[#d68b1f] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  );
                })}
              </div>

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
