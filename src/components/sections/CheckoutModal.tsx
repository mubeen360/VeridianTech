import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  plan: { name: string; monthlyPrice: number; yearlyPrice: number } | null;
  yearly: boolean;
}

function formatCard(value: string) {
  return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").trim().slice(0, 19);
}
function formatExpiry(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
}

const CheckoutModal = ({ open, onClose, plan, yearly }: CheckoutModalProps) => {
  const { toast } = useToast();
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  if (!plan) return null;

  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = yearly ? "/year" : "/month";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      setCard("");
      setExpiry("");
      setCvc("");
      setName("");
      toast({
        title: "Payment Successful! 🎉",
        description: `You're now subscribed to the ${plan.name} plan at $${price.toLocaleString()}${period}.`,
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            Checkout — {plan.name} Plan
          </DialogTitle>
          <DialogDescription>
            ${price.toLocaleString()}{period} · Secure payment
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="card-name">Cardholder Name</Label>
            <Input
              id="card-name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <div className="relative">
              <Input
                id="card-number"
                placeholder="4242 4242 4242 4242"
                value={card}
                onChange={(e) => setCard(formatCard(e.target.value))}
                required
                className="pr-24"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-muted-foreground">
                <span className="text-xs font-bold tracking-tight">VISA</span>
                <span className="text-xs font-bold tracking-tight">MC</span>
                <CreditCard size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="expiry">Expiry</Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-veridian-light text-primary-foreground" disabled={loading}>
            {loading ? "Processing..." : `Pay $${price.toLocaleString()}`}
          </Button>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
            <Lock size={12} /> Secured with 256-bit encryption · Powered by Stripe
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
