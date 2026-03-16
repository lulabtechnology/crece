"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, reducedMotion ? 0 : 64]);

  return (
    <section className="relative min-h-screen overflow-clip border-b border-white/6">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src={siteContent.hero.images.desktop}
            alt="Visual premium financiero"
            fill
            priority
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 sm:hidden">
          <Image
            src={siteContent.hero.images.mobile}
            alt="Visual premium financiero móvil"
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,18,.18)_0%,rgba(3,7,18,.66)_36%,rgba(3,7,18,.90)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.18),transparent_24%),radial-gradient(circle_at_78%_10%,rgba(99,102,241,.22),transparent_24%),radial-gradient(circle_at_50%_60%,rgba(6,182,212,.10),transparent_34%)]" />
        <div
          className="absolute inset-0 opacity-35 mix-blend-screen"
          style={{ backgroundImage: `url(${siteContent.hero.images.gridOverlay})`, backgroundSize: "180px 180px" }}
        />
      </div>

      <motion.div style={{ y }} className="relative">
        <Container className="flex min-h-screen flex-col justify-center py-24 sm:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/8 px-4 py-2 text-sm text-cyan-100/95 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              {siteContent.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {siteContent.hero.title}
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl"
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(103,232,249,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {siteContent.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={siteContent.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
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
              {siteContent.hero.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/25 px-5 py-5 backdrop-blur-xl"
                >
                  <div className="text-2xl font-semibold text-white sm:text-3xl">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <a
        href="#propuesta"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300 backdrop-blur-md sm:inline-flex"
      >
        Descubrir
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
