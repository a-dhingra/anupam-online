import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const projects = [
    {
      title: "TaskFlow Dashboard",
      description: "A comprehensive project management dashboard built with React and TypeScript. Features real-time collaboration, task tracking, and analytics.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY0ODYzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
      liveUrl: "https://taskflow-demo.com",
      githubUrl: "https://github.com/johndoe/taskflow",
      featured: true
    },
    {
      title: "FinanceTracker Mobile App",
      description: "A React Native app for personal finance management with AI-powered expense categorization and insightful spending analytics.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2NDk2NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow"],
      liveUrl: "https://financetracker-app.com",
      githubUrl: "https://github.com/johndoe/financetracker",
      featured: true
    },
    {
      title: "ShopEase E-commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjUwNzMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind"],
      liveUrl: "https://shopease-demo.com",
      githubUrl: "https://github.com/johndoe/shopease",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <Card className="group hover:shadow-lg transition-shadow h-full">
                  <div className={`${project.featured ? 'lg:flex lg:items-center' : ''} h-full`}>
                    <div className={`${project.featured ? 'lg:w-1/2' : ''}`}>
                      <div className="relative overflow-hidden rounded-t-lg lg:rounded-lg lg:rounded-b-none">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-48 lg:h-64 object-cover"
                          />
                        </motion.div>
                        {project.featured && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                          >
                            <Badge className="absolute top-4 left-4 bg-primary">
                              Featured
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`${project.featured ? 'lg:w-1/2 lg:p-8' : ''} flex-1`}>
                      <CardHeader>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        >
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                        </motion.div>
                      </CardHeader>
                      <CardContent>
                        <motion.p 
                          className="text-muted-foreground mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-6"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <motion.div 
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        >
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Source
                              </a>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View More on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}