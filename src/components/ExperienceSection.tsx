import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Lead developer for multiple high-traffic web applications serving 100K+ users. Architected scalable microservices and improved system performance by 40%.",
      achievements: [
        "Led a team of 5 developers in building a customer portal that increased user engagement by 60%",
        "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      location: "Remote",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with UX/UI designers to create exceptional user experiences. Specialized in React ecosystem and modern JavaScript.",
      achievements: [
        "Built a dashboard application that reduced client reporting time by 50%",
        "Converted legacy jQuery applications to React, improving maintainability",
        "Established frontend coding standards and best practices for the team"
      ],
      technologies: ["React", "TypeScript", "Redux", "Sass", "Jest"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2019 - 2020",
      description: "Started my professional journey in a fast-paced startup environment. Worked on various projects from landing pages to full-stack applications.",
      achievements: [
        "Developed responsive marketing websites that increased lead generation by 35%",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Contributed to the company's first mobile application using React Native"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "HTML/CSS"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "California, USA",
      duration: "2015 - 2019",
      details: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering."
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