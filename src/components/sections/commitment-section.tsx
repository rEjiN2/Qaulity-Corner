import { Container } from "@/components/ui/container";
import { contactInfo } from "@/lib/constants/site";

export function CommitmentSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[5px] bg-ink px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-noise-lines" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-[5px] border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Our Commitment
            </span>
            <p className="mt-6 text-balance text-lg leading-relaxed text-white/80">
              Customer satisfaction is at the heart of everything we do. We continuously strive to
              provide reliable products, exceptional service, and cost-effective solutions that
              help maximize vehicle performance, minimize downtime, and support the long-term
              success of our customers.
            </p>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/10 pt-8">
            {contactInfo.tagline.split(" • ").map((item, index, array) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light">
                  {item}
                </span>
                {index < array.length - 1 ? <span className="h-1 w-1 rounded-full bg-white/30" /> : null}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
