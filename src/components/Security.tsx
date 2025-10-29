import { Shield, Lock, Eye, Database } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "On-Device Processing",
      description: "Process video feeds locally on edge devices without cloud uploads for maximum privacy.",
    },
    {
      icon: Eye,
      title: "Face Blurring",
      description: "Automatic face anonymization in all captured images and videos to protect rider identity.",
    },
    {
      icon: Database,
      title: "Data Retention Controls",
      description: "Configurable retention policies with automatic deletion after specified periods.",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "GDPR-compliant architecture with audit logs and data access controls.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Lock className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Security & Privacy</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Privacy-first architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that safety enforcement must respect individual privacy. HelmetSafe is designed with privacy controls at every layer.
              </p>

              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg h-fit shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Compliance Badges */}
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-bold mb-6">Compliance & Certifications</h3>
              
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">GDPR Compliant</h4>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with EU data protection regulations including right to deletion and data portability.
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">SOC 2 Type II</h4>
                  <p className="text-sm text-muted-foreground">
                    Cloud infrastructure audited for security, availability, and confidentiality.
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">ISO 27001</h4>
                  <p className="text-sm text-muted-foreground">
                    Information security management system certified to international standards.
                  </p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">End-to-End Encryption</h4>
                  <p className="text-sm text-muted-foreground">
                    All data in transit encrypted with TLS 1.3, at-rest encryption with AES-256.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
