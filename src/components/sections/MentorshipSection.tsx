import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, MessageCircle, Calendar, Award, ArrowRight } from "lucide-react";

const MentorshipSection = () => {
  const mentors = [
    {
      id: 1,
      name: "Gulshan Prashar",
      title: "Senior Software Engineer",
      company: "Google",
      rating: 4.9,
      sessions: 127,
      expertise: ["Career Growth", "Technical Leadership", "AI/ML"],
      image: "/src/assets/gulshan.jpeg",
      price: "Free",
      nextAvailable: "Tomorrow 2:00 PM",
    },
    {
      id: 2,
      name: "Mishthi Jamini", 
      title: "Senior Product Manager",
      company: "Microsoft",
      rating: 4.8,
      sessions: 89,
      expertise: ["Product Strategy", "Leadership", "Startups"],
      image: "/src/assets/mishthi.jpeg",
      price: "Free",
      nextAvailable: "Friday 10:00 AM",
    },
    {
      id: 3,
      name: "Ayush Singh",
      title: "Frontend Developer",
      company: "Adobe",
      rating: 5.0,
      sessions: 156,
      expertise: ["React Development", "UI/UX Design", "Career Transition"],
      image: "/src/assets/ayush.jpeg",
      price: "Free",
      nextAvailable: "Monday 3:00 PM",
    },
    {
      id: 4,
      name: "Alok Pandey",
      title: "Data Scientist",
      company: "Netflix",
      rating: 4.7,
      sessions: 94,
      expertise: ["Machine Learning", "Data Analytics", "Python"],
      image: "/src/assets/alok.jpeg",
      price: "Free",
      nextAvailable: "Wednesday 11:00 AM",
    },
    {
      id: 5,
      name: "Aush Tomar",
      title: "Software Developer",
      company: "Amazon",
      rating: 4.6,
      sessions: 73,
      expertise: ["Backend Development", "Cloud Computing", "Java"],
      image: "/src/assets/tomar.jpeg",
      price: "Free",
      nextAvailable: "Thursday 4:00 PM",
    },
  ];

  const stats = [
    { icon: Users, label: "Active Mentors", value: "500+" },
    { icon: MessageCircle, label: "Sessions Completed", value: "2.5K+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: Award, label: "Success Stories", value: "1.2K+" },
  ];

  return (
    <section id="mentorship" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Mentorship
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get matched with the perfect alumni mentor based on your goals, interests, and career aspirations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="p-6 text-center bg-gradient-card hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* How it Works */}
        <div className="bg-card rounded-xl p-8 mb-12 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8">How AI Mentorship Matching Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-semibold mb-2">Share Your Goals</h4>
              <p className="text-muted-foreground text-sm">Tell us about your career aspirations, interests, and what you want to learn.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h4 className="font-semibold mb-2">AI Finds Perfect Match</h4>
              <p className="text-muted-foreground text-sm">Our AI analyzes mentor expertise, availability, and compatibility to find your ideal match.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h4 className="font-semibold mb-2">Start Learning</h4>
              <p className="text-muted-foreground text-sm">Connect with your mentor and begin your personalized learning journey.</p>
            </div>
          </div>
        </div>

        {/* Featured Mentors */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <Card
                key={mentor.id}
                className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover shadow-card"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{mentor.name}</h4>
                    <p className="text-primary font-medium text-sm">{mentor.title}</p>
                    <p className="text-muted-foreground text-sm">{mentor.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{mentor.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {mentor.sessions} sessions
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {mentor.price}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.expertise.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  <span>Next available: {mentor.nextAvailable}</span>
                </div>

                <Button variant="hero" size="sm" className="w-full group">
                  Book Session
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="xl" className="group" onClick={() => window.location.href = '/ai-match'}>
            Get Your AI Match
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;