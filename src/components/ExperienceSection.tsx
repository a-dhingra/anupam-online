import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Business Systems Analyst III | Product Manager, Business Intelligence",
      company: "Arch Capital Group",
      location: "Raleigh, NC",
      duration: "Feb 2024 – Present",
      description: "Leading BI platform modernization at Arch MI — owning the full product lifecycle from executive roadmap to agile delivery across data engineering and reporting.",
      achievements: [
        "Defined a <strong>15-month BI modernization roadmap</strong> that secured <strong>$1.5M+</strong> in executive investment and aligned multiple business units on shared data priorities.",
        "Launched a new <strong>2nd lien transaction flow</strong> adding $500K+ insurance-in-force within 6 months; replaced legacy Cognos reports with <strong>AI-enabled Power BI dashboards</strong>.",
        "Engineered a <strong>Python-based data observability system</strong> tracking 300+ reports across 5 data sources — cutting incident resolution time by <strong>60%</strong> and release cycles from 6 hours to <strong>90 minutes</strong>."
      ],
      technologies: ["Snowflake", "Power BI", "Python", "IBM Cognos", "Data Vault", "SQL", "Azure"]
    },
    {
      title: "Business Systems Analyst III, Alternative Markets",
      company: "Arch Capital Group",
      location: "Raleigh, NC",
      duration: "Nov 2022 – Feb 2024",
      description: "Modernized loan data systems end-to-end — from UI/UX design and data validation architecture to ML-driven analytics — enabling data-driven lending decisions at scale.",
      achievements: [
        "Prevented <strong>$1M in erroneous loan purchases</strong> by engineering automated data validation rules across 5 market data sources, improving data accuracy from <strong>85% to 99%</strong>.",
        "Architected a <strong>golden source data pipeline</strong> consolidating 5 external systems into a single master repository, eliminating manual reconciliation and enabling real-time purchase decisions.",
        "Redesigned the <strong>UI/UX</strong> for loan data ingestion and analysis platforms using <strong>Figma and Balsamiq</strong>, conducting A/B tests with end users; developed an <strong>ML classification model</strong> (proof of concept) to optimize loan purchase identification."
      ],
      technologies: ["Azure", "Databricks", "Python", "SQL", "Figma", "Balsamiq", "UI/UX"]
    },
    {
      title: "Business Analyst | Product Owner",
      company: "Credit Suisse (UBS)",
      location: "Raleigh, NC",
      duration: "Feb 2020 – Nov 2022",
      description: "Product Owner for regulatory reconciliation technology across NA/EU/UK jurisdictions, driving the implementation and expansion of the Gresham platform while leading cross-functional delivery teams.",
      achievements: [
        "Expanded <strong>Gresham platform controls from 55 to 85</strong> across asset classes and jurisdictions, improving multi-jurisdictional reporting compliance and earning <strong>3 business excellence awards</strong>.",
        "Resolved <strong>100+ monthly data queries</strong> at 99% SLA compliance; led quarterly roadmap planning across 15+ regulatory initiatives, maintaining <strong>zero audit findings</strong>.",
        "Directed two cross-functional teams of <strong>12+ members</strong> spanning business, compliance, and technology — delivering all regulatory changes within mandated deadlines."
      ],
      technologies: ["Gresham Rcon", "Python", "SQL", "Unix", "Jira", "Confluence"]
    },
    {
      title: "Business Systems Analyst (Quality Assurance)",
      company: "Deutsche Bank",
      location: "Cary, NC",
      duration: "Oct 2015 – Feb 2020",
      description: "Led global equity regulatory reporting (CAT, OATS, MiFID II, SFC) and a company-wide data normalization initiative across Deutsche Bank's trading platforms, managing onshore and offshore teams.",
      achievements: [
        "Ensured accurate delivery of equity regulatory reports to global regulators, contributing to Deutsche Bank ranking in the <strong>top 3 investment banks</strong> on FINRA's Firm Summary Scorecard for <strong>6 consecutive months</strong>.",
        "Led data normalization across <strong>120 global equity trading applications</strong>, conforming all systems to a custom FIX protocol and mapping the full spectrum of trade flows and events.",
        "Designed a <strong>trade flow visualization tool</strong> enabling analysis of 100K+ daily transactions with zero training required; built QA automation (Cucumber) with <strong>100% business flow coverage</strong>."
      ],
      technologies: ["SQL", "Python", "Cucumber", "Unix", "Git", "Jenkins", "TeamCity"]
    },
    {
      title: "Senior Systems Analyst",
      company: "Wells Fargo",
      location: "Charlotte, NC",
      duration: "Aug 2013 – Oct 2015",
      description: "Delivered dual business and quality analysis for commodities trading platforms (portfolio management, risk management, trade capture), serving Front Office and Middle Office stakeholders.",
      achievements: [
        "Achieved <strong>0% defect leakage</strong> in production deployments over 2+ years despite an aggressive release cadence — across portfolio management, risk management, and trade capture applications.",
        "Guided UI modernization of a legacy commodities platform (Openlink Endur), capturing <strong>100% of all functional flows</strong> while designing an improved user experience.",
        "Partnered with Front Office Traders and Middle Office Managers through structured discovery to translate frontline feedback into user stories, keeping the product roadmap aligned with live trading needs."
      ],
      technologies: ["Openlink Endur", "SQL", "Unix", "ICE", "MS Office Suite"]
    },
    {
      title: "Business Systems Analyst",
      company: "Capital Group Companies",
      location: "Los Angeles, CA",
      duration: "Oct 2009 – Jul 2013",
      description: "Managed validation and analytics for fixed income data applications, delivering measurable cost savings and faster time-to-market through quality process optimization.",
      achievements: [
        "Generated <strong>$150K+ in annual savings</strong> by improving resource utilization through effective Quality Management practices.",
        "Increased <strong>speed-to-market by 50%</strong> for fixed income analytics and portfolio management applications through streamlined QA and release processes."
      ],
      technologies: ["SQL", "HP Quality Center", "MS Office Suite"]
    }
  ];

  const education: {
    degree: string;
    school: string;
    location: string;
    duration: string;
    details?: string;
  }[] = [
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
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} dangerouslySetInnerHTML={{ __html: achievement }} />
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
                  {edu.details && (
                    <CardContent>
                      <p className="text-muted-foreground">{edu.details}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}