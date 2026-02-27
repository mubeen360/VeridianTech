import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";

const TermsOfService = () => {
    return (
        <SectionWrapper id="terms">
            <div className="max-w-4xl mx-auto pt-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Terms of Service</h1>
                    <div className="prose prose-invert prose-veridian max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
                        <p>Last updated: February 27, 2026</p>
                        <p>
                            Your use of our website and services will be governed by the terms and conditions outlined here.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
                            <p>By accessing our website or using our services, you agree to adhere to the terms and conditions Veridian Tech has put in place. If you do not agree with these terms or any part thereof, you must avoid utilizing our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Accurate User Info</h2>
                            <p>You will be responsible for providing updated and accurate information when using any services offered by Veridian Tech. You also agree that we may have to collect basic information, like your name, phone number, and email address for communication purposes, as per the Privacy Policy of Veridian Tech.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Privacy</h2>
                            <p>Veridian Tech is committed to safeguarding your personal information and privacy. Please review our Privacy Policy to understand how we handle your sensitive details.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Security</h2>
                            <p>Veridian Tech takes your data privacy seriously. This is why all client/customer/partner information is recorded securely and is accessible only by authorized personnel. However, we are not responsible for any unauthorized access to our systems, though we will take all necessary preventive measures.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Prohibited Activities</h2>
                            <p>You agree to avoid unlawful use or misuse of our services. This includes (but is not limited to) unauthorized system access, transmitting malicious code, and spamming.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
                            <p>All content on our web platform is the property of Veridian Tech. This includes (but is not limited to) text, logos, graphics, and software. You may not use or distribute any of this content without prior authorization.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to Terms</h2>
                            <p>Veridian Tech reserves the right to modify or update these terms whenever required. Any changes will be communicated on this page, and your continued use of our platform after a change constitutes acceptance of the updated terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Termination</h2>
                            <p>Veridian Tech reserves the right to suspend or remove your access to the platform for any violation of the outlined terms and conditions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
                            <p>Veridian Tech shall not be held liable for any direct or indirect damages resulting from the use of the platform, including but not limited to data loss, unauthorized access, or interruption of services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
                            <p>The terms and conditions outlined here are governed by the laws of Pakistan where Veridian Tech is based.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default TermsOfService;
