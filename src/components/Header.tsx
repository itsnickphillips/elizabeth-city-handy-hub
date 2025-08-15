import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
          <img 
            src="https://yylgysaoxzwgzwudphcc.supabase.co/storage/v1/object/public/assets/HPS_Logo_TransparentBG.png"
            alt="Horizon Property Services Logo"
            className="h-14 w-auto"
          />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" size="sm">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;