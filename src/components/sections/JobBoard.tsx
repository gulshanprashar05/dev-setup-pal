import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, DollarSign, Users } from "lucide-react";

const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      postedBy: "Sarah Johnson",
      postedTime: "2 hours ago",
      description: "Looking for an experienced frontend developer to join our growing team...",
      skills: ["React", "TypeScript", "Node.js"],
      applicants: 12,
      isUrgent: true,
    },
    {
      id: 2,
      title: "Product Manager Intern",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$25/hour",
      postedBy: "Michael Chen",
      postedTime: "1 day ago",
      description: "Great opportunity for students to gain real-world PM experience...",
      skills: ["Analytics", "Strategy", "Communication"],
      applicants: 8,
      isUrgent: false,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio Pro",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$85k - $110k",
      postedBy: "Emily Rodriguez",
      postedTime: "3 days ago",
      description: "Join our creative team and work on exciting digital products...",
      skills: ["Figma", "User Research", "Prototyping"],
      applicants: 15,
      isUrgent: false,
    },
  ];

  return (
    <section id="jobs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Job & Internship Board
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover career opportunities posted by fellow alumni. From internships to senior positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, index) => (
            <Card
              key={job.id}
              className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {job.isUrgent && (
                <Badge className="mb-3 bg-destructive/10 text-destructive hover:bg-destructive/20">
                  🚨 Urgent Hiring
                </Badge>
              )}
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-primary font-medium mb-1">{job.company}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    {job.type}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-accent mb-3">
                <DollarSign size={14} />
                <span className="font-medium">{job.salary}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {job.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{job.applicants} applicants</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{job.postedTime}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  Posted by <span className="text-primary font-medium">{job.postedBy}</span>
                </p>
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Jobs (250+)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobBoard;