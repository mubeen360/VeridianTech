import Marquee from "react-fast-marquee";
import SectionWrapper from "@/components/layout/SectionWrapper";

const row1 = ["React", "Next.js", "Vue", "Flutter", "TailwindCSS", "TypeScript"];
const row2 = ["Node.js", "Laravel", "Python", "PostgreSQL", "AWS", "Docker"];

const TechBadge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mx-2 whitespace-nowrap hover:border-primary/50 hover:text-foreground transition-all">
    {name}
  </span>
);



function TechPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 mx-2 rounded-full border border-border bg-card hover:border-primary/50 transition-all">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

const TechStack = () => {
  return (
    <SectionWrapper className="!px-0" id="techstack">
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Our <span className="text-veridian-glow">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We work with cutting-edge technologies to deliver robust, scalable solutions.
        </p>
      </div>

      <div className="space-y-4">
        <Marquee speed={40} pauseOnHover gradient={false}>
          {row1.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </Marquee>
        <Marquee speed={30} pauseOnHover gradient={false} direction="right">
          {row2.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
