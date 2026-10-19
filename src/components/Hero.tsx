import { Mail, MapPin, Phone } from "lucide-react";

const START = 2004;
const NOW = 2026;
const SPAN = NOW - START;

// Career eras, derived from the CV. The AI era has no start year in the CV,
// so it is drawn as an open, forward-running extension after "now".
const eras = [
  {
    name: "Developer",
    detail: "PHP and Oracle development",
    from: 2004,
    to: 2009,
    bar: "bg-spark",
    text: "text-spark",
  },
  {
    name: "Oracle consultant",
    detail: "HRMS and payroll implementations",
    from: 2009,
    to: 2016,
    bar: "bg-rose",
    text: "text-rose",
  },
  {
    name: "Product, project & Scrum",
    detail: "Telkomsel, CIMB, Astra, BSI",
    from: 2016,
    to: 2026,
    bar: "bg-signal",
    text: "text-signal",
  },
];

const CareerTrack = () => (
  <figure className="mt-16 md:mt-20" aria-labelledby="career-track-caption">
    <figcaption id="career-track-caption" className="sr-only">
      Career from 2004 to today: developer 2004 to 2009, Oracle consultant 2009 to 2016,
      product, project and Scrum roles 2016 to today, now expanding into AI and automation.
    </figcaption>

    {/* Desktop: proportional horizontal track */}
    <div className="hidden md:block" aria-hidden="true">
      <div className="flex">
        <div className="flex" style={{ width: "84%" }}>
          {eras.map((era, i) => (
            <div
              key={era.name}
              className="track-label pr-4"
              style={{
                width: `${((era.to - era.from) / SPAN) * 100}%`,
                animationDelay: `${0.5 + i * 0.45}s`,
              }}
            >
              <p className={`text-sm font-semibold ${era.text}`}>{era.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{era.detail}</p>
            </div>
          ))}
        </div>
        <div className="track-label pl-1" style={{ width: "16%", animationDelay: "1.9s" }}>
          <p className="text-sm font-semibold text-live">AI & automation</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Copilot Studio, Power Automate, n8n</p>
        </div>
      </div>

      <div className="relative mt-4 flex h-2 items-center">
        <div className="track-fill flex h-2 gap-1" style={{ width: "84%" }}>
          {eras.map((era) => (
            <div
              key={era.name}
              className={`h-full rounded-full ${era.bar}`}
              style={{ width: `${((era.to - era.from) / SPAN) * 100}%` }}
            />
          ))}
        </div>
        <span className="now-pulse relative z-10 -ml-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-background bg-live" />
        <div
          className="track-label h-0 flex-1 border-t-2 border-dashed border-live/70"
          style={{ animationDelay: "1.9s" }}
        />
      </div>

      <div className="mt-3 flex text-xs tabular-nums text-muted-foreground">
        <div className="flex" style={{ width: "84%" }}>
          {eras.map((era) => (
            <span key={era.name} style={{ width: `${((era.to - era.from) / SPAN) * 100}%` }}>
              {era.from}
            </span>
          ))}
        </div>
        <span className="-ml-3 font-medium text-live">Now</span>
      </div>
    </div>

    {/* Mobile: the same eras as a vertical sequence */}
    <ol className="space-y-5 border-l-2 border-line pl-5 md:hidden">
      {eras.map((era) => (
        <li key={era.name} className="relative">
          <span className={`absolute -left-[27px] top-1.5 h-3 w-3 rounded-full ${era.bar}`} />
          <p className="text-xs tabular-nums text-muted-foreground">
            {era.from} – {era.to === NOW ? "today" : era.to}
          </p>
          <p className={`font-semibold ${era.text}`}>{era.name}</p>
          <p className="text-sm text-muted-foreground">{era.detail}</p>
        </li>
      ))}
      <li className="relative">
        <span className="now-pulse absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-live" />
        <p className="text-xs text-live">Now</p>
        <p className="font-semibold text-live">AI & automation</p>
        <p className="text-sm text-muted-foreground">Copilot Studio, Power Automate, n8n</p>
      </li>
    </ol>
  </figure>
);

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-spark/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
          Scrum Master at PT Berlian Sistem Informasi
        </p>

        <h1 className="mt-7 text-5xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-[5.5rem]">
          Tuti Rahmawati
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-light leading-snug text-foreground/90 md:text-[1.75rem] md:leading-[1.3]">
          22 years of shipping IT systems, from code to SAFe delivery. Now building AI agents
          and automations that fit into how teams already work.
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          I translate operational problems into practical AI and automation use cases: designing
          workflows, structuring prompts and knowledge sources, and connecting AI with delivery
          processes in Microsoft Copilot Studio and Power Automate.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="rounded-md bg-signal px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            See experience
          </a>
          <a
            href="mailto:tuti.rahmawati.id@gmail.com"
            className="rounded-md border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-signal/60 hover:text-signal"
          >
            Email me
          </a>
          <span className="ml-1 text-sm text-muted-foreground">
            Certified PSM I, CITPM and CSA
          </span>
        </div>

        <CareerTrack />

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <li>
            <a href="mailto:tuti.rahmawati.id@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4" aria-hidden="true" />
              tuti.rahmawati.id@gmail.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/6281284699161" className="inline-flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" aria-hidden="true" />
              +62 812 8469 9161
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Jakarta, Indonesia
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
