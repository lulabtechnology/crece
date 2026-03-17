"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id={siteContent.services.id} className="relative overflow-clip border-b border-[#0f4e2f]/8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfbf6_0%,#f7f9f2_44%,#eef4ea_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-[radial-gradient(circle_at_10%_0%,rgba(137,182,74,.2),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(214,139,31,.18),transparent_34%)]" />
      <div className="absolute left-[-10%] top-[16%] h-[18rem] w-[18rem] rounded-full crece-glow-green blur-3xl" />
      <div className="absolute right-[-8%] top-[8%] h-[16rem] w-[16rem] rounded-full crece-glow-gold blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(43,122,71,.06))]" />
      <div className="absolute left-0 right-0 top-0 h-20 overflow-hidden sm:h-28">
        <div className="absolute -left-[8%] top-5 h-24 w-[68%] rotate-[-6deg] rounded-r-full bg-[#d68b1f]" />
        <div className="absolute right-[-12%] top-8 h-24 w-[76%] rotate-[4deg] rounded-l-full bg-[#0f4e2f]" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-4.4rem)] items-center gap-8 py-10 sm:min-h-[calc(100vh-5.4rem)] sm:gap-12 sm:py-18 lg:grid-cols-[1.04fr_.96fr] lg:py-22">
        <div className="max-w-3xl pt-4 sm:pt-12 lg:pt-14">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="crece-outline-tag inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.72rem] backdrop-blur-md sm:px-4 sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-[#d68b1f]" />
            {siteContent.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="crece-display mt-5 max-w-5xl text-balance text-[2.75rem] leading-[0.92] font-semibold tracking-[-0.065em] text-[#173225] sm:mt-6 sm:text-[4.25rem] lg:text-[5.55rem]"
          >
            <span className="block">{siteContent.hero.titleLead}</span>
            <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
            {siteContent.hero.titleTail ? <span className="block">{siteContent.hero.titleTail}</span> : null}
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-3xl text-pretty text-[1.02rem] leading-8 text-[#496554] sm:text-[1.22rem] sm:leading-9"
          >
            {siteContent.hero.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 18, filter: "blur(10px)" }}
          animate={reducedMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[1.7rem] p-2.5 sm:rounded-[2rem] sm:p-4">
            <div className="grid gap-2.5 sm:gap-3 md:grid-cols-[.94fr_1.06fr] lg:grid-cols-1 xl:grid-cols-[.94fr_1.06fr]">
              <div className="crece-panel-soft relative min-h-[14rem] overflow-hidden rounded-[1.35rem] border border-[#0f4e2f]/8 sm:min-h-[18rem] sm:rounded-[1.5rem]">
                <Image
                  src={siteContent.hero.images.mobile}
                  alt="Visual institucional CRECE"
                  fill
                  className="object-cover object-center opacity-95"
                  sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 32vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(15,78,47,.16))]" />
              </div>
              <div className="flex flex-col justify-between rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(247,251,243,.98),rgba(235,243,228,.94))] p-4 text-[#173225] sm:rounded-[1.5rem] sm:p-5">
                <div>
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#8a6a2f]">
                    {siteContent.hero.sideCardEyebrow}
                  </div>
                  <h3 className="crece-display mt-3 text-[1.55rem] leading-tight font-semibold sm:text-[1.82rem]">
                    {siteContent.hero.sideCardTitle}
                  </h3>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-[#4c6555] sm:mt-6">
                  {siteContent.hero.sideCardItems.map((item, index) => (
                    <div key={item.title} className="rounded-[1.2rem] border border-[#0f4e2f]/8 bg-white/88 px-4 py-3.5 shadow-[0_12px_28px_rgba(18,52,34,0.04)]">
                      <div className={`text-[0.74rem] font-semibold uppercase tracking-[0.22em] ${index === 1 ? "text-[#a06413]" : "text-[#245f3a]"}`}>
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#50675a]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
