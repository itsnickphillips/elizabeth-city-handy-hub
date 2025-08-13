import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              ElizabethCity<span className="text-secondary">Pro</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone size={16} />
                <span>(252) 555-0123</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Mail size={16} />
                <span>info@elizabethcitypro.com</span>
              </div>
            </div>
            <Button variant="cta" size="sm">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;