
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://yylgysaoxzwgzwudphcc.supabase.co/storage/v1/object/public/assets/HPS_Logo_TransparentBG_WebsiteHeader.png"
              alt="Horizon Property Services Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="sm" asChild>
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="primary" size="sm" className="mt-4 w-full" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Free Quote</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
