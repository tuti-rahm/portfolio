import { Bot, Workflow } from "lucide-react";

const aiSkills = {
  agents: [
    "Microsoft Copilot Studio",
    "AI agent design",
    "Prompt engineering",
    "Knowledge-source design",
    "Multi-agent concepts",
    "AI use-case discovery",
  ],
  automation: ["Microsoft Power Automate", "n8n", "Workflow automation", "API integration"],
};

const foundations = [
  {
    category: "Delivery & DevOps",
    color: "text-signal border-signal/40",
    skills: ["SAFe", "Scrum", "Agile coaching", "Azure DevOps", "Jira", "ClickUp", "SDLC", "Sprint planning", "Delivery metrics"],
  },
  {
    category: "Business & product",
    color: "text-rose border-rose/40",
    skills: ["Business/system analysis", "Requirements gathering", "SRS", "PRD", "User stories", "MVP definition", "Prioritization", "Product lifecycle"],
  },
  {
    category: "Data & reporting",
    color: "text-spark border-spark/40",
    skills: ["Power BI", "SQL", "Oracle", "MySQL", "SQL Server", "Project dashboards", "Delivery analytics"],
  },
  {
    category: "Technical background",
    color: "text-foreground border-line",
    skills: ["PHP", "Oracle HRMS/Payroll", "Software development", "System analysis", "Enterprise application delivery"],
  },
];

const Chip = ({ children }: { children: string }) => (
  <li className="rounded-md border border-live/30 bg-live/[0.06] px-3 py-1.5 text-sm text-foreground">
    {children}
  </li>
);

const Skills = () => {
  return (
    <section id="skills" className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-5xl">Skills</h2>
          <p className="mt-4 text-muted-foreground">
            Two decades of delivery practice, now pointed at AI agents and automation.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-live/30 bg-background/60 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold text-live">
                <Bot className="h-5 w-5" aria-hidden="true" />
                AI & agent building
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aiSkills.agents.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold text-live">
                <Workflow className="h-5 w-5" aria-hidden="true" />
                Automation
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aiSkills.automation.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((group) => (
            <div key={group.category}>
              <h3 className={`border-b-2 pb-3 font-semibold ${group.color}`}>{group.category}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {group.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Languages:</span> English, professional
          working proficiency
        </p>
      </div>
    </section>
  );
};

export default Skills;
