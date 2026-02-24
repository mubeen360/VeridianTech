import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/layout/SectionWrapper";

const filters = ["All", "Web Apps", "Mobile", "Branding", "Marketing"];

const projects = [
  {
    title: "Enterprise CRM Dashboard",
    tag: "Web Apps",
    description: "Enterprise-grade customer management platform with real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    techTags: ["React", "Node.js", "PostgreSQL", "AWS"],
    problem: "Legacy CRM was slow, fragmented across tools, and lacked real-time visibility into the sales pipeline.",
    solution: "Built a unified React dashboard with live data streaming, role-based access, and automated reporting — reducing sales cycle time by 35%.",
  },
  {
    title: "E-Commerce Mobile App",
    tag: "Mobile",
    description: "Cross-platform shopping experience with seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    techTags: ["Flutter", "Firebase", "Stripe", "Node.js"],
    problem: "The client's web-only store was losing mobile users at checkout with a 72% cart abandonment rate.",
    solution: "Delivered a Flutter app with biometric auth, one-tap checkout, and push-based re-engagement — cutting abandonment to 28%.",
  },
  {
    title: "Brand Identity Systems",
    tag: "Branding",
    description: "Complete visual identity system from logo to design guidelines.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop",
    techTags: ["Figma", "Illustrator", "After Effects"],
    problem: "A fintech startup had inconsistent branding across 12 touchpoints, eroding user trust.",
    solution: "Created a comprehensive design system with logo, typography, color, iconography, and motion guidelines used across web, mobile, and print.",
  },
  {
    title: "SEO Growth Campaign",
    tag: "Marketing",
    description: "Data-driven strategy that drove 340% organic traffic increase.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    techTags: ["Google Analytics", "Ahrefs", "Content Strategy"],
    problem: "An ed-tech platform ranked on page 3+ for all target keywords with declining organic sessions.",
    solution: "Executed a 6-month technical SEO overhaul and content strategy that achieved 340% organic growth and 15 page-1 rankings.",
  },
];

function ImageWithSkeleton({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className="relative aspect-video overflow-hidden">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </figure>
  );
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <SectionWrapper id="portfolio">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Our <span className="text-veridian-glow">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Selected projects that showcase our commitment to excellence.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-surface-elevated text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="rounded-xl border border-border overflow-hidden bg-card hover:border-primary/50 transition-all hover:box-glow">
                <ImageWithSkeleton src={project.image} alt={project.title} />
                <div className="p-6">
                  <span className="text-xs font-medium text-veridian-glow uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techTags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-sm text-veridian-glow font-medium group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight size={14} />
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); }}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Sheet */}
      <Sheet open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <SheetContent className="overflow-y-auto sm:max-w-lg">
          {selectedProject && (
            <>
              <SheetHeader className="mb-6">
                <div className="text-xs font-medium text-veridian-glow uppercase tracking-wider mb-1">
                  {selectedProject.tag}
                </div>
                <SheetTitle className="text-2xl font-heading">
                  {selectedProject.title}
                </SheetTitle>
                <SheetDescription>{selectedProject.description}</SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-border">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techTags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" /> The Problem
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-veridian-glow" /> Our Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </SectionWrapper>
  );
};

export default Portfolio;
