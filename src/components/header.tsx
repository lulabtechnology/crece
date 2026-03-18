import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/8 bg-[rgba(251,251,246,0.92)] backdrop-blur-xl">
      <Container className="flex min-h-[4.7rem] items-center justify-between gap-3 py-2.5 sm:min-h-[5.6rem] sm:gap-4 sm:py-3">
        <a href="#" className="flex min-w-0 items-center gap-3 rounded-full bg-white/70 px-3 py-2 shadow-[0_12px_30px_rgba(18,52,34,0.06)] sm:gap-4 sm:px-4 sm:py-2.5">
          <div className="relative h-[3.6rem] w-[5.8rem] shrink-0 sm:h-[4.8rem] sm:w-[7.2rem] lg:h-[5.2rem] lg:w-[7.8rem]">
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
      </Container>
    </header>
  );
}
