import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { Play } from "lucide-react";

const LiveDemo = () => {
  return (
    <section id="demo" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground">
            Watch how HelmetSafe detects helmet violations in real-time with bounding box visualization and instant alerts
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group">
            <img 
              src={dashboardImage} 
              alt="HelmetSafe dashboard showing real-time helmet detection analytics, camera feeds, and violation reports" 
              className="w-full h-auto"
            />
            
            {/* Video Play Overlay */}
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <div className="bg-accent text-accent-foreground rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="h-12 w-12" fill="currentColor" />
              </div>
            </div>

            {/* Live Indicator */}
            <div className="absolute top-4 left-4 bg-destructive/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-bold">LIVE DEMO</span>
            </div>
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Cameras Active", value: "12" },
              { label: "Detections Today", value: "1,847" },
              { label: "Accuracy Rate", value: "99.2%" },
              { label: "Avg. Response", value: "185ms" },
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-lg p-4 text-center shadow-[var(--shadow-card)]">
                <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
