
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
    title: "Professional & Reliable",
    description: "Fully insured for your peace of mind. Your property and investment are protected with professional service."
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6">
            Why Choose Horizon Property Services?
          </h2>
          <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            When you need reliable handyman services across NC and VA, choose the team that puts 
            quality, integrity, and customer satisfaction first.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col">
                  <div className="mx-auto mb-4 lg:mb-6 p-3 lg:p-4 rounded-full w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-primary/10">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-primary rounded-lg p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">
              Trusted by Homeowners Across NC & VA
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white flex-shrink-0" size={18} />
                  <span className="text-sm lg:text-base">Fully Insured</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white flex-shrink-0" size={18} />
                  <span className="text-sm lg:text-base">Background Checked</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  NC & VA
                </div>
                <p className="text-base lg:text-lg">Serving Both States</p>
              </div>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white flex-shrink-0" size={18} />
                  <span className="text-sm lg:text-base">Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="text-white flex-shrink-0" size={18} />
                  <span className="text-sm lg:text-base">Local Community Focus</span>
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
