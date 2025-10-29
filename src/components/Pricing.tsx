import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Pilot",
      price: "Custom",
      description: "Perfect for testing and small deployments",
      features: [
        "Up to 3 cameras",
        "Cloud processing",
        "Email alerts",
        "CSV export",
        "Community support",
        "30-day trial",
      ],
      cta: "Start Pilot",
      highlighted: false,
    },
    {
      name: "City",
      price: "Custom",
      description: "For municipal traffic departments",
      features: [
        "Up to 50 cameras",
        "Edge + Cloud processing",
        "Real-time webhooks",
        "REST API access",
        "Dashboard analytics",
        "Priority support",
        "Custom integrations",
        "Face blurring",
      ],
      cta: "Contact Sales",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale fleet operations",
      features: [
        "Unlimited cameras",
        "Multi-region deployment",
        "Dedicated infrastructure",
        "Custom ML models",
        "SLA guarantees",
        "24/7 support",
        "Training & onboarding",
        "White-label options",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your deployment scale. All plans include core detection features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] ${
                plan.highlighted 
                  ? "ring-2 ring-accent transform md:scale-105 relative" 
                  : "card-hover"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlighted ? "accent" : "outline"} 
                className="w-full"
                size="lg"
                onClick={scrollToContact}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          All plans are customized based on your specific requirements. Contact our sales team for detailed pricing and volume discounts.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
