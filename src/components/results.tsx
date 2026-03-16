import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

function MetricCard({ value, label, warm }: { value: string; label: string; warm?: boolean }) {
  return (
    <div className="crece-panel rounded-[1.75rem] p-6">
      <div className={`text-4xl font-semibold tracking-tight sm:text-5xl ${warm ? "text-[#f1b64d]" : "text-[#f3efe3]"}`}>
        {value}
      </div>
      <p className="mt-3 text-sm leading-7 text-[#c6cec0]">{label}</p>
    </div>
  );
}

export function Results() {
  return (
    <AnimatedSection id={siteContent.results.id} className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Resultados"
            title={siteContent.results.title}
            description={siteContent.results.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {siteContent.results.metrics.map((metric, index) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} warm={index === 1} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="crece-glow-green absolute -inset-6 rounded-[2rem] blur-3xl" />
          <div className="crece-image-frame">
            <Image
              src={siteContent.results.image}
              alt="Resultados financieros"
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
