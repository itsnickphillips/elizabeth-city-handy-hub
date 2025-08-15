import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <MapPin className="text-primary" size={20} />
                <span className="text-lg text-muted-foreground">Serving Northeastern NC & Hampton Roads</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary">
                Professional and Reliable
                <span className="text-primary block">Handyman Services</span>
                in Your Neighborhood
              </h1>
              <p className="text-xl mb-8 text-foreground font-normal leading-relaxed">
                Repairs, Installations, and Maintenance done right—the first time.
                Professional, licensed, and trusted by homeowners across NC and VA.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-start space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary" size={18} />
                <span className="text-sm text-foreground">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary" size={18} />
                <span className="text-sm text-foreground">Scheduled Service</span>
              </div>
            </div>

            {/* Single CTA */}
            <div>
              <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                Get Free Estimate
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-primary">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground">
                  Call now or schedule your free consultation
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <Button variant="primary" size="lg" className="w-full">
                  <Phone className="mr-2" size={20} />
                  Call (919) 457-7325
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Schedule Online
                </Button>
              </div>

              <div className="text-center space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} />
                  <span>Available 7 Days a Week</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;