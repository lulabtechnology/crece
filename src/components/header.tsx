import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/8 bg-[rgba(251,251,246,0.92)] backdrop-blur-xl">
      <Container className="flex min-h-[4.7rem] items-center justify-between gap-3 py-2.5 sm:min-h-[5.6rem] sm:gap-4 sm:py-3">
        <a href="#" className="flex min-w-0 items-center gap-2.5 rounded-full bg-white/70 px-2.5 py-2 shadow-[0_12px_30px_rgba(18,52,34,0.06)] sm:gap-3 sm:px-3">
          <div className="relative h-[3rem] w-[4.5rem] shrink-0 sm:h-[3.8rem] sm:w-[5.5rem] lg:h-[4.1rem] lg:w-[5.9rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left"
              sizes="(min-width: 1024px) 94px, (min-width: 640px) 88px, 75px"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div className="crece-display text-lg font-semibold tracking-[-0.04em] text-[#163126]">{siteContent.brand.name}</div>
            <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[#6a7b6f]">{siteContent.brand.tagline}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.08em] text-[#365240] transition-colors duration-300 hover:text-[#163126]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="crece-button-primary inline-flex shrink-0 items-center rounded-full px-3.5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.12em]"
        >
          Solicitar orientación
        </a>
      </Container>
    </header>
  );
}
