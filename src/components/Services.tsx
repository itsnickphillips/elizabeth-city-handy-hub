import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Paintbrush, 
  Zap, 
  Droplets, 
  Hammer, 
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Repairs & Maintenance",
    description: "From squeaky doors to wall repairs, we handle everyday fixes with care and precision to keep your home in top shape.",
    features: ["Drywall patching & repair", "Door & window adjustments", "Caulking & weatherstripping", "Light carpentry & trim work"]
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Give your home a fresh look inside or out with quality paintwork done right the first time.",
    features: ["Interior room painting", "Exterior touch-ups", "Cabinet & furniture refinishing", "Staining & sealing"]
  },
  {
    icon: Zap,
    title: "Light Fixture & Fan Installation",
    description: "We'll safely install your new light fixtures or ceiling fans so they look great and work perfectly.",
    features: ["Light fixture mounting", "Ceiling fan installation", "Bulb & cover replacement", "Fixture swaps"]
  },
  {
    icon: Droplets,
    title: "Plumbing Fixture Replacement",
    description: "We handle efficient plumbing work to update or fix your fixtures with professional results.",
    features: ["Faucet & showerhead swaps", "Toilet flapper & handle repairs", "Minor leak fixes", "Drain cover replacements"]
  },
  {
    icon: Settings,
    title: "Home Maintenance",
    description: "Prevent costly repairs with seasonal upkeep and home care that keeps everything running smoothly.",
    features: ["Gutter cleaning", "Pressure washing", "Screen & storm door adjustments", "Seasonal prep tasks"]
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description: "Get your new items set up the right way with secure, professional installation you can trust.",
    features: ["Appliance unboxing & placement", "Shelving & storage installation", "TV mounting", "Smart home device setup"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white section-separator">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional Handyman Services
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            From minor repairs to major installations, our experienced team delivers quality workmanship 
            you can trust. Serving Northeastern NC and Hampton Roads with pride.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-primary shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-foreground">
                        <CheckCircle className="text-primary" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto border border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Something Not Listed?
            </h3>
            <p className="text-foreground mb-6">
              We handle a wide variety of home improvement projects. Contact us to discuss your specific needs 
              and get a free, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg">
                Call (919) 457-7325
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;