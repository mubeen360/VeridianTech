import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/layout/SectionWrapper";
import CheckoutModal from "@/components/sections/CheckoutModal";

const plans = [
  {
    name: "Startup",
    icon: Rocket,
    monthlyPrice: 499,
    yearlyPrice: 4790,
    description: "Perfect for early-stage companies launching their first digital product.",
    features: [
      "1 Active Project",
      "UI/UX Design & Development",
      "Responsive Web Application",
      "Monthly Maintenance (4 hrs)",
      "Email Support",
      "Basic SEO Setup",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    icon: Zap,
    monthlyPrice: 1299,
    yearlyPrice: 12470,
    description: "For growing businesses that need a dedicated development partner.",
    features: [
      "Up to 3 Active Projects",
      "Full-Stack Development",
      "Mobile App Development",
      "Dedicated Developer (20 hrs/mo)",
      "Monthly SEO & Analytics",
      "Priority Slack Support",
      "CI/CD Pipeline Setup",
    ],
    cta: "Start Building",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthlyPrice: 3499,
    yearlyPrice: 33590,
    description: "For organizations requiring end-to-end digital transformation.",
    features: [
      "Unlimited Projects",
      "Dedicated Team (3+ devs)",
      "Cloud Architecture & DevOps",
      "24/7 Priority Support",
      "Monthly Strategy Sessions",
      "Advanced SEO & Marketing",
      "Custom Integrations & APIs",
      "SLA Guarantee (99.9% uptime)",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<typeof plans[0] | null>(null);

  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Subscription <span className="text-veridian-glow">Plans</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Flexible plans designed to scale with your business. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch checked={yearly} onCheckedChange={setYearly} />
          <span className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly
          </span>
          {yearly && (
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
              Save 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              plan.popular
                ? "border-primary bg-card box-glow-strong"
                : "border-border bg-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground font-medium px-4">
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <plan.icon className="text-veridian-glow" size={20} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">{plan.name}</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">
                ${yearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
              </span>
              <span className="text-muted-foreground text-sm">/month</span>
              {yearly && (
                <p className="text-xs text-muted-foreground mt-1">
                  Billed ${plan.yearlyPrice.toLocaleString()}/year
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-veridian-glow mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              onClick={() => setCheckoutPlan(plan)}
              className={`w-full ${
                plan.popular
                  ? "bg-primary hover:bg-veridian-light text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        open={!!checkoutPlan}
        onClose={() => setCheckoutPlan(null)}
        plan={checkoutPlan}
        yearly={yearly}
      />
    </SectionWrapper>
  );
};

export default Pricing;
