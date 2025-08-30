import { Card, CardContent } from "./ui/card";
import { Code, Palette, Users, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating beautiful interfaces with attention to detail"
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Building products that users love and understand"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  I'm a passionate full-stack developer and designer with over 5 years of experience 
                  creating digital solutions that bridge the gap between design and technology. 
                  My journey started with a curiosity about how things work and evolved into a 
                  love for building products that people enjoy using.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I specialize in modern web technologies including React, TypeScript, Node.js, 
                  and cloud platforms. When I'm not coding, you'll find me exploring new design 
                  trends, contributing to open-source projects, or mentoring aspiring developers.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  I believe in the power of collaboration, continuous learning, and creating 
                  technology that serves humanity. Every project is an opportunity to solve 
                  real problems and make someone's day a little better.
                </motion.p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="text-center p-6 h-full">
                    <CardContent className="p-0">
                      <motion.div 
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <highlight.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}