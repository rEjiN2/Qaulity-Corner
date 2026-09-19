import { WhatsAppIcon } from "@/components/icons/social-icons";
import { contactInfo } from "@/lib/constants/site";

export function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-[5px] bg-gold text-ink shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 hover:bg-gold-light sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
