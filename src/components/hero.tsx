"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 58]);

  return (
    <section className="relative min-h-screen overflow-clip border-b border-white/6">
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
            className="object-cover object-center opacity-60 saturate-[0.96]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,13,.26)_0%,rgba(7,16,13,.44)_22%,rgba(7,16,13,.78)_58%,rgba(7,16,13,.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(167,203,76,.20),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(216,141,37,.20),transparent_22%),radial-gradient(circle_at_50%_55%,rgba(122,152,53,.12),transparent_32%)]" />
        <div
          className="absolute inset-0 opacity-18 mix-blend-screen"
          style={{ backgroundImage: `url(${siteContent.hero.images.gridOverlay})`, backgroundSize: "180px 180px" }}
        />
        <div className="absolute left-[-12%] top-[12%] h-[24rem] w-[24rem] rounded-full crece-glow-green blur-3xl" />
        <div className="absolute bottom-[10%] right-[-8%] h-[22rem] w-[22rem] rounded-full crece-glow-gold blur-3xl" />
      </div>

      <motion.div style={{ y }} className="relative">
        <Container className="flex min-h-screen flex-col justify-center py-24 sm:py-28">
          <div className="max-w-4xl">
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
              className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-[#f3efe3] sm:text-6xl lg:text-7xl"
            >
              {siteContent.hero.title}
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#d4dbc8] sm:text-xl"
            >
              {siteContent.hero.subtitle}
            </motion.p>

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
                className="crece-button-secondary inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
              >
                {siteContent.hero.secondaryCta.label}
              </a>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {siteContent.hero.stats.map((item, index) => (
                <div
                  key={item.label}
                  className="crece-panel relative rounded-3xl px-5 py-5"
                >
                  <div
                    className={`absolute inset-x-6 top-0 h-px ${index % 2 === 0 ? "bg-[#a7cb4c]/45" : "bg-[#f1b64d]/45"}`}
                  />
                  <div className="text-2xl font-semibold text-[#f3efe3] sm:text-3xl">{item.value}</div>
                  <div className="mt-2 text-sm text-[#a8b096]">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <a
        href="#propuesta"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-[#f1b64d]/14 bg-[#0d1713]/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c1c8b6] backdrop-blur-md sm:inline-flex"
      >
        Descubrir
        <ChevronDown className="h-4 w-4 text-[#f1b64d]" />
      </a>
    </section>
  );
}
