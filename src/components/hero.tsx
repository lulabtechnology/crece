"use client";

import Image from "next/image";
import { Building2, ChevronDown, HandCoins, LineChart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

const sideCardIcons = [Building2, LineChart, HandCoins];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-clip border-b border-[#0f4e2f]/8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfbf6_0%,#f7faf3_28%,#eff5ea_66%,#edf3e7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,rgba(137,182,74,.18),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(214,139,31,.18),transparent_20%),radial-gradient(circle_at_70%_68%,rgba(15,78,47,.08),transparent_24%)]" />
      <div className="crece-glow-green absolute left-[-6%] top-[14%] h-[22rem] w-[22rem] rounded-full blur-3xl" />
      <div className="crece-glow-gold absolute right-[-8%] top-[10%] h-[20rem] w-[20rem] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(15,78,47,.06))]" />
      <div className="absolute left-0 right-0 top-0 h-24 overflow-hidden sm:h-32">
        <div className="absolute -left-[10%] top-6 h-16 w-[52%] rotate-[-5deg] rounded-r-full bg-[linear-gradient(90deg,#f2c263,#d68b1f)] opacity-95 sm:h-20" />
        <div className="absolute right-[-10%] top-10 h-16 w-[66%] rotate-[3deg] rounded-l-full bg-[linear-gradient(90deg,#11613a,#0f4e2f)] opacity-[0.97] sm:h-20" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-6.2rem)] items-center gap-10 py-14 sm:min-h-[calc(100vh-7rem)] sm:gap-14 sm:py-24 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div className="max-w-[48rem] pt-4 sm:pt-12 lg:pt-14">
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="crece-display max-w-[46rem] text-balance text-[3.15rem] leading-[0.9] font-semibold tracking-[-0.078em] text-[#173225] sm:text-[4.95rem] lg:text-[6.25rem]"
          >
            <span className="block">{siteContent.hero.titleLead}</span>
            <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
            <span className="block">{siteContent.hero.titleTail}</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-[42rem] text-pretty text-[1.05rem] leading-7 text-[#426050] sm:mt-8 sm:text-[1.22rem] sm:leading-8"
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-8 grid max-w-[42rem] grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4"
          >
            {siteContent.hero.stats.map((item, index) => (
              <div key={item.title} className="crece-stat-card crece-premium-stroke relative overflow-hidden rounded-[1.7rem] px-5 py-5 sm:rounded-[1.9rem] sm:px-6 sm:py-6">
                <div className={`absolute inset-x-6 top-0 h-px ${index === 1 ? "bg-[#d68b1f]/42" : "bg-[#2b7a47]/34"}`} />
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6a7d6f] sm:text-[0.74rem]">{item.title}</div>
                <div className="crece-display mt-3 text-[2.35rem] font-semibold tracking-[-0.06em] text-[#173225] sm:text-[3rem]">{item.value}</div>
                <div className="mt-2 max-w-[14rem] text-sm leading-6 text-[#56685c] sm:text-[0.98rem]">{item.label}</div>
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
          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.4rem] sm:p-4 lg:p-5">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
            <div className="absolute inset-y-6 right-6 hidden w-28 rounded-full bg-[radial-gradient(circle,rgba(214,139,31,.14),transparent_70%)] blur-2xl xl:block" />
            <div className="grid gap-3 sm:gap-4 md:grid-cols-[.92fr_1.08fr] lg:grid-cols-1 xl:grid-cols-[.88fr_1.12fr]">
              <div className="crece-image-frame crece-premium-stroke relative min-h-[17rem] overflow-hidden rounded-[1.6rem] sm:min-h-[22rem] sm:rounded-[1.95rem] xl:min-h-full">
                <Image
                  src={siteContent.hero.images.mobile}
                  alt="Visual institucional CRECE"
                  fill
                  className="object-cover object-center opacity-[0.97]"
                  sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(15,78,47,.18))]" />
              </div>
              <div className="relative flex flex-col rounded-[1.6rem] border border-[#0f4e2f]/8 bg-[linear-gradient(180deg,rgba(249,252,246,.98),rgba(235,244,228,.94))] p-5 text-[#173225] sm:rounded-[1.95rem] sm:p-6">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8d641d]">Presentación institucional</div>
                <h3 className="crece-display mt-3 text-[1.6rem] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-[1.98rem]">
                  {siteContent.hero.sideCardTitle}
                </h3>
                <p className="mt-4 max-w-[32rem] text-[0.98rem] leading-7 text-[#4d6657] sm:text-[1rem]">
                  {siteContent.hero.sideCardIntro}
                </p>
                <div className="mt-5 grid gap-3 text-sm text-[#4c6555] sm:mt-6 sm:gap-3.5">
                  {siteContent.hero.sideCardItems.map((item, index) => {
                    const Icon = sideCardIcons[index % sideCardIcons.length];
                    const warm = index === 1;

                    return (
                      <div
                        key={item.title}
                        className={`relative overflow-hidden rounded-[1.3rem] border px-4 py-4 sm:rounded-[1.45rem] ${
                          warm
                            ? "border-[#d68b1f]/20 bg-[linear-gradient(180deg,rgba(255,255,255,.94),rgba(255,247,232,.88))]"
                            : "border-[#0f4e2f]/9 bg-[linear-gradient(180deg,rgba(255,255,255,.93),rgba(244,249,240,.88))]"
                        }`}
                      >
                        <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.25),transparent)]" />
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`mt-0.5 inline-flex rounded-[1.1rem] border p-2.5 ${
                              warm
                                ? "border-[#d68b1f]/24 bg-[#efbb5a]/16 text-[#a06413]"
                                : "border-[#2b7a47]/16 bg-[#89b64a]/11 text-[#245f3a]"
                            }`}
                          >
                            <Icon className="h-[1.05rem] w-[1.05rem]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${warm ? "text-[#8d641d]" : "text-[#47614f]"}`}>
                              {item.title}
                            </div>
                            <p className="mt-2.5 text-[0.95rem] leading-6 text-[#4c6555]">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <a
        href="#empresa"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#0f4e2f]/10 bg-white/84 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#557060] shadow-[0_14px_32px_rgba(18,52,34,0.06)] backdrop-blur-md sm:inline-flex"
      >
        Descubrir
        <ChevronDown className="h-4 w-4 text-[#d68b1f]" />
      </a>
    </section>
  );
}
