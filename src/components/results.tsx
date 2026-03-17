import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

function MetricCard({ value, label, warm }: { value: string; label: string; warm?: boolean }) {
  return (
    <div className="crece-panel crece-premium-stroke rounded-[1.55rem] p-5 sm:rounded-[1.75rem] sm:p-6">
      <div className={`crece-display text-3xl font-semibold tracking-tight sm:text-4xl ${warm ? "text-[#b57113]" : "text-[#173225]"}`}>
        {value}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#4f6658]">{label}</p>
    </div>
  );
}

export function Results() {
  return (
    <AnimatedSection id={siteContent.results.id} className="crece-section-band py-14 sm:py-28">
      <Container className="grid items-center gap-8 sm:gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Trayectoria"
            title={siteContent.results.title}
            description={siteContent.results.description}
          />
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 lg:grid-cols-1">
            {siteContent.results.metrics.map((metric, index) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} warm={index === 2} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="crece-glow-green absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame crece-premium-stroke">
            <Image
              src={siteContent.results.image}
              alt="Trayectoria y respaldo"
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
