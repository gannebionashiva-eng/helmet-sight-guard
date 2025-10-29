import { Webhook, Database, FileJson, Share2, Cloud, Lock } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      icon: Webhook,
      title: "REST API",
      description: "Full-featured REST API with OpenAPI documentation for custom integrations.",
    },
    {
      icon: Share2,
      title: "Webhooks",
      description: "Real-time event notifications to your systems via configurable webhooks.",
    },
    {
      icon: Database,
      title: "Apache Kafka",
      description: "Stream detection events to Kafka for high-throughput data pipelines.",
    },
    {
      icon: Cloud,
      title: "S3 Storage",
      description: "Automatic upload of evidence images and videos to AWS S3 or compatible storage.",
    },
    {
      icon: FileJson,
      title: "CSV Export",
      description: "Export violation reports and analytics data in CSV format for offline analysis.",
    },
    {
      icon: Lock,
      title: "Third-Party Systems",
      description: "Pre-built connectors for parking, ticketing, and ERP systems.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-lg text-muted-foreground">
            Connect HelmetSafe with your existing infrastructure and workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg shrink-0">
                  <integration.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{integration.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* API Preview */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileJson className="h-5 w-5 text-accent" />
              Sample Detection Event
            </h3>
            <pre className="bg-card rounded-lg p-4 text-xs md:text-sm overflow-x-auto">
              <code className="text-muted-foreground">{`{
  "event_id": "evt_abc123",
  "timestamp": "2025-10-29T14:32:15Z",
  "camera_id": "cam_001",
  "detection": {
    "helmet_detected": false,
    "confidence": 0.98,
    "vehicle_type": "motorcycle"
  },
  "evidence_url": "https://s3.../evidence.jpg"
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
