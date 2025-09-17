import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Users, Calendar, UserCheck, Heart, BarChart3, Database } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Centralized Alumni Database",
      description: "Comprehensive profiles with career paths, skills, and contact information. Search and filter to find the perfect connection.",
      link: "/alumni"
    },
    {
      icon: UserCheck,
      title: "Mentorship Matching",
      description: "AI-powered matching system connects students with alumni mentors based on interests, career goals, and expertise.",
      link: "/mentorship"
    },
    {
      icon: Calendar,
      title: "Events Management",
      description: "Discover networking events, reunions, and workshops. RSVP and connect with fellow alumni in your area.",
      link: "/events"
    },
    {
      icon: Heart,
      title: "Fundraising & Donations",
      description: "Support your alma mater through targeted campaigns. Track impact and see how contributions make a difference.",
      link: "/fundraising"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into network growth, engagement metrics, and impact measurement for institutions.",
      link: "/analytics"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Join groups by graduation year, industry, or interests. Foster meaningful connections within your network.",
      link: "/community"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ReuniFi provides comprehensive tools for alumni engagement, student support, and institutional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="ghost" className="w-full justify-start text-primary hover:bg-primary/10" asChild>
                  <a href={feature.link}>
                    Explore Feature →
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="/login">Start Building Your Network</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;