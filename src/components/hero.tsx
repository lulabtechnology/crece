"use client";

import Image from "next/image";
import { ArrowRight, Building2, ChevronDown, HandCoins, LineChart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

const sideCardIcons = [Building2, LineChart, HandCoins];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-clip border-b border-[#0f4e2f]/8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfcf7_0%,#f1f7ec_30%,#edf4e8_62%,#e8f0e3_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(137,182,74,.18),transparent_24%),radial-gradient(circle_at_90%_10%,rgba(214,139,31,.2),transparent_18%),radial-gradient(circle_at_65%_65%,rgba(15,78,47,.12),transparent_24%)]" />
      <div className="crece-glow-green absolute left-[-5%] top-[12%] h-[24rem] w-[24rem] rounded-full blur-3xl" />
      <div className="crece-glow-gold absolute right-[-7%] top-[8%] h-[22rem] w-[22rem] rounded-full blur-3xl" />
      <div className="absolute left-0 right-0 top-0 h-32 overflow-hidden sm:h-40">
        <div className="absolute -left-[8%] top-6 h-20 w-[54%] rotate-[-4deg] rounded-r-full bg-[linear-gradient(90deg,#f0c46a,#d68b1f)] opacity-95" />
        <div className="absolute right-[-8%] top-14 h-20 w-[60%] rotate-[2.5deg] rounded-l-full bg-[linear-gradient(90deg,#1f6a41,#0f4e2f)] opacity-[0.96]" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-5.9rem)] items-center gap-10 py-14 sm:min-h-[calc(100vh-6.8rem)] sm:gap-14 sm:py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
        <div className="max-w-[48rem] pt-5 sm:pt-10 lg:pt-14">
          {siteContent.hero.eyebrow ? (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.04 }}
              className="crece-outline-tag inline-flex items-center rounded-full px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em]"
            >
              {siteContent.hero.eyebrow}
            </motion.div>
          ) : null}

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="crece-display mt-2 max-w-[50rem] text-balance text-[3.35rem] leading-[0.88] font-semibold tracking-[-0.085em] text-[#173225] sm:mt-4 sm:text-[5.2rem] lg:text-[6.6rem]"
          >
            <span className="block">{siteContent.hero.titleLead}</span>
            <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
            <span className="block">{siteContent.hero.titleTail}</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-[42rem] text-pretty text-[1.06rem] leading-7 text-[#426050] sm:mt-8 sm:text-[1.24rem] sm:leading-8"
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
          >
            <a
              href={siteContent.hero.primaryCta.href}
              className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {siteContent.hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteContent.hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="crece-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white"
            >
              {siteContent.hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid max-w-[44rem] grid-cols-1 gap-3 sm:mt-11 sm:grid-cols-2 sm:gap-4"
          >
            {siteContent.hero.stats.map((item, index) => (
              <div
                key={item.title}
                className="crece-stat-card crece-premium-stroke relative overflow-hidden rounded-[1.75rem] px-5 py-5 sm:rounded-[1.95rem] sm:px-6 sm:py-6"
              >
                <div className={`absolute inset-x-6 top-0 h-px ${index === 1 ? "bg-[#d68b1f]/42" : "bg-[#2b7a47]/34"}`} />
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6a7d6f] sm:text-[0.74rem]">{item.title}</div>
                <div className="crece-display mt-3 text-[2.6rem] font-semibold tracking-[-0.07em] text-[#173225] sm:text-[3.2rem]">{item.value}</div>
                <div className="mt-2 max-w-[16rem] text-sm leading-6 text-[#56685c] sm:text-[1rem]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 18, filter: "blur(10px)" }}
          animate={reducedMotion ? {} : { opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="crece-panel crece-premium-stroke relative overflow-hidden rounded-[2.15rem] p-3 sm:rounded-[2.5rem] sm:p-4 lg:p-5">
            <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.38),rgba(43,122,71,.3),transparent)]" />
            <div className="absolute inset-y-6 right-6 hidden w-28 rounded-full bg-[radial-gradient(circle,rgba(214,139,31,.16),transparent_70%)] blur-2xl xl:block" />
            <div className="grid gap-3 sm:gap-4 md:grid-cols-[.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[.9fr_1.1fr]">
              <div className="crece-image-frame crece-premium-stroke relative min-h-[20rem] overflow-hidden rounded-[1.7rem] sm:min-h-[24rem] sm:rounded-[2rem] xl:min-h-full">
                <Image
                  src={siteContent.hero.images.desktop}
                  alt="Visual institucional CRECE"
                  fill
                  className="hidden object-cover object-center opacity-[0.98] sm:block"
                  sizes="(min-width: 1280px) 26vw, (min-width: 1024px) 32vw, 100vw"
                />
                <Image
                  src={siteContent.hero.images.mobile}
                  alt="Visual institucional CRECE"
                  fill
                  className="object-cover object-center opacity-[0.98] sm:hidden"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(15,78,47,.2))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/32 bg-[rgba(14,39,28,.34)] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur-md sm:left-5 sm:top-5">
                  Enfoque ejecutivo
                </div>
              </div>

              <div className="relative flex flex-col rounded-[1.7rem] border border-[#0f4e2f]/8 bg-[linear-gradient(180deg,rgba(250,252,247,.98),rgba(235,244,228,.96))] p-5 text-[#173225] sm:rounded-[2rem] sm:p-6">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#8d641d]">Cómo ayuda CRECE</div>
                <h3 className="crece-display mt-3 text-[1.7rem] leading-[1.02] font-semibold tracking-[-0.055em] sm:text-[2.05rem]">
                  {siteContent.hero.sideCardTitle}
                </h3>
                <p className="mt-4 max-w-[32rem] text-[0.98rem] leading-7 text-[#4d6657] sm:text-[1.02rem]">
                  {siteContent.hero.sideCardIntro}
                </p>
                <div className="mt-5 grid gap-3.5 text-sm text-[#4c6555] sm:mt-6">
                  {siteContent.hero.sideCardItems.map((item, index) => {
                    const Icon = sideCardIcons[index % sideCardIcons.length];
                    const warm = index === 1;

                    return (
                      <div
                        key={item.title}
                        className={`relative overflow-hidden rounded-[1.35rem] border px-4 py-4 sm:rounded-[1.5rem] ${
                          warm
                            ? "border-[#d68b1f]/22 bg-[linear-gradient(180deg,rgba(255,255,255,.95),rgba(255,247,232,.9))]"
                            : "border-[#0f4e2f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,.94),rgba(244,249,240,.9))]"
                        }`}
                      >
                        <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.25),transparent)]" />
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`mt-0.5 inline-flex rounded-[1.1rem] border p-2.5 ${
                              warm
                                ? "border-[#d68b1f]/26 bg-[#efbb5a]/16 text-[#a06413]"
                                : "border-[#2b7a47]/16 bg-[#89b64a]/11 text-[#245f3a]"
                            }`}
                          >
                            <Icon className="h-[1.08rem] w-[1.08rem]" />
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
