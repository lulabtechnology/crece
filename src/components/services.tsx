import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

export function Services() {
  return (
    <AnimatedSection id={siteContent.services.id} className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[.96fr_1.04fr]">
        <div className="relative order-2 lg:order-1">
          <div className="crece-glow-gold absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame">
            <Image
              src={siteContent.services.image}
              alt="Gerencia financiera tercerizada"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Gerencia financiera tercerizada"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />

          <RevealList className="mt-8 grid gap-4">
            {siteContent.services.list.map((service) => (
              <RevealItem key={service}>
                <div className="crece-panel-soft group flex items-center justify-between gap-4 rounded-3xl px-5 py-5 transition-colors duration-300 hover:bg-[#182921]/92">
                  <p className="text-sm font-medium text-[#edf1e7] sm:text-base">{service}</p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#f1b64d] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </Container>

      <Container>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.services.advantages.map((item, index) => (
            <article key={item.title} className="crece-panel rounded-[1.8rem] p-6">
              <div className={`inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] ${index % 2 === 0 ? "crece-outline-tag" : "crece-outline-tag--warm"}`}>
                Ventaja {index + 1}
              </div>
              <h3 className="crece-display mt-5 text-xl font-semibold text-[#f3efe3]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c6cec0]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
