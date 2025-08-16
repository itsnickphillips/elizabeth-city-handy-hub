
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
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl lg:text-2xl font-bold mb-4">
              Horizon<span className="text-accent"> Property Services</span>
            </div>
            <p className="text-accent mb-6 text-sm lg:text-base leading-relaxed">
              Your trusted regional property service provider across Northeastern NC & Hampton Roads. 
              Professional repairs, installations, and maintenance for your home.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Our Services</h3>
            <ul className="space-y-2 lg:space-y-3 text-accent text-sm lg:text-base">
              <li><a href="#services" className="hover:text-white transition-colors">General Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painting Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Light Fixture & Fan Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Plumbing Fixture Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Home Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Installation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-3 text-accent text-sm lg:text-base">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Estimate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Contact Information</h3>
            <div className="space-y-3 lg:space-y-4 text-accent text-sm lg:text-base">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+19194577325" className="font-semibold text-white hover:underline break-all">(919) 457-7325</a>
                  <p className="text-xs lg:text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:office@horizonpropertyservices.com" className="hover:text-white transition-colors break-all text-sm">office@horizonpropertyservices.com</a>
                  <p className="text-xs lg:text-sm">2-hour response time</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Serving Elizabeth City, NC</p>
                  <p className="text-xs lg:text-sm">& surrounding areas</p>
                </div>
              </div>
            </div>

            <Button variant="primary" className="w-full mt-4 lg:mt-6 text-sm lg:text-base py-2 lg:py-3" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>
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
