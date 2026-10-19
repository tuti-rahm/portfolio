import { MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line/60 bg-surface/40">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-rose/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.025em] md:text-5xl md:leading-[1.1]">
          Need steady Agile delivery or a practical AI agent? Let's talk.
        </h2>

        <a
          href="mailto:tuti.rahmawati.id@gmail.com"
          className="mt-10 inline-block break-all text-2xl font-semibold text-signal underline decoration-signal/40 decoration-2 underline-offset-[10px] transition-colors hover:decoration-signal sm:text-3xl md:text-4xl"
        >
          tuti.rahmawati.id@gmail.com
        </a>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-muted-foreground">
          <li>
            <a
              href="https://wa.me/6281284699161"
              className="inline-flex items-center gap-2.5 transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp +62 812 8469 9161
            </a>
          </li>
          <li className="inline-flex items-center gap-2.5">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Jakarta, Indonesia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
