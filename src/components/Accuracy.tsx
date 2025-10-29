const Accuracy = () => {
  const metrics = [
    { label: "Detection Accuracy", value: 99.2, color: "bg-accent" },
    { label: "False Positive Rate", value: 2.1, color: "bg-primary" },
    { label: "Edge Device FPS (Jetson)", value: 85, color: "bg-accent" },
    { label: "Cloud Processing FPS", value: 95, color: "bg-primary" },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Accuracy & Performance</h2>
          <p className="text-lg text-muted-foreground">
            Industry-leading benchmarks across diverse environments and device classes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-end justify-between mb-3">
                <h3 className="text-lg font-semibold">{metric.label}</h3>
                <span className="text-3xl font-bold text-accent">{metric.value}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full ${metric.color} transition-all duration-1000 ease-out rounded-full`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: "<200ms", label: "Average Latency" },
            { value: "24/7", label: "Uptime Monitoring" },
            { value: "50+", label: "Cities Deployed" },
            { value: "10M+", label: "Detections Daily" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accuracy;
