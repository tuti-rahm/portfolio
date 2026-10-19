import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

const experiences = [
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

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium mb-2">{exp.company}</p>
                      {exp.placement && (
                        <p className="text-sm text-muted-foreground italic mb-3">{exp.placement}</p>
                      )}
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Experience;
