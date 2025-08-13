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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              ElizabethCity<span className="text-secondary">Property Services</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted local handyman service in Elizabeth City, NC. 
              Professional repairs, installations, and maintenance for your home.
            </p>
            
            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-secondary fill-current" size={16} />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 from 127+ reviews</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">General Repairs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Painting Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electrical Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plumbing Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Installation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Estimate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <div>
                  <p className="font-semibold text-white">(252) 555-0123</p>
                  <p className="text-sm">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <div>
                  <p>info@elizabethcitypro.com</p>
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

            <Button variant="cta" className="w-full mt-6">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 ElizabethCity Pro. All rights reserved.</p>
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