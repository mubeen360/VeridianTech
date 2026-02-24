import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handler);
    return () => el?.removeEventListener("mousemove", handler);
  }, []);

  const scrollTo = (target: string, offset: number) => {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Interactive circuit board SVG overlay */}
      <div
        className="absolute inset-0 pointer-events-none circuit-pattern"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Animated circuit lines that react to mouse */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mouseGlow" cx={mousePos.x} cy={mousePos.y} r="0.4">
            <stop offset="0%" stopColor="hsl(155 100% 50% / 0.12)" />
            <stop offset="100%" stopColor="hsl(155 100% 50% / 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#mouseGlow)" />
        {/* Circuit traces */}
        {[
          "M0,200 Q200,180 400,220 T800,200",
          "M0,400 Q300,380 600,420 T1200,400",
          "M0,600 Q250,580 500,620 T1000,600",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="hsl(155 100% 50% / 0.06)"
            strokeWidth="1"
            style={{
              transform: `translate(${(mousePos.x - 0.5) * (10 + i * 5)}px, ${(mousePos.y - 0.5) * (10 + i * 5)}px)`,
              transition: "transform 0.4s ease-out",
            }}
          />
        ))}
        {/* Circuit nodes */}
        {[
          { cx: "20%", cy: "30%" },
          { cx: "75%", cy: "25%" },
          { cx: "85%", cy: "70%" },
          { cx: "15%", cy: "65%" },
          { cx: "50%", cy: "85%" },
        ].map((pos, i) => (
          <circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="2"
            fill="hsl(155 100% 50% / 0.2)"
            style={{
              transform: `translate(${(mousePos.x - 0.5) * (8 + i * 3)}px, ${(mousePos.y - 0.5) * (8 + i * 3)}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
        ))}
      </svg>

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-[10%] w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-[15%] w-48 h-48 border border-veridian-glow/5 rounded-full"
        />
        {/* V watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-heading font-black text-primary/[0.03] select-none leading-none">
          V
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight mb-6"
        >
          Architecting the Future of{" "}
          <span className="text-veridian-glow text-glow">Digital Ecosystems.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From bespoke web platforms to high-performance mobile apps, we integrate innovation into every line of code to elevate your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo("contact", -80)}
            className="bg-primary hover:bg-veridian-light text-primary-foreground px-8 py-6 text-base animate-pulse-glow"
          >
            Start a Project
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("portfolio", -80)}
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-veridian-glow/50 px-8 py-6 text-base"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="text-muted-foreground" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
