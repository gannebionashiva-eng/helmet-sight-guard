import { Zap, Target, Cpu, Database, BarChart3, Plug, Lock, Video } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Detection",
      description: "Detect helmet violations as they happen with sub-200ms latency on edge devices.",
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "Industry-leading 99.2% accuracy in diverse lighting and weather conditions.",
    },
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Run on Raspberry Pi, NVIDIA Jetson, or Intel NCS for low-latency performance.",
    },
    {
      icon: Database,
      title: "Batch Processing",
      description: "Process recorded footage at scale for historical analysis and compliance audits.",
    },
    {
      icon: BarChart3,
      title: "Dashboard & Reports",
      description: "Centralized analytics dashboard with customizable reports and data export.",
    },
    {
      icon: Plug,
      title: "API & Integrations",
      description: "REST API, webhooks, and direct integrations with ticketing and ERP systems.",
    },
    {
      icon: Lock,
      title: "Privacy Controls",
      description: "On-device processing, face blurring, and configurable data retention policies.",
    },
    {
      icon: Video,
      title: "Multi-Camera Support",
      description: "Monitor unlimited cameras from a single dashboard with unified incident tracking.",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade helmet detection built for scale, accuracy, and seamless integration
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] card-hover"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
