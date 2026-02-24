import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Cloud, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionWrapper from "@/components/layout/SectionWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, Node.js — scalable web applications with REST/GraphQL APIs built for performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Flutter & React Native solutions delivering seamless cross-platform experiences on every device.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma-first design systems, user research, and motion UI that captivates and converts.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS, Docker, and CI/CD pipelines — scalable infrastructure engineered for reliability.",
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          What We <span className="text-veridian-glow">Build</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          End-to-end digital solutions engineered for scale, performance, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_hsl(155_100%_19%_/_0.3)] group cursor-pointer h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-veridian-glow" size={24} />
                </div>
                <CardTitle className="text-foreground font-heading text-lg mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
                <div className="flex items-center gap-1 text-veridian-glow text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
