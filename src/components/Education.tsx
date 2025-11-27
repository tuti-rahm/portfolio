import { GraduationCap, Award as AwardIcon } from "lucide-react";
import { Card } from "./ui/card";

const education = [
  {
    degree: "Master in Information Technology",
    institution: "University of Indonesia",
    period: "01/2007 - 01/2009",
    gpa: "3.5 of 4"
  },
  {
    degree: "Bachelor in Informatics Engineering",
    institution: "Sepuluh Nopember Institute of Technology",
    period: "07/1997 - 06/2004"
  }
];

const certifications = [
  {
    name: "Professional Scrum Master (PSM) I",
    issuer: "Scrum.org",
    period: "03/2023 - Present"
  },
  {
    name: "Certified ICT Project Manager (CITPM)",
    issuer: "National Professional Certification Agency (Badan Nasional Sertifikasi Profesi)",
    period: "08/2024 - 08/2027"
  },
  {
    name: "Certified System Analyst (CSA)",
    issuer: "National Professional Certification Agency (Badan Nasional Sertifikasi Profesi)",
    period: "08/2024 - 08/2027"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-4xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                    {edu.gpa && (
                      <p className="text-sm text-primary font-medium">GPA: {edu.gpa}</p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <AwardIcon className="w-8 h-8 text-accent" />
                <h2 className="font-heading text-4xl font-bold">Certifications</h2>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <h3 className="font-heading text-lg font-semibold mb-2 text-accent">
                      {cert.name}
                    </h3>
                    <p className="text-foreground font-medium mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.period}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
