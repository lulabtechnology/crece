import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/8 bg-[rgba(251,251,246,0.82)] shadow-[0_10px_34px_rgba(18,52,34,0.05)] backdrop-blur-2xl">
      <Container className="flex min-h-[5.15rem] items-center justify-between gap-4 py-2.5 sm:min-h-[6.15rem] sm:gap-5 sm:py-3.5">
        <a
          href="#"
          className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-[1.6rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,.96),rgba(247,251,243,.92))] px-3.5 py-2.5 shadow-[0_18px_42px_rgba(18,52,34,0.08)] ring-1 ring-[#0f4e2f]/5 transition-transform duration-300 hover:-translate-y-0.5 sm:gap-4 sm:px-5 sm:py-3"
        >
          <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,139,31,.38),rgba(43,122,71,.28),transparent)]" />
          <div className="relative h-[4.2rem] w-[7rem] shrink-0 sm:h-[5.15rem] sm:w-[8.8rem] lg:h-[5.8rem] lg:w-[10.3rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left"
              sizes="(min-width: 1024px) 165px, (min-width: 640px) 140px, 112px"
              priority
            />
          </div>

          <div className="min-w-0">
            <div className="crece-display text-[1.02rem] font-semibold tracking-[-0.055em] text-[#163126] sm:text-[1.3rem] lg:text-[1.48rem]">
              {siteContent.brand.name}
            </div>
            <div className="max-w-[9.5rem] text-[0.56rem] uppercase tracking-[0.22em] text-[#6a7b6f] sm:max-w-none sm:text-[0.73rem] sm:tracking-[0.24em]">
              {siteContent.brand.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-[#365240] transition-all duration-300 hover:bg-white/70 hover:text-[#163126]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
