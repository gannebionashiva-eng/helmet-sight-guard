import { Camera, Brain, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Camera Captures Feed",
      description: "Standard IP cameras or edge devices stream live video from traffic intersections, gates, or checkpoints.",
    },
    {
      icon: Brain,
      title: "AI Detects Helmets",
      description: "Computer vision models analyze each frame in real-time, detecting helmet presence and posture with 99.2% accuracy.",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Alerts",
      description: "Violations trigger instant alerts. View analytics, export CSV reports, and integrate with ticketing systems via API.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Simple deployment, powerful results — from camera to actionable insights in three steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/30 z-0" 
                  style={{ transform: 'translateY(-50%)' }} 
                />
              )}
              
              <div className="relative bg-card rounded-xl p-8 shadow-[var(--shadow-card)] card-hover text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
