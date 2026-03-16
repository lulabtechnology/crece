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
      <Container className="grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-5 rounded-[2rem] bg-indigo-500/12 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <Image
              src={siteContent.services.image}
              alt="Servicios financieros"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Servicios"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />

          <RevealList className="mt-8 grid gap-4">
            {siteContent.services.list.map((service) => (
              <RevealItem key={service}>
                <div className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/6 px-5 py-5 transition-colors duration-300 hover:bg-white/9">
                  <p className="text-sm font-medium text-slate-100 sm:text-base">{service}</p>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </Container>
    </AnimatedSection>
  );
}
