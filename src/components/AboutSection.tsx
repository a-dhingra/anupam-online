import React from "react";
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
      title: "Requirement Elicitation",
      description: "Grasping user needs and business goals"
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Crafting intuitive and engaging user experiences"
    },
    {
      icon: Users,
      title: "Product Management",
      description: "Bridging gaps between stakeholders and development teams"
    },
    {
      icon: Zap,
      title: "Storytelling",
      description: "Driving decisions with data-driven narratives"
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
                  Think of me as your friendly neighborhood data detective and UX magician who gets genuinely excited about untangling complex problems. My superpower? Spotting opportunities others miss and transforming 'ugh, this is confusing' moments into those satisfying 'Aha!' experiences that make users smile. I've spent years navigating the wild worlds of finance and insurance – and trust me, I've delivered products that not only work beautifully but actually make people go 'wow, I never knew this could be so simple!' It's way more fun than it sounds, and those lightbulb moments from consumers? Pure gold. 
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  When I'm not working, you'll probably find me out on the tennis court (still trying to perfect that backhand!) or hanging out with my family, whether we're exploring somewhere new or just enjoying a lazy Sunday at home. 
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  I believe the best work happens when you bring genuine curiosity and care to what you do.
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