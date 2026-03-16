"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 56]);

  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-clip border-b border-white/6 sm:min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src={siteContent.hero.images.desktop}
            alt="Visual premium financiero"
            fill
            priority
            className="object-cover object-center opacity-58 saturate-[0.95]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 sm:hidden">
          <Image
            src={siteContent.hero.images.mobile}
            alt="Visual premium financiero móvil"
            fill
            priority
            className="object-cover object-center opacity-64 saturate-[0.96]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,12,.18)_0%,rgba(6,16,12,.42)_24%,rgba(6,16,12,.84)_64%,rgba(6,16,12,.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(167,203,76,.22),transparent_22%),radial-gradient(circle_at_82%_14%,rgba(216,141,37,.20),transparent_20%),radial-gradient(circle_at_52%_48%,rgba(122,152,53,.10),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-16 mix-blend-screen"
          style={{ backgroundImage: `url(${siteContent.hero.images.gridOverlay})`, backgroundSize: "180px 180px" }}
        />
        <div className="crece-grid-bg absolute inset-0 opacity-[0.05]" />
        <div className="absolute left-[-12%] top-[10%] h-[25rem] w-[25rem] rounded-full crece-glow-green blur-3xl" />
        <div className="absolute bottom-[12%] right-[-10%] h-[23rem] w-[23rem] rounded-full crece-glow-gold blur-3xl" />
      </div>

      <motion.div style={{ y }} className="relative">
        <Container className="flex min-h-[calc(100svh-72px)] flex-col justify-start py-10 pb-16 sm:min-h-screen sm:justify-center sm:py-28">
          <div className="max-w-6xl pt-2 sm:pt-0">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="crece-outline-tag inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-[#f1b64d]" />
              {siteContent.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="crece-display mt-5 max-w-6xl text-balance text-[3rem] leading-[0.9] font-semibold tracking-[-0.06em] text-[#f5efe4] sm:mt-6 sm:text-[4.45rem] lg:text-[6.3rem]"
            >
              <span className="block">{siteContent.hero.titleLead}</span>
              <span className="crece-heading-accent block">{siteContent.hero.titleAccent}</span>
              <span className="block">{siteContent.hero.titleTail}</span>
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-5 max-w-3xl text-pretty text-[1.04rem] leading-8 text-[#d7decb] sm:mt-6 sm:text-[1.32rem]"
            >
              {siteContent.hero.subtitle}
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-5 flex flex-wrap gap-3 sm:mt-6"
            >
              {siteContent.hero.tracks.map((track, index) => (
                <span
                  key={track}
                  className={`inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] sm:text-xs ${
                    index === 2 ? "crece-outline-tag--warm" : "crece-outline-tag"
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
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
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
                className="crece-button-secondary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3"
            >
              {siteContent.hero.stats.map((item, index) => (
                <div key={item.label} className="crece-panel crece-premium-stroke relative rounded-3xl px-5 py-5">
                  <div
                    className={`absolute inset-x-6 top-0 h-px ${index % 2 === 0 ? "bg-[#a7cb4c]/48" : "bg-[#f1b64d]/48"}`}
                  />
                  <div className="crece-display text-2xl font-semibold text-[#f5efe4] sm:text-[2.2rem]">{item.value}</div>
                  <div className="mt-2 text-sm tracking-[0.04em] text-[#abb293]">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <a
        href="#empresa"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#f1b64d]/14 bg-[#0d1713]/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c1c8b6] backdrop-blur-md sm:inline-flex"
      >
        Descubrir
        <ChevronDown className="h-4 w-4 text-[#f1b64d]" />
      </a>
    </section>
  );
}
