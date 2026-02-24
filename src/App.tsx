import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/context/ThemeContext";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";

const queryClient = new QueryClient();

function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = hash === "home" ? 0 : 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 300);
    }
  }, []);
  return null;
}

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Helmet>
            <title>Veridian Tech — Innovate. Integrate. Elevate.</title>
            <meta name="description" content="Veridian Tech engineers world-class digital products — web apps, mobile apps, branding, and digital marketing solutions." />
          </Helmet>
          <ScrollToHash />
          <Navbar />
          <main className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <TechStack />
            <Portfolio />
            <WhyUs />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
