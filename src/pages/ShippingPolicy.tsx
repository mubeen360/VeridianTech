import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";

const ShippingPolicy = () => {
    return (
        <SectionWrapper id="shipping">
            <div className="max-w-4xl mx-auto pt-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Shipping & Service Delivery</h1>
                    <div className="prose prose-invert prose-veridian max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
                        <p>Last updated: February 27, 2026</p>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Digital Delivery</h2>
                            <p>As a digital services provider, all deliverables (code, designs, reports) are delivered electronically via secure communication channels or version control systems (e.g., GitHub).</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Service Timelines</h2>
                            <p>Project milestones and delivery dates are established in the project agreement. We are committed to meeting all agreed-upon deadlines.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Global Availability</h2>
                            <p>Our services are available to clients worldwide, with coordination handled across various time zones to ensure seamless collaboration.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default ShippingPolicy;
