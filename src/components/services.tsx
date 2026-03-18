import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { RevealItem, RevealList } from "./reveal-list";

export function Services() {
  return (
    <AnimatedSection id={siteContent.services.id} className="crece-section-band py-14 sm:py-28">
      <Container className="grid items-center gap-8 sm:gap-14 lg:grid-cols-[.98fr_1.02fr]">
        <div className="relative order-2 lg:order-1">
          <div className="crece-glow-gold absolute -inset-6 rounded-[2rem] blur-3xl" />
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
          <RevealList className="grid gap-4">
            {siteContent.services.list.map((service, index) => {
              const warm = index % 2 === 1;
              return (
                <RevealItem key={service}>
                  <div className="crece-panel-soft group relative overflow-hidden rounded-[1.6rem] px-4 py-4 sm:rounded-[1.8rem] sm:px-5 sm:py-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/95">
                    <div className={`absolute inset-x-5 top-0 h-px ${warm ? "bg-[#d68b1f]/28" : "bg-[#2b7a47]/24"}`} />
                    <div className="flex items-center gap-4">
                      <div
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-[0.72rem] font-semibold tracking-[0.18em] ${
                          warm
                            ? "border-[#d68b1f]/20 bg-[#efbb5a]/14 text-[#99621a]"
                            : "border-[#2b7a47]/16 bg-[#89b64a]/10 text-[#245f3a]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm font-medium leading-6 text-[#173225] sm:text-base">{service}</p>
                      <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-[#d68b1f] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealList>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
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
      </Container>
    </AnimatedSection>
  );
}
