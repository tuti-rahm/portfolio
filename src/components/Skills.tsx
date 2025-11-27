import { Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Project Management",
    skills: [
      { name: "IT Project Management", level: "Advanced" },
      { name: "Agile", level: "Advanced" },
      { name: "Scrum", level: "Advanced" },
      { name: "SDLC", level: "Advanced" },
      { name: "Product Management", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "ClickUp", level: "Advanced" },
      { name: "JIRA", level: "Advanced" },
      { name: "Microsoft Project", level: "Advanced" },
      { name: "Notion", level: "Advanced" },
      { name: "Trello", level: "Advanced" }
    ]
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "Business/System Analysis", level: "Expert" },
      { name: "HRIS", level: "Advanced" },
      { name: "ERP", level: "Intermediate" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-accent/20 text-accent border-accent/30";
    case "Advanced":
      return "bg-primary/20 text-primary border-primary/30";
    case "Intermediate":
      return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    default:
      return "bg-muted/20 text-muted-foreground border-muted/30";
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-semibold ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6 p-6 bg-card border-border">
            <h3 className="font-heading text-xl font-semibold mb-4">Languages</h3>
            <div className="flex gap-4">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30 text-sm">
                English - Intermediate
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
