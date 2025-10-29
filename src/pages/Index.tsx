import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import LiveDemo from "@/components/LiveDemo";
import Features from "@/components/Features";
import Accuracy from "@/components/Accuracy";
import Technology from "@/components/Technology";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <LiveDemo />
        <Features />
        <Accuracy />
        <Technology />
        <Integrations />
        <Security />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
