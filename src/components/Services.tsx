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
    description: "From fixing squeaky doors to patching holes in walls, we handle all your general home repair needs with precision and care.",
    features: ["Drywall repair & patching", "Door & window adjustments", "Caulking & weatherstripping", "Basic carpentry & trim work"]
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Transform your space with our professional interior and exterior painting services. Quality materials and expert application guaranteed.",
    features: ["Interior painting", "Exterior touch-ups", "Cabinet refinishing", "Staining & varnishing"]
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Safe and reliable electrical services from licensed professionals. From outlets to ceiling fans, we've got you covered.",
    features: ["Outlet & switch installation", "Light fixture mounting", "Ceiling fan installation", "GFCI outlet upgrades"]
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Quick and effective plumbing solutions for your home. We fix leaks, unclog drains, and install fixtures promptly.",
    features: ["Leak repairs", "Drain cleaning", "Fixture installation", "Toilet repair"]
  },
  {
    icon: Settings,
    title: "Home Maintenance",
    description: "Keep your home in top condition with our comprehensive maintenance services. Preventive care saves money long-term.",
    features: ["Gutter cleaning", "Pressure washing", "HVAC maintenance", "Seasonal prep"]
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description: "Professional installation of appliances, fixtures, and home improvements. Get it done right the first time.",
    features: ["Appliance installation", "Shelving & storage", "TV mounting", "Smart home devices"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Handyman Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From minor repairs to major installations, our experienced team delivers quality workmanship 
            you can trust. Serving Elizabeth City, NC and surrounding areas with pride.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="text-accent" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white">
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
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Not Listed?
            </h3>
            <p className="text-gray-600 mb-6">
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