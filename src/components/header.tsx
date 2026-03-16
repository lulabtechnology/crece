import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f1b64d]/10 bg-[#07110d]/84 backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between gap-3 py-3 sm:min-h-24 sm:gap-4 sm:py-4">
        <a href="#" className="min-w-0 flex-1 sm:flex-none">
          <div className="relative h-[48px] w-[136px] min-[380px]:h-[56px] min-[380px]:w-[164px] sm:h-[94px] sm:w-[320px] lg:h-[102px] lg:w-[380px]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left drop-shadow-[0_0_30px_rgba(167,203,76,0.14)]"
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 320px, (min-width: 380px) 164px, 136px"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.12em] text-[#d9decf] transition-colors duration-300 hover:text-[#f5efe4]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="crece-button-primary inline-flex shrink-0 items-center rounded-full px-3.5 py-2.5 text-[11px] font-semibold leading-none transition-transform duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm"
          aria-label="Agendar diagnóstico"
        >
          <span className="sm:hidden">Agenda</span>
          <span className="hidden sm:inline">Agendar diagnóstico</span>
        </a>
      </Container>
    </header>
  );
}
