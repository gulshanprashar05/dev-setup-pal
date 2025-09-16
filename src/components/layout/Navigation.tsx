import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Menu, X, Users, Calendar, Briefcase, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Alumni Directory", href: "#alumni", icon: Users },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Jobs", href: "#jobs", icon: Briefcase },
    { name: "Forums", href: "#forums", icon: MessageCircle },
    { name: "Mentorship", href: "#mentorship", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">AlumNexus</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                  >
                    <Icon size={16} />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Join Network
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon size={18} />
                {item.name}
              </a>
            );
          })}
          <div className="px-3 pt-4 pb-2 space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="w-full">
              Join Network
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;