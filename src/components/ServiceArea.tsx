import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Users } from "lucide-react";

const ServiceArea = () => {
  const serviceCities = [
    "Elizabeth City", "Camden", "Hertford", "Winfall", "Chowan University Area",
    "Weeksville", "Nixonton", "Shiloh", "Belcross", "Corapeake"
  ];

  const zipCodes = [
    "27909", "27906", "27921", "27944", "27953", "27972", "27976", "27981"
  ];

  return (
    <section className="py-20 bg-white section-separator">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Proudly Serving Elizabeth City & Beyond
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            As your local handyman experts, we're committed to providing exceptional service 
            throughout Pasquotank County and surrounding areas in North Carolina.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Service Areas */}
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">Cities We Serve</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {serviceCities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ZIP Codes */}
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">ZIP Codes Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {zipCodes.map((zip, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>{zip}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Don't see your ZIP code? Call us - we may still serve your area!
              </p>
            </CardContent>
          </Card>

          {/* Local Promise */}
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Award className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">Our Local Promise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="text-primary" size={16} />
                <span>Local Elizabeth City business</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="text-primary" size={16} />
                <span>Fast response times</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="text-primary" size={16} />
                <span>Community-focused service</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="text-primary" size={16} />
                <span>Supporting local economy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="text-primary" size={16} />
                <span>Familiar with local homes</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-custom p-8 max-w-2xl mx-auto border border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-foreground mb-6">
              Whether you're in downtown Elizabeth City or anywhere in Pasquotank County, 
              we're here to help with all your home repair and improvement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Find My Handyman
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

export default ServiceArea;