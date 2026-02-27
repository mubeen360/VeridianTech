import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";

const RefundPolicy = () => {
    return (
        <SectionWrapper id="refund">
            <div className="max-w-4xl mx-auto pt-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Refund & Return Policy</h1>
                    <div className="prose prose-invert prose-veridian max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
                        <p>Last updated: February 27, 2026</p>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Service Refunds</h2>
                            <p>At Veridian Tech, we strive for excellence. Refunds for services are handled on a case-by-case basis depending on the project stage and deliverables provided.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Cancellation Policy</h2>
                            <p>Clients may cancel subscriptions at any time. Cancellations will take effect at the end of the current billing cycle.</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Non-Refundable Items</h2>
                            <p>Completed project milestones and delivered design assets are typically non-refundable.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default RefundPolicy;
