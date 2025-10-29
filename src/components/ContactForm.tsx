import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Demo request received!",
      description: "Thanks — we'll reach out within 48 hours to schedule your demo.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Demo</h2>
            <p className="text-lg text-muted-foreground">
              See HelmetSafe in action. Schedule a personalized demo with our team.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-[var(--shadow-card)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="John Smith" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization *</Label>
                  <Input 
                    id="organization" 
                    name="organization"
                    placeholder="City Traffic Department" 
                    required 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="use-case">Use Case *</Label>
                <Select name="use-case" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="municipal">Municipal Traffic Enforcement</SelectItem>
                    <SelectItem value="fleet">Fleet Safety Management</SelectItem>
                    <SelectItem value="campus">Campus Security</SelectItem>
                    <SelectItem value="parking">Parking Management</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your project</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Describe your deployment needs, number of cameras, integration requirements, etc."
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Preferred Demo Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sample-video">Sample Video (Optional)</Label>
                  <div className="relative">
                    <Input 
                      id="sample-video" 
                      name="sample-video"
                      type="file"
                      accept="video/*"
                      className="cursor-pointer"
                    />
                    <Upload className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Schedule Demo"}
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  By submitting this form, you agree to our Privacy Policy. We'll only use your information to schedule your demo and send relevant product updates.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
