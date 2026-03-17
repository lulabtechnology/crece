import { BanknoteArrowDown, BriefcaseBusiness, HandCoins, Landmark, PiggyBank, WalletCards } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { RevealItem, RevealList } from "./reveal-list";

const icons = [Landmark, HandCoins, PiggyBank, WalletCards, BriefcaseBusiness, BanknoteArrowDown];

export function Benefits() {
  return (
    <AnimatedSection id="financiamientos" className="crece-section-band py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={siteContent.benefits.eyebrow}
          title={siteContent.benefits.title}
          description={siteContent.benefits.description}
        />

        <RevealList className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.benefits.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isWarm = index === 1 || index === 3;
            return (
              <RevealItem key={item.title}>
                <article className="crece-panel crece-premium-stroke h-full rounded-[1.8rem] p-6">
                  <div
                    className={`inline-flex rounded-2xl border p-3 ${
                      isWarm
                        ? "border-[#d68b1f]/22 bg-[#efbb5a]/18 text-[#9f6214]"
                        : "border-[#2b7a47]/18 bg-[#89b64a]/12 text-[#245f3a]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="crece-display mt-5 text-[1.4rem] font-semibold text-[#173225]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#4f6658]">{item.text}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </Container>
    </AnimatedSection>
  );
}
