
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
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Logo Section - Keep existing for now */}
        <div className="text-center mb-8">
          <div className="text-2xl font-bold mb-2">
            <span className="text-white">HPS</span>
          </div>
          <div className="text-lg font-bold mb-4">
            Horizon<span className="text-accent"> Property Services</span>
          </div>
          <p className="text-accent text-sm leading-relaxed max-w-xl mx-auto">
            Your trusted regional property service provider across Northeastern NC & Hampton Roads.
          </p>
        </div>

        {/* Contact Information - Now prominent */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-6 text-white text-center">Contact Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
            
            {/* Phone */}
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Phone size={24} className="flex-shrink-0 text-accent" />
              <div>
                <a href="tel:+19194577325" className="font-bold text-white hover:text-accent transition-colors text-lg">(919) 457-7325</a>
                <p className="text-sm text-accent">Available 7 days a week</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Mail size={24} className="flex-shrink-0 text-accent" />
              <div>
                <a href="mailto:office@horizonpropertyservice.com" className="font-semibold text-white hover:text-accent transition-colors text-sm sm:text-base">office@horizonpropertyservice.com</a>
                <p className="text-sm text-accent">2-hour response time</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:col-span-2 lg:col-span-1">
              <MapPin size={24} className="flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-white">Elizabeth City, NC</p>
                <p className="text-sm text-accent">& surrounding areas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-md mx-auto">
          <Button variant="outline" className="px-6 py-3" asChild>
            <a href="#contact">Get Free Quote</a>
          </Button>
          <Button variant="outline" className="px-6 py-3" asChild>
            <a href="tel:+19194577325">
              <Phone className="mr-2" size={18} />
              Call Now
            </a>
          </Button>
        </div>

        {/* Services - Condensed */}
        <div className="text-center">
          <h3 className="text-base font-semibold mb-4 text-white">Our Services</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-accent">
            <span>General Repairs</span>
            <span>Painting Services</span>
            <span>Light Fixture & Fan Installation</span>
            <span>Plumbing Fixture Replacement</span>
            <span>Home Maintenance</span>
            <span>Installation Services</span>
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
