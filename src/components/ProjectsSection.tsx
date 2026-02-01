import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import image1 from "/src/assets/Project_images/nasa.jpg";
import image2 from "/src/assets/Project_images/house.jpg";
import image3 from "/src/assets/Project_images/college.jpg";
import image4 from "/src/assets/Project_images/avatar.jpg";
import image5 from "/src/assets/Project_images/photography.jpg";
import image6 from "/src/assets/Project_images/codeart.jpg";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Import all images from assets folder
  const images = import.meta.glob('../assets/Project_images/*.{png,jpg,jpeg,gif,svg}', { eager: true });

// Helper function to get image by filename
  const getImageByName = (filename) => {
    const path = `../assets/${filename}`;
    return images[path]?.default || null;
  };

  const projects = [
    {
      title: "NASA Astronomy Picture of the Day App",
      description: "A Python script that fetches and displays NASA's Astronomy Picture of the Day (APOD) using NASA's public API.",
      image: image1,
      technologies: ["Python", "NASA API", "REST"],
      // liveUrl: "https://taskflow-demo.com",
      githubUrl: "https://github.com/a-dhingra/giraffe/blob/master/Fresh_Start/APIs/Nasa_Images.py#enroll-beta",
      featured: true
    },
    {
      title: "Home Price Analysis using Zillow Data",
      description: "A comprehensive analysis of home prices using Zillow data, employing data cleaning, visualization, and regression modeling to uncover market trends.",
      image: image2,
      technologies: ["Python", "Jupyter Notebook"],
      // liveUrl: "https://financetracker-app.com",
      githubUrl: "https://github.com/a-dhingra/JupyterNotebooks/blob/master/Home%20Price%20Data%20in%20USA%20from%20Zillow.com.ipynb",
      featured: true
    },
    {
      title: "College Admission Prediction",
      description: "A machine learning model that predicts college admission chances based on various academic and extracurricular factors using classification algorithms.",
      image: image3,
      technologies: ["Python", "Jupyter Notebook"],
      // liveUrl: "https://shopease-demo.com",
      githubUrl: "https://github.com/a-dhingra/JupyterNotebooks/blob/master/Admission_prediction.ipynb",
      featured: true
    },
    {
      title: "Avatar Quotes Generator",
      description: "A fun project generating quotes from the animation webseries 'Avatar: The Last Airbender', using machine learning.",
      image: image4,
      technologies: ["Python", "Jupyter Notebook"],
      // liveUrl: "https://shopease-demo.com",
      githubUrl: "https://github.com/a-dhingra/JupyterNotebooks/blob/master/iroh_quotes.ipynb",
      featured: true
    },
    {
      title: "Photography Portfolio",
      description: "A professional photography portfolio website showcasing photographic work with an elegant gallery interface and integrated contact functionality for client engagement.",
      image: image5,
      technologies: ["HTML", "CSS", "JavaScript", "Azure Static Web Apps"],
      liveUrl: "https://lemon-wave-03d25f10f.2.azurestaticapps.net/",
      // githubUrl: "",
      featured: true
    },
    {
      title: "Code Art Studio",
      description: "An interactive generative art application built with p5.js that creates procedurally-generated visual compositions with real-time parameter controls, multiple art modes, and animation capabilities.",
      image: image6,
      technologies: ["p5.js", "JavaScript", "Canvas API", "Azure Static Web Apps"],
      liveUrl: "https://green-sand-067e6130f.2.azurestaticapps.net/",
      // githubUrl: "",
      featured: true
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
              A showcase of my personal projects
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
                            {/* <Badge className="absolute top-4 left-4 bg-primary">
                              Featured
                            </Badge> */}
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
                          {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Source
                                </a>
                              </Button>
                            </motion.div>
                          )}
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
                <a href="https://github.com/a-dhingra" target="_blank" rel="noopener noreferrer">
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