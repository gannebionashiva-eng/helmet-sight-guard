import { Code, Cpu, Cloud, Shield } from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      icon: Code,
      title: "CV Models",
      items: ["YOLOv8", "SSD MobileNet", "Custom CNN", "TensorFlow Lite"],
    },
    {
      icon: Cpu,
      title: "Edge Devices",
      items: ["Raspberry Pi 4", "NVIDIA Jetson Nano", "Intel NCS 2", "Google Coral"],
    },
    {
      icon: Cloud,
      title: "Cloud Options",
      items: ["AWS Lambda", "Google Cloud Run", "Azure Functions", "Self-hosted"],
    },
    {
      icon: Shield,
      title: "Security",
      items: ["End-to-end encryption", "GDPR compliant", "On-device processing", "Audit logs"],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            Built on proven, scalable technologies for enterprise deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {techStack.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] border-2 border-transparent hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Supported Platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Linux", "Windows", "Docker", "Kubernetes", "ARM64", "x86_64"].map((platform, index) => (
              <div key={index} className="bg-secondary px-4 py-2 rounded-lg text-sm font-medium">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
