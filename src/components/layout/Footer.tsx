import { Link, useNavigate } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (target: string, offset: number) => {
    if (window.location.pathname !== "/") {
      navigate("/#" + target);
      return;
    }
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={handleLogoClick} className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                V
              </div>
              <span className="font-heading font-semibold text-lg text-foreground">
                Veridian<span className="text-veridian-glow">Tech</span>
              </span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
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

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms-of-service" },
                { label: "Refund Policy", to: "/refund-policy" },
                { label: "Shipping Policy", to: "/shipping-policy" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-veridian-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
