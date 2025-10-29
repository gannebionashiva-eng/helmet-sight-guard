import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "HelmetSafe has transformed our traffic enforcement. We've seen a 40% reduction in helmet violations within the first three months of deployment.",
      author: "Rajesh Kumar",
      role: "Traffic Commissioner",
      organization: "Mumbai Municipal Corporation",
    },
    {
      quote: "The accuracy and real-time capabilities are impressive. Integration with our existing ticketing system was seamless.",
      author: "Sarah Chen",
      role: "Fleet Safety Manager",
      organization: "DeliverEase Logistics",
    },
    {
      quote: "Privacy controls and on-device processing gave us the confidence to deploy city-wide. The analytics dashboard is incredibly insightful.",
      author: "Michael Rodriguez",
      role: "Smart City Director",
      organization: "Austin Department of Transportation",
    },
  ];

  const logos = [
    "Mumbai Traffic Police",
    "Austin DOT",
    "DeliverEase",
    "Campus Security Alliance",
    "SafeRide Fleet",
    "Metro City Council",
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Cities & Fleets</h2>
          <p className="text-lg text-muted-foreground">
            Hear from organizations using HelmetSafe to improve rider safety
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] card-hover relative"
            >
              <Quote className="h-10 w-10 text-accent/20 absolute top-4 right-4" />
              
              <p className="text-sm text-muted-foreground italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-accent font-medium">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6">Deployed in 50+ cities worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="bg-secondary px-6 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
