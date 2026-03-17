import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-[#0f4e2f]/8 py-6 sm:py-8">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-[#6d7d70] sm:flex-row sm:items-center">
        <p>{siteContent.footer.legal}</p>
        <div className="flex flex-wrap items-center gap-4">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-[#173225]">
              {item.label}
            </a>
          ))}
          <a
            href={`https://${siteContent.contact.website}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#a86715] transition-colors duration-300 hover:text-[#8d5910]"
          >
            {siteContent.footer.websiteLabel}
          </a>
        </div>
      </Container>
    </footer>
  );
}
