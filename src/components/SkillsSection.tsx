import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (isInView) {
      // Animate progress bars
      const timer = setTimeout(() => {
        const newValues: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setProgressValues(newValues);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const skillCategories = [
    {
      title: "Product Management",
      skills: [
        { name: "Product Vision & Design", level: 85 },
        { name: "Requirements Elicitation", level: 95 },
        { name: "Prioritization", level: 80 },
        { name: "Stakeholder Management", level: 85 },
        { name: "Agile Methodologies", level: 95 },
        // { name: "Product Roadmapping", level: 75 }
      ]
    },
    {
      title: "Business System Analysis",
      skills: [
        { name: "Business Process Analysis", level: 90 },
        { name: "Data Analysis & Reporting", level: 95 },
        // { name: "Data Modeling", level: 90 },
        { name: "Process Modeling & Improvement", level: 88 },
        { name: "Solution Design", level: 75 },
        { name: "Change Management", level: 90 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Python", level: 80 },
        { name: "SQL", level: 80 },
        { name: "Snowflake", level: 60 },
        { name: "PowerBI", level: 75 },
        // { name: "Unix", level: 80 },
        { name: "Jira", level: 95 }
      ]
    }
  ];

  const technologies = [
    "MS Office 365", "Confluence", "Python", "Postman", "PowerBI", "Azure Cloud", "Google Cloud Platform",
"Bigquery", "Pyspark", "Tableau", "Unix", "SQL", "Selenium", "Jira", "SSMS", "Cucumber", "Rest API", "Pandas", "Teamcity", "Openlink's Endur", "CTC Gresham", "Snowflake", "Cognos", "Data Modeling", "Data Governance", "Data Visualization", "Snowflake-Cortex"
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* Technologies and tools I use to bring ideas to life */}
            </p>
          </motion.div>

          {/* Skill Categories with Progress Bars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <motion.span 
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.3, delay: 1 + skillIndex * 0.1 }}
                          >
                            {progressValues[skill.name] || 0}%
                          </motion.span>
                        </div>
                        <Progress 
                          value={progressValues[skill.name] || 0} 
                          className="h-2" 
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technology Tags */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="px-3 py-1 cursor-default">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}