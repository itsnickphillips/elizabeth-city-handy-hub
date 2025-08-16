
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail
} from "lucide-react";
import hpsLogo from "@/assets/hps-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        {/* Logo */}
        <div className="text-center mb-2">
          <img 
            src={hpsLogo} 
            alt="Horizon Property Services Logo" 
            className="h-12 mx-auto"
          />
        </div>

        {/* Email */}
        <div className="text-center">
          <a href="mailto:office@horizonpropertyservice.com" className="text-white hover:text-accent transition-colors text-sm">
            office@horizonpropertyservice.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
