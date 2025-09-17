import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-bold gradient-text">ReuniFi</h3>
            <span className="text-muted-foreground">-</span>
            <span className="text-muted-foreground">Connecting Past, Empowering Future</span>
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>© 2024 ReuniFi. Made with</span>
            <Heart size={16} className="text-primary fill-current" />
            <span>for alumni everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;