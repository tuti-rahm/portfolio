type Role = {
  period: string;
  title: string;
  company: string;
  placement?: string;
  description: string[];
};

const experiences: Role[] = [
  {
    period: "03/2026 - Present",
    title: "Scrum Master",
    company: "PT Berlian Sistem Informasi (BSI)",
    placement: "SAFe environment • Multiple squads • Azure DevOps",
    description: [
      "Manage Agile/SAFe development processes within the dealership product team across multiple squads.",
      "Facilitate Agile and SAFe events and support teams in maintaining delivery flow, transparency, and alignment.",
      "Monitor team performance metrics such as velocity and burn-down trends to assess progress and identify improvement areas.",
      "Actively monitor product quality and delivery readiness within the managed product team.",
      "Identify and remove impediments, including dependencies and resource constraints, coordinating resolution with Scrum Masters, RTE, Unit Head, and management.",
      "Encourage team collaboration, accountability, and self-organization while supporting continuous improvement.",
      "Use Azure DevOps and delivery tracking practices to maintain visibility of work status, follow-ups, risks, and dependencies."
    ]
  },
  {
    period: "08/2025 - 02/2026",
    title: "Project Manager",
    company: "Valuesion (Val Solusi Indonesia)",
    description: [
      "Led ClickUp implementation for CIMB from requirements through configuration, rollout, and user adoption.",
      "Supported onboarding of 1,300 users within 6 months and achieved an estimated 40–55% annual cost savings.",
      "Translated business requirements into implementation activities and coordinated stakeholders through delivery."
    ]
  },
  {
    period: "10/2024 - 08/2025",
    title: "Project Manager",
    company: "Mitreka Solusi Indonesia",
    description: [
      "Managed software projects, optimizing resource allocation, delivery priorities, and bottleneck resolution.",
      "Delivered two projects on schedule while coordinating cross-functional teams and client expectations.",
      "Improved productivity through workload distribution based on team capabilities."
    ]
  },
  {
    period: "04/2024 - 10/2024",
    title: "Scrum Master",
    company: "Insura Media Solusi",
    placement: "Placement: IBID Digital (PT Balai Lelang Serasi, Astra Group)",
    description: [
      "Facilitated Sprint Planning, Backlog Refinement, Daily Scrum, Sprint Review, and Retrospective.",
      "Developed Scrum dashboards to improve delivery visibility and task tracking.",
      "Collaborated with Product Owners to refine requirements and align delivery with business goals.",
      "Coached cross-functional teams on Agile practices and continuous improvement."
    ]
  },
  {
    period: "01/2022 - 11/2023",
    title: "Software Project Manager",
    company: "Dans Multi Pro",
    description: [
      "Coordinated software development teams for Telkomsel B2B and B2B2C projects.",
      "Led operation and support teams for legacy application support and maintenance."
    ]
  },
  {
    period: "06/2021 - 12/2021",
    title: "Project Manager",
    company: "Phincon",
    description: [
      "Managed the Telkomsel Payment Gateway project and supported Blibli Genesys.",
      "Oversaw support and maintenance projects for government data systems."
    ]
  },
  {
    period: "05/2019 - 06/2021",
    title: "Business Analyst / Scrum Master",
    company: "Infiniti Cipta Teknologi",
    description: [
      "Delivered multiple applications in a Scrum environment as Business Analyst and Scrum Master.",
      "Bridged business requirements, product needs, and software delivery."
    ]
  },
  {
    period: "10/2019 - 01/2021",
    title: "Lecturer",
    company: "Amikom University",
    description: [
      "Taught Informatics Engineering and Information Systems courses."
    ]
  },
  {
    period: "08/2016 - 11/2017",
    title: "Product Manager / Project Manager",
    company: "Indivara (Jatis Group)",
    description: [
      "Managed internal projects and products as Product Manager / Project Manager."
    ]
  },
  {
    period: "02/2014 - 01/2016",
    title: "Oracle HRMS Payroll Consultant",
    company: "Perusahaan Gas Negara",
    description: [
      "Consulted on Oracle HRMS Payroll solutions and implementations."
    ]
  },
  {
    period: "09/2013 - 01/2014",
    title: "Oracle HRMS Payroll Consultant",
    company: "Stone Apple Solutions",
    description: [
      "Provided Oracle consulting services."
    ]
  },
  {
    period: "08/2009 - 08/2013",
    title: "Oracle Consultant",
    company: "Jatis Solutions",
    description: [
      "Handled Oracle consulting needs for various clients."
    ]
  },
  {
    period: "10/2005 - 07/2009",
    title: "Programmer",
    company: "VICO Indonesia",
    description: [
      "Worked as PHP programmer across multiple projects."
    ]
  },
  {
    period: "2004 - 2005",
    title: "System Analyst / Programmer / Oracle Developer",
    company: "QXPoint / indo.com / Sisindosat",
    description: [
      "Worked across system analysis, PHP programming, and Oracle development."
    ]
  }
];

// Roles from 2019 onward are shown in full; earlier roles as a compact list.
const recent = experiences.slice(0, 8);
const earlier = experiences.slice(8);

const Experience = () => {
  return (
    <section id="experience" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-5xl">Experience</h2>
          <p className="mt-4 text-muted-foreground">
            From PHP programmer to Scrum Master in a SAFe setup, across telco, banking, energy and
            automotive clients.
          </p>
        </div>

        <ol className="mt-14 md:mt-16">
          {recent.map((exp, index) => {
            const isCurrent = index === 0;
            return (
              <li key={exp.company + exp.period} className="grid gap-x-10 md:grid-cols-[11rem_1fr]">
                <p
                  className={`pb-2 pt-1 text-sm tabular-nums md:pb-0 md:text-right ${
                    isCurrent ? "font-medium text-live" : "text-muted-foreground"
                  }`}
                >
                  {exp.period.replace(" - ", " – ")}
                </p>

                <div
                  className={`relative border-l-2 border-line pl-7 ${
                    index === recent.length - 1 ? "pb-2" : "pb-12"
                  }`}
                >
                  <span
                    className={`absolute -left-[7px] top-2 h-3 w-3 rounded-full ${
                      isCurrent ? "now-pulse bg-live" : "border-2 border-spark bg-background"
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold tracking-tight">{exp.title}</h3>
                  <p className="mt-1 font-medium text-signal">{exp.company}</p>
                  {exp.placement && (
                    <p className="mt-1 text-sm text-muted-foreground">{exp.placement}</p>
                  )}
                  <ul className="mt-4 max-w-[68ch] space-y-2 text-[0.95rem] leading-relaxed text-foreground/80">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="relative pl-4">
                        <span
                          className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-muted-foreground"
                          aria-hidden="true"
                        />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 grid gap-x-10 md:grid-cols-[11rem_1fr]">
          <p className="pb-4 text-sm text-muted-foreground md:text-right">2004 – 2017</p>
          <div>
            <h3 className="text-lg font-semibold">Earlier roles</h3>
            <ul className="mt-4 divide-y divide-line/70 border-y border-line/70">
              {earlier.map((exp) => (
                <li
                  key={exp.company + exp.period}
                  className="grid gap-1 py-3.5 text-sm sm:grid-cols-[8.5rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="tabular-nums text-muted-foreground">
                    {exp.period.replace(" - ", " – ")}
                  </span>
                  <span className="font-medium">{exp.title}</span>
                  <span className="text-muted-foreground sm:text-right">{exp.company}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
