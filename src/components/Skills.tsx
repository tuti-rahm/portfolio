import { Award, Bot, Workflow, Database, Code2, Briefcase, GitBranch } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "AI & Agent Building",
    icon: Bot,
    highlight: true,
    skills: [
      "Microsoft Copilot Studio",
      "AI agent design",
      "Prompt engineering",
      "Knowledge-source design",
      "Multi-agent concepts",
      "AI use-case discovery"
    ]
  },
  {
    category: "Automation",
    icon: Workflow,
    highlight: true,
    skills: [
      "Microsoft Power Automate",
      "n8n",
      "Workflow automation",
      "API integration"
    ]
  },
  {
    category: "Delivery & DevOps",
    icon: GitBranch,
    skills: [
      "SAFe",
      "Scrum",
      "Agile Coaching",
      "Azure DevOps",
      "Jira",
      "ClickUp",
      "SDLC",
      "Sprint Planning",
      "Delivery metrics"
    ]
  },
  {
    category: "Business & Product",
    icon: Briefcase,
    skills: [
      "Business/System Analysis",
      "Requirements gathering",
      "SRS",
      "PRD",
      "User stories",
      "MVP definition",
      "Prioritization",
      "Product lifecycle"
    ]
  },
  {
    category: "Data & Reporting",
    icon: Database,
    skills: [
      "Power BI",
      "SQL",
      "Oracle",
      "MySQL",
      "SQL Server",
      "Project dashboards",
      "Delivery analytics"
    ]
  },
  {
    category: "Technical Background",
    icon: Code2,
    skills: [
      "PHP",
      "Oracle HRMS/Payroll",
      "Software development",
      "System analysis",
      "Enterprise application delivery"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                    category.highlight
                      ? "border-accent/30 hover:border-accent/50"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className={`w-5 h-5 ${category.highlight ? "text-accent" : "text-primary"}`} />
                    <h3
                      className={`font-heading text-xl font-semibold ${
                        category.highlight ? "text-accent" : "text-primary"
                      }`}
                    >
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm font-medium bg-muted/30 text-foreground border-border"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-6 p-6 bg-card border-border">
            <h3 className="font-heading text-xl font-semibold mb-4">Languages</h3>
            <div className="flex gap-4">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 text-sm">
                English - Professional working proficiency
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
