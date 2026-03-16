import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function Authority() {
  return (
    <AnimatedSection className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div className="relative order-2 lg:order-1">
          <div className="crece-glow-gold absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke">
            <Image
              src={siteContent.authority.image}
              alt="Experiencia y autoridad"
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
          <div className="mt-8 grid gap-4">
            {siteContent.authority.bullets.map((bullet, index) => (
              <div
                key={bullet}
                className="crece-panel-soft flex items-start gap-3 rounded-3xl px-5 py-5"
              >
                <CheckCircle2 className={`mt-0.5 h-5 w-5 ${index % 2 === 0 ? "text-[#a7cb4c]" : "text-[#f1b64d]"}`} />
                <p className="text-sm leading-7 text-[#d1d8c8]">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
