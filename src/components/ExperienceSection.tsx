import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import { title } from "process";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Business Systems Analyst III | Product Manager in Business Intelligence",
      company: "Arch Capital Group",
      location: "Raleigh, NC",
      duration: "Feb 2024 - Present",
      description: "Leading strategic initiatives in business intelligence reporting & insights, as well as data architecture modernization.",
      achievements: [
        "Led the design, implementation and launch of a new transaction flow supporting 2nd liens business growth at Arch MI.",
        "Modernized BI platform by developing Power BI dashboards with AI enabled Q&A, while integrating and repurposing legacy Cognos reports.",
        "Built and maintained a strategic product roadmap aligning business and technology priorities, and managed iterative delivery through feature and story breakdowns.",
        "Engineered a Python-based data lineage system tracking 300+ reports, bridging technical and business understanding.",
        "Built correlation on report similatiry analysis and duplicate data identification.",
        "Optimized production release cycles by refining change management, enhancing product lifecycle control.",
        "Led cloud migration planning for product that leveraged Azure."
      ],
      technologies: ["Snowflake", "IBM Cognos", "PowerBI", "Data Vault", "SQL","Coalesc", "Python" ]
    },
    {
      title: "Business Systems Analyst III - Alternative Markets",
      company: "Arch Capital Group",
      location: "Raleigh, NC",
      duration: "Nov 2022 - Feb 2024",
      description: "Modernized loan data systems through UI/UX design, data validation architecture, and ML-driven analytics to enable data-driven lending decisions.",
      achievements: [
        "Designed and delivered intuitive UI/UX solutions for loan data ingestion and analysis platforms using Balsamiq, enhancing user experience while adhering to customer-centric product management methodologies.",
        "Engineered comprehensive data validation frameworks with automated rule sets to detect and flag inconsistencies across multiple market data sources, ensuring data integrity and reliability.",
        "Architected enterprise data flow systems to establish a unified golden source of loan data, enabling strategic data-driven decision making across business operations.",
        "Developed machine learning classification models as proof-of-concept solutions to optimize loan purchase identification processes, demonstrating advanced analytical capabilities and innovation."
      ],
      technologies: ["Azure", "Python", "Databricks", "UI/UX", "SQL", "Balsamiq" ]
    },
    {
      title: "Business Analyst | Product Owner",
      company: "Credit Suisse",
      location: "Raleigh, NC",
      duration: "Feb 2020 - Nov 2022",
      description: "Delivered global reconciliation technology solutions across NA/EU/UK jurisdictions while leading cross-functional teams and translating regulatory requirements into technical specifications.",
      achievements: [
        "Responded to regulatory changes by discerning the functional variations and transforming them to technical specifications.",
        "Fostered a strong relationship with the business and partner IT teams.",
        "Cultivated off-shore team in production incident resolutions and business processes.",
        "Performed hands-on data analysis for production query resolutions."
      ],
      technologies: ["Python", "Unix", "Reconciliation", "SQL", "Grisham Rcon Tool", "MS Office Suite", "Confluence", "Jira" ]
    },
    {
      title: "Business Systems Analyst (Quality Assurance)",
      company: "Deutsche Bank",
      location: "Cary, NC",
      duration: "Oct 2015 - Feb 2020",
      description: "Led global equity regulatory reporting (CAT, OATS, MIFID II, SFC) to international regulators while spearheading data normalization initiatives and FIX message mapping across Deutsche Bank's trading platforms.",
      achievements: [
        "My primary duty was to understand the new requirements and variations to existing reports, document them, and validated the reports generated from our reporting engine.",
        "Was instrumental in data normalization initiative for all equity trading applications across global Deutsche Bank locations.",
        "Played a significant role in creating a data dictionary which enabled the mapped of FIX transaction messages flow for different trade flows.",
        "Received multiple recognitions in this job."
      ],
      technologies: ["SQL", "python", "Unix", "Cucumber", "Git", "TeamCity", "Jenkins" ]
    },
    {
      title: "Senior Systems Analyst",
      company: "Wells Fargo",
      location: "Charlotte, NC",
      duration: "Aug 2013 - Oct 2015",
      description: "Delivered dual business and quality analysis for commodities trading platforms, achieving 0% production defect rate over two years while leading UI/UX modernization initiatives.",
      achievements: [
        "Worked on portfolio management, risk management and trade caption applications.",
        "Had a good exposure to Openlink's Endur application during this job.",
        "Was a guiding force in building a new UI of the application. Focus was on creating an impressive UX.",
        "A feather in the hat was having a 0% defect leakage in production release over a span of over two years."
      ],
      technologies: ["MS Office Suite", "Unix", "SQL", "Openlink Endur","ICE"]     
    },
    {
      title: "Business Systems Analyst",
      company: "Capital Group Companies",
      location: "Los Angeles, CA",
      duration: "Oct 2009 - Jul 2013",
      description: "Managed fixed income data analytics and application validation processes while ensuring system stability and delivering cost savings through strategic resource optimization.",
      achievements: [
        "Ensured stability, enhancement verifications and regression validations of a multitude of fixed income applications.",
        "Achieved considerable savings in the project through proper resource allocation."
      ],
      technologies: ["SQL", "MS Office Suite", "HP Quality Center" ]
    }
  ];

  const education = [
    {
      degree: "Masters of Business Administration (MBA), Finance & Marketing",
      school: "Indian Institute of Technology (IIT) Roorkee",
      location: "Roorkee, India",
      duration: "2006 - 2008",
      // details: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering."
    },
    {
      degree: "Bachelor of Engineering (B.E.), Mechanical Engineering",
      school: "Manipal University",
      location: "Manipal, India",
      duration: "2002 - 2006",
      // details: "Graduated with Honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-lg text-primary mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:text-right gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 bottom-0 w-px h-8 bg-border translate-y-full"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-lg text-primary mt-1">{edu.school}</p>
                      </div>
                      <div className="flex flex-col sm:text-right gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}