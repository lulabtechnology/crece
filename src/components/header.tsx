import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f1b64d]/10 bg-[#07100d]/82 backdrop-blur-xl">
      <Container className="flex min-h-22 items-center justify-between gap-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-[68px] w-[210px] sm:h-[74px] sm:w-[250px] lg:w-[280px]">
            <Image
              src={siteContent.brand.logo}
              alt={siteContent.brand.name}
              fill
              className="object-contain object-left drop-shadow-[0_0_28px_rgba(167,203,76,0.14)]"
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 250px, 210px"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#d4dbc8] transition-colors duration-300 hover:text-[#f3efe3]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="crece-button-primary inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
        >
          Agendar contacto
        </a>
      </Container>
    </header>
  );
}
