import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Users } from "lucide-react";

const ServiceArea = () => {
  // Updated with new city lists and ZIP code format
  const northCarolinaCities = [
    "Corolla", "Nags Head", "Kill Devil Hills", "Kitty Hawk", "Manteo",
    "Moyock", "Elizabeth City", "Grandy", "Currituck", "Powells Point"
  ];

  const virginiaAreas = [
    "Virginia Beach", "Chesapeake", "Norfolk", "Yorktown", "Poquoson",
    "Suffolk", "Newport News", "Hampton", "Williamsburg"
  ];

  const ncZipCodes = "27927 · 27959 · 27948 · 27949 · 27954 · 27958 · 27909 · 27906 · 27939 · 27929 · 27966";

  const vaZipCodes = "23451 · 23452 · 23453 · 23454 · 23455 · 23456 · 23464 · 23320 · 23321 · 23322 · 23502 · 23503 · 23504 · 23505 · 23508 · 23518";

  return (
    <section className="py-20 bg-white section-separator">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Serving Northeastern NC & Hampton Roads
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Your premier property service provider spanning the coastal regions of North Carolina 
            and the Hampton Roads metropolitan area of Virginia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* North Carolina Service Area */}
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">Northeastern North Carolina</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {northCarolinaCities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">ZIP Codes:</p>
                <p className="text-xs text-gray-600">{ncZipCodes}</p>
              </div>
            </CardContent>
          </Card>

          {/* Virginia Service Area */}
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">Hampton Roads Virginia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {virginiaAreas.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">ZIP Codes:</p>
                <p className="text-xs text-gray-600">{vaZipCodes}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Don't see your area? Call us - we cover additional locations!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Regional Promise */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          <Card className="shadow-sm border border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Award className="text-primary" size={32} />
              </div>
              <CardTitle className="text-xl text-primary">Our Regional Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Regional expertise across NC & VA</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Dependable service across both states</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Fully insured for your protection</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Coastal and urban home specialists</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Supporting communities across regions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="text-primary" size={16} />
                    <span>Military-friendly services</span>
                  </div>
                </div>
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
              From the Outer Banks to Virginia Beach, from Elizabeth City to Norfolk, 
              we're here to help with all your home repair and improvement needs across both regions.
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

export default ServiceArea;