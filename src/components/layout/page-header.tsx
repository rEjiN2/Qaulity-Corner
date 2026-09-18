import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/home-banner.png"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />

      <Container className="relative pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pt-52">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50">
          <Link href="/" className="transition-colors hover:text-gold-light">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold-light">{title}</span>
        </nav>

        <h1 className="mt-5 text-balance font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
