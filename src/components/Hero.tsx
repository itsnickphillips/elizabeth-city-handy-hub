import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-light to-secondary"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="text-secondary" size={20} />
                <span className="text-lg">Serving Elizabeth City, NC & Surrounding Areas</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Fast and Reliable
                <span className="text-secondary block">Handyman Services</span>
                in Your Neighborhood
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Repairs, Installations, and Maintenance done right—the first time.
                Professional, licensed, and trusted by Elizabeth City homeowners.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span>Free Estimates</span>
              </div>
            </div>

            {/* Service Area Input - ZIP Code Search */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Find Your Trusted Handyman Now</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your ZIP code (27909, 27906, etc.)"
                  className="bg-white text-gray-900 border-0"
                />
                <Button variant="secondary" size="lg" className="whitespace-nowrap">
                  Find My Handyman
                </Button>
              </div>
              <p className="text-sm text-white/80 mt-2">
                Serving Elizabeth City (27909), Camden (27921), Hertford (27944), and all of Pasquotank County
              </p>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white rounded-lg shadow-custom p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600">
                  Call now for immediate service or schedule your free consultation
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

              <div className="text-center space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} />
                  <span>Available 7 Days a Week</span>
                </div>
                <p>Emergency Services Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;