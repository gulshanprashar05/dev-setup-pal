import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Sparkles, ArrowRight, Target, Calendar } from "lucide-react";

const AIMatch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    currentRole: "",
    careerGoals: "",
    interests: [],
    experience: "",
    preferredMentorType: "",
    availability: "",
  });

  const [isMatching, setIsMatching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMatching(true);
    
    // Simulate AI matching process
    setTimeout(() => {
      setIsMatching(false);
      setMatchFound(true);
    }, 3000);
  };

  const interestOptions = [
    "Career Advancement",
    "Technical Skills",
    "Leadership Development",
    "Industry Insights",
    "Networking",
    "Entrepreneurship",
    "Work-Life Balance",
    "Skill Transition"
  ];

  const suggestedMentors = [
    {
      name: "Gulshan Prashar",
      title: "Senior Software Engineer at Google",
      matchScore: 95,
      expertise: ["AI/ML", "Career Growth", "Technical Leadership"],
      image: "/src/assets/gulshan.jpeg",
    },
    {
      name: "Mishthi Jamini",
      title: "Senior Product Manager at Microsoft", 
      matchScore: 88,
      expertise: ["Product Strategy", "Leadership", "Career Transition"],
      image: "/src/assets/mishthi.jpeg",
    }
  ];

  if (matchFound) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <section className="py-20 bg-gradient-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="mb-8">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h1 className="text-4xl font-bold mb-4">Perfect Matches Found!</h1>
                <p className="text-xl text-white/90">
                  Our AI has found mentors that align perfectly with your goals and interests.
                </p>
              </div>

              <div className="grid gap-6 mt-12">
                {suggestedMentors.map((mentor, index) => (
                  <Card key={index} className="p-6 bg-white text-foreground">
                    <div className="flex items-start gap-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{mentor.name}</h3>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-primary font-bold">{mentor.matchScore}% Match</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{mentor.title}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.expertise.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <Button variant="hero" className="group">
                          Connect with {mentor.name.split(' ')[0]}
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Find More Matches
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                AI Mentor Matching
              </h1>
              <p className="text-xl text-muted-foreground">
                Let our AI find the perfect alumni mentor based on your goals and interests.
              </p>
            </div>

            <Card className="p-8 bg-gradient-card">
              {isMatching ? (
                <div className="text-center py-20">
                  <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4">Finding Your Perfect Match...</h3>
                  <p className="text-muted-foreground">
                    Our AI is analyzing hundreds of alumni profiles to find mentors that align with your goals.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="graduation">Graduation Year</Label>
                      <Select onValueChange={(value) => setFormData({...formData, graduationYear: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="role">Current Role/Status</Label>
                      <Input
                        id="role"
                        value={formData.currentRole}
                        onChange={(e) => setFormData({...formData, currentRole: e.target.value})}
                        placeholder="e.g., Software Engineer, Student, Job Seeker"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="goals">Career Goals & Aspirations</Label>
                    <Textarea
                      id="goals"
                      value={formData.careerGoals}
                      onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
                      placeholder="Describe what you want to achieve in your career..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div>
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                      {interestOptions.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  interests: [...formData.interests, interest]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  interests: formData.interests.filter(i => i !== interest)
                                });
                              }
                            }}
                          />
                          <Label htmlFor={interest} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresh-graduate">Fresh Graduate</SelectItem>
                        <SelectItem value="0-2-years">0-2 Years Experience</SelectItem>
                        <SelectItem value="2-5-years">2-5 Years Experience</SelectItem>
                        <SelectItem value="5-plus-years">5+ Years Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="availability">Preferred Meeting Schedule</Label>
                    <Select onValueChange={(value) => setFormData({...formData, availability: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays-morning">Weekdays Morning</SelectItem>
                        <SelectItem value="weekdays-evening">Weekdays Evening</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" variant="gradient" size="xl" className="w-full group">
                      <Brain className="mr-2" size={20} />
                      Find My Perfect Mentor Match
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AIMatch;