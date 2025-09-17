import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, Calendar, MapPin } from "lucide-react";

interface AlumniProfileDetailProps {
  alumnus: {
    id: number;
    name: string;
    batch: string;
    company: string;
    position: string;
    location: string;
    skills: string[];
    email: string;
    profileImage?: string;
  };
  onBack: () => void;
}

const AlumniProfileDetail = ({ alumnus, onBack }: AlumniProfileDetailProps) => {
  const [requestSent, setRequestSent] = useState(false);

  const handleMentorshipRequest = () => {
    setRequestSent(true);
    // In real app, would send API request
    setTimeout(() => setRequestSent(false), 3000);
  };

  const relatedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      type: "Full Time",
      salary: "₹16,810",
      location: "Remote",
      companyLogo: "G"
    },
    {
      id: 2,
      title: "Full Stack Developer", 
      company: "Microsoft",
      type: "Full Time",
      salary: "₹10-14k",
      location: "Onsite",
      companyLogo: "M"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={18} />
          Back to Directory
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="text-center">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {alumnus.name.charAt(0)}
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold text-foreground mb-2">{alumnus.name}</h1>
                <p className="text-primary font-medium mb-4">Batch {alumnus.batch}</p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Company</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Building2 size={16} />
                      <span>{alumnus.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{alumnus.position}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{alumnus.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {alumnus.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="hero"
                  className="w-full mt-6"
                  onClick={handleMentorshipRequest}
                  disabled={requestSent}
                >
                  {requestSent ? "Request Sent!" : "Request Mentorship"}
                </Button>
              </div>
            </Card>
          </div>

          {/* Related Job Openings */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Job Openings</h2>
            
            <div className="space-y-4">
              {relatedJobs.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-primary">{job.companyLogo}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                      
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.salary}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfileDetail;