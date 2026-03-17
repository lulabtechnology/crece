import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Authority() {
  return (
    <AnimatedSection className="crece-section-band py-14 sm:py-28">
      <Container className="grid items-center gap-8 sm:gap-14 lg:grid-cols-[.96fr_1.04fr]">
        <div className="relative order-2 lg:order-1">
          <div className="crece-glow-gold absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke">
            <Image
              src={siteContent.authority.image}
              alt="Autoridad de CRECE"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Autoridad"
            title={siteContent.authority.title}
            description={siteContent.authority.description}
          />

          <div className="mt-6 grid gap-4 sm:mt-8">
            {siteContent.authority.bullets.map((item, index) => (
              <div key={item} className="crece-panel-soft flex gap-4 rounded-[1.45rem] px-4 py-4 sm:rounded-[1.6rem] sm:px-5 sm:py-5">
                <div className={`mt-1 rounded-full p-2 ${index % 2 === 0 ? "bg-[#89b64a]/14 text-[#2b7a47]" : "bg-[#efbb5a]/18 text-[#a06413]"}`}>
                  <BadgeCheck className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-[#4f6658]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
