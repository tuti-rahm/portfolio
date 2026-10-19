const certifications = [
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    validity: "Since 03/2023",
  },
  {
    name: "Certified ICT Project Manager (CITPM)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    validity: "Valid 08/2024 – 08/2027",
  },
  {
    name: "Certified System Analyst (CSA)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    validity: "Valid 08/2024 – 08/2027",
  },
];

const education = [
  {
    degree: "Master of Information Technology",
    institution: "University of Indonesia",
    year: "2009",
    note: "GPA 3.5 / 4.0",
  },
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "Sepuluh Nopember Institute of Technology (ITS)",
    year: "2004",
  },
];

const Education = () => {
  return (
    <section id="credentials" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-5xl">Credentials</h2>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="border-b-2 border-signal/40 pb-3 font-semibold text-signal">Certifications</h3>
            <ul className="divide-y divide-line/70">
              {certifications.map((cert) => (
                <li key={cert.name} className="py-5">
                  <p className="font-semibold">{cert.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-1 text-sm tabular-nums text-foreground/70">{cert.validity}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="border-b-2 border-spark/40 pb-3 font-semibold text-spark">Education</h3>
            <ul className="divide-y divide-line/70">
              {education.map((edu) => (
                <li key={edu.degree} className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                    {edu.note && <p className="mt-1 text-sm text-foreground/70">{edu.note}</p>}
                  </div>
                  <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{edu.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
