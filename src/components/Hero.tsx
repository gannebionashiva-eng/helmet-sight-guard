import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";
import heroImage from "@/assets/hero-helmet-detection.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,204,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-6 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium">
              <Zap className="h-4 w-4" />
              AI-Powered Safety Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Detect helmets in real time — protect riders, enforce safety
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              AI-powered, edge-ready helmet detection for two-wheelers. Fast, accurate, privacy-first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="accent" 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="text-base font-semibold"
              >
                Request Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("demo")}
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-base font-semibold"
              >
                See Live Demo
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-3">Trusted by traffic departments and fleet operators</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">99.2% Accuracy</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Zap className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">&lt;200ms Latency</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Lock className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Privacy First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/30">
              <img 
                src={heroImage} 
                alt="Helmet detection system in action showing AI-powered real-time detection on motorcyclist" 
                className="w-full h-auto"
              />
              {/* Animated Detection Indicator */}
              <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg animate-pulse">
                <p className="text-primary text-sm font-bold">✓ Helmet Detected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
