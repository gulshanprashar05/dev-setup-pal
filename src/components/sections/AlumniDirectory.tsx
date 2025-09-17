import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, GraduationCap, Linkedin, Mail, MessageCircle } from "lucide-react";
import AlumniProfileDetail from "./AlumniProfileDetail";

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [selectedAlumnus, setSelectedAlumnus] = useState<any>(null);

  // Mock alumni data
  const alumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      location: "San Francisco, CA",
      graduationYear: "2018",
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face",
      expertise: ["AI/ML", "Web Development", "Product Management"],
      isAvailableForMentorship: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      graduationYear: "2016",
      department: "Business Administration",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Product Strategy", "Data Analytics", "Leadership"],
      isAvailableForMentorship: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UX Design Lead",
      company: "Adobe",
      location: "Austin, TX",
      graduationYear: "2019",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      expertise: ["UX/UI Design", "Design Systems", "User Research"],
      isAvailableForMentorship: false,
    },
    {
      id: 4,
      name: "David Kumar",
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      graduationYear: "2020",
      department: "Statistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Machine Learning", "Statistics", "Python"],
      isAvailableForMentorship: true,
    },
  ];

  const filteredAlumni = alumni.filter(alum => {
    const matchesSearch = alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alum.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterBy === "all" || 
                         (filterBy === "mentorship" && alum.isAvailableForMentorship) ||
                         alum.department.toLowerCase() === filterBy.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const handleConnect = (alumnus: any) => {
    setSelectedAlumnus(alumnus);
  };

  if (selectedAlumnus) {
    return (
      <AlumniProfileDetail 
        alumnus={{
          ...selectedAlumnus,
          batch: selectedAlumnus.graduationYear,
          skills: selectedAlumnus.expertise,
          position: selectedAlumnus.title
        }} 
        onBack={() => setSelectedAlumnus(null)} 
      />
    );
  }

  return (
    <section id="alumni" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alumni Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with successful graduates from your institution. Find mentors, collaborators, and career opportunities.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search by name, company, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Filter by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Alumni</SelectItem>
              <SelectItem value="mentorship">Available for Mentorship</SelectItem>
              <SelectItem value="computer science">Computer Science</SelectItem>
              <SelectItem value="business administration">Business</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="statistics">Statistics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alum, index) => (
            <Card
              key={alum.id}
              className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-16 h-16 rounded-full object-cover shadow-card"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{alum.name}</h3>
                  <p className="text-primary font-medium">{alum.title}</p>
                  <p className="text-muted-foreground text-sm">{alum.company}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin size={14} className="mr-2" />
                  {alum.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap size={14} className="mr-2" />
                  {alum.department} • Class of {alum.graduationYear}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {alum.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {alum.isAvailableForMentorship && (
                <div className="mb-4 p-2 bg-accent/10 rounded-md">
                  <span className="text-xs text-accent-foreground font-medium">
                    ✨ Available for Mentorship
                  </span>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleConnect(alum)}
                >
                  <Mail size={14} />
                  Connect
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin size={14} />
                </Button>
                {alum.isAvailableForMentorship && (
                  <Button variant="accent" size="sm">
                    <MessageCircle size={14} />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Alumni ({alumni.length * 25}+)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlumniDirectory;