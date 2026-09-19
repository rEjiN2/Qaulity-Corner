import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/hero-10-utils/button";

export interface CtaProps {
  ctaEnabled?: boolean;
  text: string;
  link: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export function Cta({ cta }: { cta: CtaProps }) {
  const { text, link, variant, size } = cta;

  if (!link) {
    return (
      <Button variant={variant} size={size}>
        {text}
      </Button>
    );
  }

  const isExternal = /^https?:\/\//.test(link);

  return (
    <Button asChild variant={variant} size={size}>
      <Link
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {text}
      </Link>
    </Button>
  );
}
