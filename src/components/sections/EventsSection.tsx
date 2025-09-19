import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Star, ExternalLink } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Main Auditorium, ITS Engineering College",
      type: "Reunion",
      attendees: 450,
      maxAttendees: 500,
      price: "Free",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop",
      description: "Join us for the biggest alumni gathering of the year! Reconnect with old friends, network with professionals, and celebrate our shared journey.",
      organizer: "Alumni Association",
      featured: true,
    },
    {
      id: 2,
      title: "Tech Career Panel Discussion",
      date: "November 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual (Zoom)",
      type: "Workshop",
      attendees: 127,
      maxAttendees: 200,
      price: "Free",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
      description: "Learn from successful alumni in tech about career growth, industry trends, and job opportunities.",
      organizer: "Sarah Johnson",
      featured: false,
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "January 20, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Hub, Downtown",
      type: "Competition",
      attendees: 89,
      maxAttendees: 150,
      price: "$25",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop",
      description: "Present your startup ideas to successful alumni investors. Win mentorship and funding opportunities.",
      organizer: "Entrepreneurship Club",
      featured: false,
    },
    {
      id: 4,
      title: "Regional Networking Mixer - SF",
      date: "December 5, 2024",
      time: "6:30 PM - 9:30 PM",
      location: "Rooftop Bar, Financial District",
      type: "Networking",
      attendees: 67,
      maxAttendees: 100,
      price: "$35",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop",
      description: "Connect with alumni professionals in the San Francisco Bay Area over drinks and appetizers.",
      organizer: "SF Alumni Chapter",
      featured: false,
    },
  ];

  const eventTypes = [
    { type: "All", count: events.length, color: "bg-primary" },
    { type: "Reunion", count: 1, color: "bg-secondary" },
    { type: "Workshop", count: 1, color: "bg-accent" },
    { type: "Networking", count: 1, color: "bg-muted" },
    { type: "Competition", count: 1, color: "bg-destructive" },
  ];

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events & Reunions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected through meaningful events. From reunions to professional workshops and networking mixers.
          </p>
        </div>

        {/* Event Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {eventTypes.map((eventType) => (
            <Button
              key={eventType.type}
              variant={eventType.type === "All" ? "hero" : "outline"}
              size="sm"
              className="flex items-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${eventType.color}`}></div>
              {eventType.type} ({eventType.count})
            </Button>
          ))}
        </div>

        {/* Featured Event */}
        {events.filter(e => e.featured).map((event) => (
          <Card key={event.id} className="mb-12 overflow-hidden bg-gradient-card shadow-glow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Star size={12} className="mr-1" />
                    Featured Event
                  </Badge>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={18} />
                    <div>
                      <div className="font-medium">{event.date}</div>
                      <div className="text-sm text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-accent" size={18} />
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div className="text-sm text-muted-foreground">By {event.organizer}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-secondary" size={18} />
                    <div>
                      <div className="font-medium">{event.attendees}/{event.maxAttendees} attending</div>
                      <div className="text-sm text-muted-foreground">{event.price}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="gradient" size="lg" onClick={() => window.location.href = '/event-register'}>
                    Register Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Other Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.filter(e => !e.featured).map((event, index) => (
            <Card
              key={event.id}
              className="overflow-hidden bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {event.type}
                </Badge>
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                  {event.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users size={14} />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1" onClick={() => window.location.href = '/event-register'}>
                    Register
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Events (25+)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
