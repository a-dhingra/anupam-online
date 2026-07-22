import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EMAIL = "maveric_anupam@yahoo.com";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: Mail,
      label: "Email me",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      primary: true,
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/anupamdhingra",
      href: "https://linkedin.com/in/anupamdhingra",
      primary: false,
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "a-dhingra",
      href: "https://github.com/a-dhingra",
      primary: false,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? The fastest way to
              reach me is email — I read every message and reply personally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8 space-y-8">
                {/* Primary CTA */}
                <div className="flex flex-col items-center gap-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button size="lg" asChild>
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Email me
                      </a>
                    </Button>
                  </motion.div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>

                {/* Secondary links */}
                <div className="flex flex-wrap justify-center gap-4">
                  {links
                    .filter((l) => !l.primary)
                    .map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <link.icon className="w-4 h-4" />
                            {link.label}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                </div>

                {/* Location + availability */}
                <div className="flex flex-col items-center gap-3 pt-2 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-6">
                    <MapPin className="w-4 h-4" />
                    Cary, NC
                  </div>
                  <p className="text-sm text-center text-muted-foreground max-w-md">
                    Open to product, data, and analytics opportunities and
                    collaborations. Let&apos;s build something meaningful together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
