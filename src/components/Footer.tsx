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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Horizon<span className="text-accent"> Property Services</span>
            </div>
            <p className="text-accent mb-6">
              Your trusted regional property service provider across Northeastern NC & Hampton Roads. 
              Professional repairs, installations, and maintenance for your home.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-accent">
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
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-accent">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Estimate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-accent">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <div>
                  <a href="tel:+19194577325" className="font-semibold text-white hover:underline">(919) 457-7325</a>
                  <p className="text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <div>
                  <a href="mailto:office@horizonpropertyservices.com" className="hover:text-white transition-colors">office@horizonpropertyservices.com</a>
                  <p className="text-sm">2-hour response time</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <div>
                  <p>Serving Elizabeth City, NC</p>
                  <p className="text-sm">& surrounding areas</p>
                </div>
              </div>
            </div>

            <Button variant="primary" className="w-full mt-6" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Horizon Property Services. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
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