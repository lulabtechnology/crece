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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfbf6_0%,#f7faf3_42%,#eef4ea_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_10%_0%,rgba(137,182,74,.16),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(214,139,31,.12),transparent_32%)] sm:h-36" />
      <div className="crece-glow-green absolute left-[-10%] top-[14%] h-[20rem] w-[20rem] rounded-full blur-3xl" />
      <div className="crece-glow-gold absolute right-[-8%] top-[10%] h-[18rem] w-[18rem] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(43,122,71,.05))]" />
      <div className="absolute left-0 right-0 top-0 h-20 overflow-hidden sm:h-28">
        <div className="absolute -left-[10%] top-5 h-20 w-[54%] rotate-[-5deg] rounded-r-full bg-[linear-gradient(90deg,#efbb5a,#d68b1f)] opacity-95 blur-[0.2px]" />
        <div className="absolute right-[-12%] top-9 h-20 w-[66%] rotate-[3deg] rounded-l-full bg-[linear-gradient(90deg,#11613a,#0f4e2f)] opacity-96 blur-[0.2px]" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-5.15rem)] items-center gap-10 py-12 sm:min-h-[calc(100vh-6.15rem)] sm:gap-12 sm:py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
        <div className="max-w-3xl pt-3 sm:pt-12 lg:pt-14">
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="crece-display max-w-5xl text-balance text-[2.85rem] leading-[0.92] font-semibold tracking-[-0.07em] text-[#173225] sm:text-[4.3rem] lg:text-[5.7rem]"
          >
            <span className="block">{siteContent.hero.titleLead}</span>
            <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
            <span className="block">{siteContent.hero.titleTail}</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-5 max-w-3xl text-pretty text-[1.02rem] leading-7 text-[#456150] sm:mt-7 sm:text-[1.2rem] sm:leading-8"
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2"
          >
            {siteContent.hero.stats.map((item, index) => (
              <div key={item.title} className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[1.7rem] px-4 py-4 sm:px-5 sm:py-5">
                <div className={`absolute inset-x-5 top-0 h-px ${index === 1 ? "bg-[#d68b1f]/42" : "bg-[#2b7a47]/34"}`} />
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#6f7f73] sm:text-[0.72rem]">{item.title}</div>
                <div className="crece-display mt-2.5 text-[2rem] font-semibold tracking-[-0.05em] text-[#173225] sm:text-[2.55rem]">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-[#5f7064]">{item.label}</div>
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
          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[1.9rem] p-2.5 sm:rounded-[2.25rem] sm:p-4">
            <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.34),rgba(43,122,71,.28),transparent)]" />
            <div className="grid gap-2.5 sm:gap-3 md:grid-cols-[.94fr_1.06fr] lg:grid-cols-1 xl:grid-cols-[.88fr_1.12fr]">
              <div className="crece-panel-soft relative min-h-[14rem] overflow-hidden rounded-[1.45rem] border border-[#0f4e2f]/8 sm:min-h-[18rem] sm:rounded-[1.7rem] xl:min-h-full">
                <Image
                  src={siteContent.hero.images.mobile}
                  alt="Visual institucional CRECE"
                  fill
                  className="object-cover object-center opacity-95"
                  sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),rgba(15,78,47,.14))]" />
              </div>
              <div className="flex flex-col rounded-[1.45rem] bg-[linear-gradient(180deg,rgba(248,252,245,.96),rgba(236,244,229,.92))] p-4 text-[#173225] sm:rounded-[1.7rem] sm:p-5">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#8d641d]">Presentación institucional</div>
                <h3 className="crece-display mt-3 text-[1.42rem] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[1.72rem]">
                  {siteContent.hero.sideCardTitle}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-6 text-[#4d6657] sm:mt-4 sm:text-sm sm:leading-7">
                  {siteContent.hero.sideCardIntro}
                </p>
                <div className="mt-4 grid gap-2.5 text-sm text-[#4c6555] sm:mt-5 sm:gap-3">
                  {siteContent.hero.sideCardItems.map((item, index) => {
                    const Icon = sideCardIcons[index % sideCardIcons.length];
                    const warm = index === 1;

                    return (
                      <div
                        key={item.title}
                        className={`relative overflow-hidden rounded-[1.25rem] border px-4 py-3.5 sm:rounded-[1.4rem] ${
                          warm
                            ? "border-[#d68b1f]/18 bg-[linear-gradient(180deg,rgba(255,255,255,.92),rgba(255,247,232,.86))]"
                            : "border-[#0f4e2f]/8 bg-[linear-gradient(180deg,rgba(255,255,255,.9),rgba(246,250,242,.86))]"
                        }`}
                      >
                        <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.25),transparent)]" />
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 inline-flex rounded-[1.1rem] border p-2.5 ${
                              warm
                                ? "border-[#d68b1f]/22 bg-[#efbb5a]/14 text-[#a06413]"
                                : "border-[#2b7a47]/16 bg-[#89b64a]/10 text-[#245f3a]"
                            }`}
                          >
                            <Icon className="h-[1.05rem] w-[1.05rem]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-[0.68rem] font-semibold uppercase tracking-[0.21em] ${warm ? "text-[#8d641d]" : "text-[#47614f]"}`}>
                              {item.title}
                            </div>
                            <p className="mt-2 text-[0.92rem] leading-6 text-[#4c6555]">{item.text}</p>
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
