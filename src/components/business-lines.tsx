import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { AnimatedSection } from "./animated-section";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const icons = [BriefcaseBusiness, GraduationCap];

export function BusinessLines() {
  return (
    <AnimatedSection id="mas-servicios" className="relative py-16 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,43,29,.97),rgba(16,60,37,.96),rgba(22,70,43,.94))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(137,182,74,.12),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(214,139,31,.14),transparent_18%)]" />
      <Container>
        <div className="relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03))] p-5 shadow-[0_36px_100px_rgba(9,27,18,0.2)] backdrop-blur-xl sm:rounded-[2.6rem] sm:p-8 lg:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,196,106,.42),rgba(255,255,255,.12),transparent)]" />
          <div className="crece-glow-green absolute -left-12 top-8 h-44 w-44 rounded-full blur-3xl opacity-80" />
          <div className="crece-glow-gold absolute -right-10 bottom-8 h-44 w-44 rounded-full blur-3xl opacity-80" />

          <SectionHeading
            eyebrow={siteContent.businessLines.eyebrow}
            title={siteContent.businessLines.title}
            description={siteContent.businessLines.description}
            theme="dark"
          />

          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2">
            {siteContent.businessLines.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const warm = index === 0;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.05))] p-5 text-white shadow-[0_24px_60px_rgba(9,27,18,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-white/18 sm:rounded-[1.95rem] sm:p-7"
                >
                  <div
                    className={`inline-flex rounded-[1.15rem] border p-3 ${
                      warm
                        ? "border-[#f0c46a]/28 bg-[#f0c46a]/16 text-[#f0c46a]"
                        : "border-[#89b64a]/22 bg-[#89b64a]/14 text-[#cde599]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/64 sm:text-[0.72rem]">{item.label}</div>
                  <h3 className="crece-display mt-3 text-[1.55rem] leading-[1.02] font-semibold tracking-[-0.05em] text-white sm:text-[1.95rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-7 text-white/76">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c46a]">
                    {item.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:mt-9 lg:flex-row lg:items-center lg:pt-9">
            <p className="max-w-[36rem] text-sm leading-7 text-white/68">
              Para ver el portafolio completo de CRECE, continúa en su sitio principal.
            </p>
            <a
              href={siteContent.businessLines.websiteCta.href}
              target="_blank"
              rel="noreferrer"
              className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {siteContent.businessLines.websiteCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
