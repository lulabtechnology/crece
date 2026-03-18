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
          <div className="crece-image-frame crece-premium-stroke">
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
            {siteContent.services.list.map((service) => (
              <RevealItem key={service}>
                <div className="crece-panel-soft group flex items-center justify-between gap-4 rounded-[1.6rem] px-4 py-4 sm:rounded-3xl sm:px-5 sm:py-5 transition-colors duration-300 hover:bg-white">
                  <p className="text-sm font-medium text-[#173225] sm:text-base">{service}</p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#d68b1f] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </RevealItem>
            ))}
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
