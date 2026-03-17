import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
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
          <SectionHeading
            eyebrow="Consultoría"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />

          <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
            {siteContent.services.pillars.map((pillar, index) => (
              <article key={pillar.title} className="crece-panel-soft rounded-[1.6rem] p-5 sm:rounded-[1.8rem] sm:p-6">
                <div className={`inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] ${index === 1 ? "crece-outline-tag--warm" : "crece-outline-tag"}`}>
                  Línea {index + 1}
                </div>
                <h3 className="crece-display mt-5 text-[1.45rem] font-semibold text-[#173225]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4f6658]">{pillar.text}</p>
              </article>
            ))}
          </div>

          <RevealList className="mt-6 grid gap-4 sm:mt-8">
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

      <Container>
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.services.advantages.map((item, index) => (
            <article key={item.title} className="crece-panel crece-premium-stroke rounded-[1.6rem] p-5 sm:rounded-[1.8rem] sm:p-6">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] ${index % 2 === 0 ? "crece-outline-tag" : "crece-outline-tag--warm"}`}>
                Ventaja {index + 1}
              </div>
              <h3 className="crece-display mt-5 text-[1.38rem] font-semibold text-[#173225]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4f6658]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
