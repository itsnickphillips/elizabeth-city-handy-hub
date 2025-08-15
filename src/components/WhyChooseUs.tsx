import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  MapPin,
  CheckCircle,
  Star
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind. Your property and investment are protected."
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "Professional planning with advance scheduling that ensures proper preparation and quality results every time."
  },
  {
    icon: DollarSign,
    title: "Fair & Transparent Pricing",
    description: "No hidden fees or surprise charges. Get honest, upfront pricing before any work begins."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our skilled craftsmen have years of experience and take pride in quality workmanship."
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee. Your happiness is our priority."
  },
  {
    icon: MapPin,
    title: "Regional NC & VA Business",
    description: "Proudly serving communities across both states for years. We're your neighbors, not just another contractor."
  }
];

const stats = [
  { number: "100%", label: "Satisfaction Rate" },
  { number: "Decades", label: "Combined Experience" },
  { number: "2 States", label: "Service Area" },
  { number: "24/7", label: "Quote Requests" }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Choose Horizon Property Services?
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            When you need reliable handyman services across NC and VA, choose the team that puts 
            quality, integrity, and customer satisfaction first.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-primary rounded-lg p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Trusted by Homeowners Across NC & VA
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white" size={20} />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white" size={20} />
                  <span>Licensed for Eligible Work</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  NC & VA
                </div>
                <p className="text-lg">Serving Both States</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white" size={20} />
                  <span>Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white" size={20} />
                  <span>Local Community Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;