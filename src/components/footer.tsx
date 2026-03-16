import { siteContent } from "@/data/siteContent";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-[#f1b64d]/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-4 text-sm text-[#99a18f] sm:flex-row sm:items-center">
        <p>{siteContent.footer.legal}</p>
        <div className="flex items-center gap-4">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-300 hover:text-[#f3efe3]">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
