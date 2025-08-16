
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  Star
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Logo Section - Mobile First */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-white">HPS</span>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
            Horizon<span className="text-accent"> Property Services</span>
          </div>
          <p className="text-accent text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Your trusted regional property service provider across Northeastern NC & Hampton Roads. 
            Professional repairs, installations, and maintenance for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 lg:space-y-4 text-accent text-sm sm:text-base">
              <li><a href="#services" className="hover:text-white transition-colors block py-1">General Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Painting Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Light Fixture & Fan Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Plumbing Fixture Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Home Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Installation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 lg:space-y-4 text-accent text-sm sm:text-base">
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors block py-1">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors block py-1">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors block py-1">Free Estimate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left lg:col-span-1">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-white">Contact Information</h3>
            <div className="space-y-4 lg:space-y-6 text-accent text-sm sm:text-base">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+19194577325" className="font-semibold text-white hover:underline text-lg sm:text-xl">(919) 457-7325</a>
                  <p className="text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:office@horizonpropertyservices.com" className="hover:text-white transition-colors break-all">office@horizonpropertyservices.com</a>
                  <p className="text-sm">2-hour response time</p>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Serving Elizabeth City, NC</p>
                  <p className="text-sm">& surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-8">
              <Button variant="outline" className="flex-1 min-h-[48px] text-sm sm:text-base" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
              <Button variant="outline" className="flex-1 min-h-[48px] text-sm sm:text-base" asChild>
                <a href="tel:+19194577325">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs lg:text-sm text-gray-400 space-y-3 sm:space-y-0">
            <div>
              <p>&copy; 2024 Horizon Property Services. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 lg:space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
