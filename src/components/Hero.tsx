
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 lg:mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4 lg:mb-6">
                <MapPin className="text-primary flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">Serving Northeastern NC & Hampton Roads</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6 text-primary">
                Property Care You Can Trust
                <span className="text-primary block mt-2">Serving Northeastern NC & Hampton Roads</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 lg:mb-8 text-foreground font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From repairs to refreshes, Horizon Property Services delivers quality work with local care.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary flex-shrink-0" size={16} />
                <span className="text-sm text-foreground">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary flex-shrink-0" size={16} />
                <span className="text-sm text-foreground">Scheduled Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto min-h-[48px]" asChild>
                <a href="#contact">Get Free Estimate</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto lg:hidden min-h-[48px]" asChild>
                <a href="tel:+19194577325">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>
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

              <div className="mb-6">
                <Button variant="primary" size="lg" className="w-full" asChild>
                  <a href="tel:+19194577325">
                    <Phone className="mr-2" size={20} />
                    Call (919) 457-7325
                  </a>
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
