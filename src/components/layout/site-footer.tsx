import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navItems, contactInfo } from "@/lib/constants/site";
import { productCategories } from "@/lib/data/product-categories";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={contactInfo.shortName}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-heading text-lg font-semibold uppercase tracking-wide text-white">
              {contactInfo.shortName}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {contactInfo.companyName} — your trusted partner for genuine, OEM, and high-quality
            aftermarket spare parts for commercial and passenger vehicles across the UAE, GCC, and
            MENA regions.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold-light">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold-light">
            Product Range
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {productCategories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <Link href="/products" className="transition-colors hover:text-gold-light">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold-light">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>
                {contactInfo.address}, {contactInfo.city}, {contactInfo.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-gold-light">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-light">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} {contactInfo.companyName}. All rights reserved.
          </p>
          <p>Quality Parts • Competitive Prices • Reliable Service • On-Time Delivery</p>
        </Container>
      </div>
    </footer>
  );
}
