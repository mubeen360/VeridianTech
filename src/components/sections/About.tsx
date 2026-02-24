import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Award, Eye, Layers } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "Enterprise-grade code, rigorous testing, and pixel-perfect design — no shortcuts, ever.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication, honest timelines, and clear reporting at every stage of your project.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description: "Architectures built to grow — from MVP to millions of users without re-engineering.",
  },
];

const About = () => {
  return (
    <section id="about">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          {/* Storytelling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                About <span className="text-veridian-glow text-glow">Veridian Tech</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Veridian Tech (SMC-PVT LTD) exists to bridge the gap between complex technology and user-centric design. Headquartered in Okara, Punjab, Pakistan, we partner with startups, SMEs, and enterprises who refuse to settle for "good enough."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our multidisciplinary team combines deep engineering expertise with design thinking — transforming ambitious ideas into digital products that users love and businesses depend on. From MVPs to enterprise-scale platforms, every solution is crafted with precision, performance, and purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering enterprise-grade solutions — from Okara to global clients across the US, UK, UAE, and beyond. Distance is never a barrier when quality is the standard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Veridian Tech collaborative workspace"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-veridian-glow/20 rounded-2xl -z-10" />
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Our <span className="text-veridian-glow">Core Values</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="text-veridian-glow" size={26} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-lg mb-3">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
