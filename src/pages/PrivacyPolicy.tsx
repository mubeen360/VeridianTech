import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";

const PrivacyPolicy = () => {
    return (
        <SectionWrapper id="privacy">
            <div className="max-w-4xl mx-auto pt-20 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>
                    <div className="prose prose-invert prose-veridian max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
                        <p>Last updated: February 27, 2026</p>
                        <p>
                            We are committed to safeguarding your personal details. This Privacy Policy of Veridian Tech describes how we gather, use, disclose, and protect all information about you through our website and various offline sources, such as conferences, trade shows, and supplier interactions (where applicable).
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Gathering</h2>
                            <p>Veridian Tech collects basic info via a query form on the website. This includes your name and contact details (phone number and email address). We do not collect any confidential or sensitive information without your explicit consent.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Usage</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Communication:</strong> We may use your contact information for various communication purposes, such as sharing updates about services and/or responding to queries.</li>
                                <li><strong>Service Improvement:</strong> Veridian Tech may use your information to improve its services. This can include gathering feedback and/or providing updates on new offerings.</li>
                                <li><strong>Payments:</strong> Where required, we may collect credit information to manage payments securely.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Protection</h2>
                            <p>Veridian Tech has assembled a top-tier data security network to protect your valuable information. Your details are safely stored on our servers and can only be accessed by authorized personnel.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
                            <p>Veridian Tech does not sell or share personal information to third parties without your explicit consent unless otherwise legally obligated.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Services</h2>
                            <p>Veridian Tech may involve third-party service providers to help with some aspects/sections of the platform. As a result, these third-party operators may have access to your personal information. However, this is just to enable them to perform their duties effectively and efficiently, and they will be obligated to maintain the confidentiality of all info.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies</h2>
                            <p>Veridian Tech may utilize cookies to improve your experience on the platform. Cookies help us understand user behavior and enhance services. You can disable cookies through your browser settings. However, this can affect your experience on the Veridian Tech website.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
                            <p>You can access, update, and/or delete your personal details anytime. Please get in touch to exercise these rights.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Policy Updates</h2>
                            <p>Veridian Tech reserves the right to change this Privacy Policy whenever necessary. Any updates will be available on this page, and we encourage you to check it out regularly.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
                            <p>For any questions or concerns, please reach out to info@veridiantech.com</p>
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

export default PrivacyPolicy;
