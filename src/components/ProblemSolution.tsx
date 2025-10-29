import { AlertTriangle, CheckCircle2 } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problem */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-semibold text-destructive">The Problem</span>
            </div>
            <h2 className="text-3xl font-bold">Manual enforcement can't scale</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Two-wheeler accidents account for a significant portion of road fatalities, with non-helmet usage being a leading cause.
              </p>
              <p>
                Traditional manual enforcement is labor-intensive, inconsistent, and unable to monitor high-traffic areas 24/7.
              </p>
              <p>
                Cities and fleet operators need automated, accurate, and real-time solutions to ensure rider safety compliance.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">The Solution</span>
            </div>
            <h2 className="text-3xl font-bold">Automated AI detection at scale</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Real-time detection:</strong> Instantly identify helmet violations as they occur with sub-200ms latency.
              </p>
              <p>
                <strong className="text-foreground">Multi-camera analytics:</strong> Monitor multiple locations simultaneously with centralized dashboards and alerts.
              </p>
              <p>
                <strong className="text-foreground">Seamless integration:</strong> Export data via CSV, REST API, or webhooks to existing ticketing and enforcement systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
