"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { headerNavLeft, headerNavRight, contactInfo } from "@/lib/constants/site";

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors",
        isActive ? "text-gold-light" : "text-white/75 hover:text-white"
      )}
    >
      {label}
    </Link>
  );
}

function TopBar() {
  return (
    <div className="hidden border-t border-white/10 bg-black/40 lg:block">
      <Container className="flex h-10 items-center justify-between text-xs text-white/70">
        <div className="flex items-center gap-4">
          <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold-light">
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold-light">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
          <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-colors hover:text-gold-light">
            <MessageCircle className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-medium uppercase tracking-wide">
            EN
            <ChevronDown className="h-3 w-3" />
          </span>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 transition-colors hover:text-gold-light">
            <Phone className="h-3.5 w-3.5" />
            {contactInfo.phoneDisplay}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-light">
            <Mail className="h-3.5 w-3.5" />
            {contactInfo.email}
          </a>
        </div>
      </Container>
    </div>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/60">
      <Container className="relative z-50 flex h-24 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden items-center gap-8 lg:col-start-1 lg:flex">
          {headerNavLeft.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} isActive={isItemActive(item.href)} />
          ))}
        </nav>

        <Link
          href="/"
          className="flex items-center lg:col-start-2 lg:justify-self-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={contactInfo.shortName}
            width={84}
            height={84}
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            priority
          />
        </Link>

        <div className="flex items-center justify-end gap-2 lg:col-start-3">
          <nav className="hidden items-center gap-8 lg:flex">
            {headerNavRight.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} isActive={isItemActive(item.href)} />
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-[5px] p-2 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <TopBar />

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} isItemActive={isItemActive} />
    </header>
  );
}
