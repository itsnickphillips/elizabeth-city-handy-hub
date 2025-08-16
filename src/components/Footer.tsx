
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail
} from "lucide-react";
import hpsLogo from "@/assets/hps-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img 
            src={hpsLogo} 
            alt="Horizon Property Services Logo" 
            className="h-16 sm:h-20 mx-auto mb-3"
          />
          <p className="text-accent text-sm leading-relaxed max-w-xl mx-auto">
            Your trusted regional property service provider across Northeastern NC & Hampton Roads.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-3">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          
          {/* Phone */}
          <div className="flex items-center justify-center space-x-2">
            <Phone size={18} className="text-accent" />
            <div>
              <a href="tel:+19194577325" className="font-bold text-white hover:text-accent transition-colors">(919) 457-7325</a>
              <p className="text-xs text-accent">Available 7 days a week</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center justify-center space-x-2">
            <Mail size={18} className="text-accent" />
            <div>
              <a href="mailto:office@horizonpropertyservice.com" className="font-semibold text-white hover:text-accent transition-colors text-sm">office@horizonpropertyservice.com</a>
              <p className="text-xs text-accent">2-hour response time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs lg:text-sm text-gray-400 space-y-3 sm:space-y-0">
            <div>
              <p>&copy; 2025 Horizon Property Services. All rights reserved.</p>
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
