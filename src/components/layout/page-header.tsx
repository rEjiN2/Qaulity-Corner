import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getBreadcrumbJsonLd } from "@/lib/seo/structured-data";

export function PageHeader({
  title,
  description,
  image = "/home-banner.png",
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  path: string;
}) {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: title, path },
  ]);

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-ink text-white sm:min-h-[680px] lg:min-h-[760px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/30" />

      <Container className="relative py-16">
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
