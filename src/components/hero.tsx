"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-clip border-b border-[#0f4e2f]/8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfbf6_0%,#f7f9f2_44%,#eef4ea_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_10%_0%,rgba(137,182,74,.18),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(214,139,31,.14),transparent_34%)]" />
      <div className="absolute left-[-10%] top-[16%] h-[18rem] w-[18rem] rounded-full crece-glow-green blur-3xl" />
      <div className="absolute right-[-8%] top-[8%] h-[16rem] w-[16rem] rounded-full crece-glow-gold blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(43,122,71,.04))]" />
      <div className="absolute left-0 right-0 top-0 h-28 overflow-hidden">
        <div className="absolute -left-[8%] top-5 h-24 w-[68%] rotate-[-6deg] rounded-r-full bg-[#d68b1f]" />
        <div className="absolute right-[-12%] top-8 h-24 w-[76%] rotate-[4deg] rounded-l-full bg-[#0f4e2f]" />
      </div>

      <Container className="relative grid min-h-[calc(100vh-5.6rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.06fr_.94fr] lg:py-24">
        <div className="max-w-3xl pt-10 sm:pt-14 lg:pt-16">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="crece-outline-tag inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#d68b1f]" />
            {siteContent.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="crece-display mt-6 max-w-5xl text-balance text-[3rem] leading-[0.92] font-semibold tracking-[-0.07em] text-[#173225] sm:text-[4.05rem] lg:text-[5.35rem]"
          >
            <span className="block">{siteContent.hero.titleLead}</span>
            <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
            <span className="block">{siteContent.hero.titleTail}</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[#496554] sm:text-[1.17rem]"
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {siteContent.hero.tracks.map((track, index) => (
              <span
                key={track}
                className={`inline-flex rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${
                  index === 1 ? "crece-outline-tag--warm" : "crece-outline-tag"
                }`}
              >
                {track}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={siteContent.hero.primaryCta.href}
              className="crece-button-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {siteContent.hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={siteContent.hero.secondaryCta.href}
              className="crece-button-secondary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold backdrop-blur-md transition-colors duration-300 hover:bg-white"
            >
              {siteContent.hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {siteContent.hero.stats.map((item, index) => (
              <div key={item.label} className="crece-panel crece-premium-stroke relative rounded-3xl px-5 py-5">
                <div
                  className={`absolute inset-x-6 top-0 h-px ${index === 1 ? "bg-[#d68b1f]/42" : "bg-[#2b7a47]/32"}`}
                />
                <div className="crece-display text-2xl font-semibold text-[#173225] sm:text-[2.2rem]">{item.value}</div>
                <div className="mt-2 text-sm tracking-[0.04em] text-[#617264]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 18, filter: "blur(10px)" }}
          animate={reducedMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <div className="grid gap-3 md:grid-cols-[.94fr_1.06fr] lg:grid-cols-1 xl:grid-cols-[.94fr_1.06fr]">
              <div className="crece-panel-soft relative min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-[#0f4e2f]/8">
                <Image
                  src={siteContent.hero.images.mobile}
                  alt="Visual institucional CRECE"
                  fill
                  className="object-cover object-center opacity-95"
                  sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 32vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(15,78,47,.16))]" />
              </div>
              <div className="flex flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(247,251,243,.96),rgba(235,243,228,.92))] p-5 text-[#173225]">
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#7b6a39]">{siteContent.hero.cardEyebrow}</div>
                  <h3 className="crece-display mt-3 text-[1.7rem] leading-tight font-semibold">
                    {siteContent.hero.cardTitle}
                  </h3>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-[#4c6555]">
                  {siteContent.hero.cardItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#0f4e2f]/8 bg-white/80 px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <a
        href="#empresa"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#0f4e2f]/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#557060] shadow-[0_14px_32px_rgba(18,52,34,0.06)] backdrop-blur-md sm:inline-flex"
      >
        Descubrir
        <ChevronDown className="h-4 w-4 text-[#d68b1f]" />
      </a>
    </section>
  );
}
