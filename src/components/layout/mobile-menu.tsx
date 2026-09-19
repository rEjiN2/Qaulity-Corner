"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/social-icons";
import { cn } from "@/lib/utils/cn";
import { navItems, contactInfo } from "@/lib/constants/site";

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

export function MobileMenu({
  isOpen,
  onClose,
  isItemActive,
}: {
  isOpen: boolean;
  onClose: () => void;
  isItemActive: (href: string) => boolean;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-noise-lines" />
          <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="h-24 shrink-0" aria-hidden="true" />

          <nav className="relative flex flex-1 flex-col justify-center px-8">
            <motion.ul variants={listVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col">
              {navItems.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <motion.li key={item.href} variants={itemVariants} className="border-b border-white/10">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between py-4 font-heading text-3xl font-semibold uppercase tracking-tight transition-colors sm:text-4xl",
                        active ? "text-gold-light" : "text-white/90 hover:text-gold-light"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight
                        className={cn(
                          "h-6 w-6 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
                          active && "translate-x-0 opacity-100"
                        )}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          <motion.div variants={itemVariants} initial="hidden" animate="visible" exit="exit" className="relative shrink-0 px-8 pb-10">
            <Link
              href="/contact"
              onClick={onClose}
              className="mb-8 flex items-center justify-center gap-2 rounded-[5px] bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Request a Quote
            </Link>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 transition-colors hover:text-gold-light">
                <Phone className="h-4 w-4 text-gold-light" />
                {contactInfo.phoneDisplay}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-light">
                <Mail className="h-4 w-4 text-gold-light" />
                {contactInfo.email}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5 text-white/70">
              <a href={contactInfo.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold-light">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold-light">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-colors hover:text-gold-light">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
