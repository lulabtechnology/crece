"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

function useCountUp(target: string) {
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (/[–-]/.test(target)) {
      setValue(target);
      return;
    }

    const match = target.match(/^(\d+)(.*)$/);
    if (!match) {
      setValue(target);
      return;
    }

    const finalNumber = Number(match[1]);
    const suffix = match[2] ?? "";

    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame += 1;
      const current = Math.round((finalNumber * frame) / totalFrames);
      setValue(`${current}${suffix}`);
      if (frame >= totalFrames) {
        clearInterval(timer);
        setValue(target);
      }
    }, 24);

    return () => clearInterval(timer);
  }, [target]);

  return value;
}

function MetricCard({ value, label }: { value: string; label: string }) {
  const animatedValue = useCountUp(value);
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
      <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{animatedValue}</div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{label}</p>
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
            {siteContent.results.metrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
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
