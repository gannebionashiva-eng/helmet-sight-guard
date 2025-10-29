import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">HS</span>
            </div>
            <span className="text-xl font-bold gradient-text">HelmetSafe</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-accent transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => scrollToSection("demo")}>
              Live Demo
            </Button>
            <Button variant="accent" size="sm" onClick={() => scrollToSection("contact")}>
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-accent transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-accent transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-accent transition-colors text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors text-left">
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => scrollToSection("demo")}>
                Live Demo
              </Button>
              <Button variant="accent" size="sm" onClick={() => scrollToSection("contact")}>
                Request Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
