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
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 70 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "Tailwind CSS", "Figma", "Git", "Docker", "AWS", "Vercel",
    "Firebase", "GraphQL", "REST APIs", "Jest", "Cypress"
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
              Technologies and tools I use to bring ideas to life
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