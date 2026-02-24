import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Users, Target, Award, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Every line of code serves a purpose — delivering measurable impact for our clients." },
  { icon: Users, title: "Client-Centric", description: "We treat your project as our own, ensuring transparent communication at every step." },
  { icon: Award, title: "Quality First", description: "No shortcuts. We deliver production-grade code with comprehensive testing." },
  { icon: Zap, title: "Agile Delivery", description: "Rapid iteration cycles that keep your project on track and on budget." },
];

const About = () => {
  return (
    <section id="about">
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6"
          >
            About <span className="text-veridian-glow text-glow">Veridian Tech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Veridian Tech (SMC-PVT LTD) is a modern software development and digital agency headquartered in Okara, Punjab, Pakistan. We partner with startups, SMEs, and enterprises to build digital products that move the needle — from MVPs to enterprise-scale platforms.
          </motion.p>
        </div>

        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
          Our <span className="text-veridian-glow">Values</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="text-veridian-glow" size={20} />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
