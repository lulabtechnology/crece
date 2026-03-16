import Image from "next/image";
import { Building2, LineChart, HandCoins, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [Building2, LineChart, HandCoins, ShieldCheck];

export function InstitutionalOverview() {
  return (
    <AnimatedSection id={siteContent.institutional.id} className="relative py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <SectionHeading
            eyebrow="Anuncio institucional"
            title={siteContent.institutional.title}
            description={siteContent.institutional.description}
          />

          <div className="mt-7 flex flex-wrap gap-3">
            {siteContent.institutional.highlights.map((item, index) => (
              <span
                key={item}
                className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                  index === 1 ? "crece-outline-tag--warm" : "crece-outline-tag"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <RevealList className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteContent.institutional.contributions.map((item, index) => {
              const Icon = icons[index % icons.length];
              const warm = index % 2 === 1;
              return (
                <RevealItem key={item.title}>
                  <article className="crece-panel crece-premium-stroke h-full rounded-[1.85rem] p-6">
                    <div
                      className={`inline-flex rounded-2xl border p-3 ${
                        warm
                          ? "border-[#f1b64d]/22 bg-[#d88d25]/12 text-[#f4cb74]"
                          : "border-[#a7cb4c]/20 bg-[#a7cb4c]/10 text-[#dce7bc]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="crece-display mt-5 text-[1.45rem] font-semibold text-[#f5efe4]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#c9d0c0]">{item.text}</p>
                  </article>
                </RevealItem>
              );
            })}
          </RevealList>
        </div>

        <div className="relative">
          <div className="crece-glow-green absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke">
            <Image
              src={siteContent.institutional.image}
              alt="Visual institucional de CRECE"
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
