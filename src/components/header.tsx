import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0f4e2f]/8 bg-[rgba(251,251,246,0.94)] backdrop-blur-xl">
      <Container className="flex min-h-[4.45rem] items-center justify-between gap-3 py-2 sm:min-h-[5.4rem] sm:gap-4 sm:py-3">
        <a
          href="#"
          className="flex min-w-0 max-w-[17.5rem] items-center gap-2.5 rounded-full border border-[#0f4e2f]/6 bg-white/80 px-3 py-2 shadow-[0_12px_30px_rgba(18,52,34,0.06)] sm:max-w-none sm:gap-3.5 sm:px-4"
        >
          <div className="relative h-[3.05rem] w-[5.3rem] shrink-0 sm:h-[3.55rem] sm:w-[6.6rem] lg:h-[3.8rem] lg:w-[7rem]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left"
              sizes="(min-width: 1024px) 112px, (min-width: 640px) 105px, 85px"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="crece-display truncate text-[0.95rem] font-semibold tracking-[-0.04em] text-[#163126] sm:text-[1.15rem]">
              {siteContent.brand.name}
            </div>
            <div className="truncate text-[0.5rem] uppercase tracking-[0.22em] text-[#6a7b6f] sm:text-[0.66rem] sm:tracking-[0.24em]">
              {siteContent.brand.tagline}
            </div>
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
