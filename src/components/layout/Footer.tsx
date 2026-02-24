import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollTo = (target: string, offset: number) => {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                V
              </div>
              <span className="font-heading font-semibold text-lg text-foreground">
                Veridian<span className="text-veridian-glow">Tech</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovate. Integrate. Elevate. We engineer world-class digital products that drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", target: "home", offset: 0 },
                { label: "About", target: "about", offset: -80 },
                { label: "Services", target: "services", offset: -80 },
                { label: "Portfolio", target: "portfolio", offset: -80 },
              ].map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target, link.offset)}
                    className="text-sm text-muted-foreground hover:text-veridian-glow transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web App Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX & Branding</li>
              <li>Digital Marketing & SEO</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Al-Hussain Plaza, MA. Jinnah Road</li>
              <li>Okara, Punjab, Pakistan</li>
              <li className="text-veridian-glow">+92-301-4242701</li>
              <li className="text-veridian-glow">info@veridiantech.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Veridian Tech (SMC-PVT LTD). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-veridian-glow transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
