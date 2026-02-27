import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/layout/SectionWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, Node.js — scalable web applications with REST/GraphQL APIs built for performance.",
    details: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Performance Optimization",
      "API Integration & Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Flutter & React Native solutions delivering seamless cross-platform experiences on every device.",
    details: [
      "iOS & Android Development",
      "Cross-Platform Apps",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications & Analytics",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma-first design systems, user research, and motion UI that captivates and converts.",
    details: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Wireframing",
      "Design Systems",
      "Interactive Motion UI",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS, Docker, and CI/CD pipelines — scalable infrastructure engineered for reliability.",
    details: [
      "Cloud Infrastructure Design",
      "DevOps Automation",
      "Serverless Architecture",
      "Data Migration",
      "Continuous Integration/Delivery",
    ],
  },
  {
    icon: Globe,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing strategies and technical SEO to boost your digital presence and organic growth.",
    details: [
      "Search Engine Optimization",
      "Technical SEO Audits",
      "Content Strategy",
      "Social Media Marketing",
      "Conversion Rate Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, and robust encryption to protect your digital assets.",
    details: [
      "Security Infrastructure Audit",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Data Encryption Standards",
      "Security Training & Support",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const scrollToContact = () => {
    setSelectedService(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card
              onClick={() => setSelectedService(service)}
              className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_hsl(155_100%_19%_/_0.3)] group cursor-pointer h-full"
            >
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

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="sm:max-w-[500px] bg-card border-primary/20 backdrop-blur-xl">
          <DialogHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              {selectedService && <selectedService.icon className="text-veridian-glow" size={24} />}
            </div>
            <DialogTitle className="text-2xl font-heading font-bold text-foreground">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base pt-2">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">What's Included:</h4>
            <ul className="grid grid-cols-1 gap-3">
              {selectedService?.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="text-veridian-glow mt-0.5 shrink-0" size={16} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <DialogFooter className="sm:justify-start">
            <Button
              onClick={scrollToContact}
              className="w-full bg-primary hover:bg-veridian-light text-primary-foreground font-semibold py-6"
            >
              Get Started with {selectedService?.title}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default Services;
