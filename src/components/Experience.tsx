import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    period: "08/2025 - Present",
    title: "Project Manager",
    company: "Valuesion (Val Solusi Indonesia)",
    description: [
      "Led ClickUp implementation project for CIMB, managing end-to-end delivery from requirement gathering, configuration, to user adoption.",
      "Designed and deployed customized workflows and dashboards, enhancing visibility, task tracking, and reporting for multiple CIMB teams."
    ]
  },
  {
    period: "10/2024 - 08/2025",
    title: "Project Manager",
    company: "Mitreka Solusi Indonesia",
    description: [
      "Enhanced project delivery efficiency by optimizing resource allocation, reducing waste, and addressing bottlenecks.",
      "Delivered projects on time and under budget by diligently overseeing resource utilization, cost control measures, and scope management.",
      "Successfully managed multiple projects simultaneously by prioritizing tasks according to urgency, resource availability, and alignment with organizational goals."
    ]
  },
  {
    period: "04/2024 - 10/2024",
    title: "Scrum Master",
    company: "Insura Media Solusi",
    placement: "Placement: IBID Digital (PT Balai Lelang Serasi, member of ASTRA)",
    description: [
      "Facilitated Scrum framework – sprint planning, backlog refinement, daily scrums, sprint reviews, and sprint retrospectives.",
      "Developed custom Scrum dashboards for better task tracking and transparency within the team.",
      "Collaborated with Product Owners to refine requirements and ensure alignment with business goals.",
      "Coached cross-functional teams on Agile principles, leading to an increase in successful project deliveries."
    ]
  },
  {
    period: "01/2022 - 11/2023",
    title: "Software Project Manager",
    company: "Dans Multi Pro",
    description: [
      "Coordinated and supervised development teams for Telkomsel's B2B and B2B2C projects.",
      "Led operation and support team for Legacy apps support and maintenance."
    ]
  },
  {
    period: "06/2021 - 12/2021",
    title: "Project Manager",
    company: "Phincon",
    description: [
      "Managed the Telkomsel Payment Gateway project and supported Blibli Genesys."
    ]
  },
  {
    period: "10/2019 - 01/2021",
    title: "Lecturer",
    company: "Amikom University",
    description: [
      "Taught courses in informatics engineering and information system."
    ]
  },
  {
    period: "05/2019 - 06/2021",
    title: "Scrum Experience",
    company: "Infiniti Cipta Teknologi",
    description: [
      "Delivered multiple applications in a Scrum environment as a Business Analyst and Scrum Master."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
