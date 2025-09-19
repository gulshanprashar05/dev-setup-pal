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
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Check, UserPlus } from "lucide-react";

const EventRegister = () => {
  const [selectedEvent, setSelectedEvent] = useState("reunion-2024");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduationYear: "",
    department: "",
    currentCompany: "",
    currentRole: "",
    dietaryRestrictions: "",
    emergencyContact: "",
    attendingWithGuests: false,
    guestCount: "0",
    specialRequests: "",
    tshirtSize: "",
    agreeToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const events = {
    "reunion-2024": {
      title: "Annual Alumni Reunion 2024",
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Main Auditorium, ITS Engineering College",
      price: "Free",
      description: "Join us for the biggest alumni gathering of the year! Reconnect with old friends, network with professionals, and celebrate our shared journey.",
      capacity: 500,
      registered: 450,
    },
    "tech-panel": {
      title: "Tech Career Panel Discussion",
      date: "November 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual (Zoom)",
      price: "Free",
      description: "Learn from successful alumni in tech about career growth, industry trends, and job opportunities.",
      capacity: 200,
      registered: 127,
    }
  };

  const alumniList = [
    { name: "Gulshan Prashar", batch: "2022", company: "Google", role: "Senior Software Engineer" },
    { name: "Mishthi Jamini", batch: "2021", company: "Microsoft", role: "Product Manager" },
    { name: "Ayush Singh", batch: "2023", company: "Adobe", role: "Frontend Developer" },
    { name: "Alok Pandey", batch: "2020", company: "Netflix", role: "Data Scientist" },
    { name: "Aush Tomar", batch: "2022", company: "Amazon", role: "Software Developer" },
    { name: "Priya Sharma", batch: "2019", company: "Flipkart", role: "Product Designer" },
    { name: "Rahul Kumar", batch: "2021", company: "Zomato", role: "Backend Developer" },
    { name: "Sneha Gupta", batch: "2020", company: "Paytm", role: "Data Analyst" },
  ];

  const currentEvent = events[selectedEvent];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <section className="py-20 bg-gradient-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <Check className="w-20 h-20 mx-auto mb-6 text-green-300" />
              <h1 className="text-4xl font-bold mb-4">Registration Successful!</h1>
              <p className="text-xl text-white/90 mb-8">
                You're all set for {currentEvent.title}
              </p>
              
              <Card className="p-6 bg-white text-foreground max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={18} />
                    <span>{currentEvent.date} at {currentEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={18} />
                    <span>{currentEvent.location}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm">
                    📧 A confirmation email has been sent to <strong>{formData.email}</strong>
                    <br />
                    📱 You'll receive event reminders and updates on your phone.
                  </p>
                </div>
              </Card>

              <div className="mt-8 flex gap-4 justify-center">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Add to Calendar
                </Button>
                <Button variant="secondary">
                  Share with Friends
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
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <UserPlus className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Event Registration
              </h1>
              <p className="text-xl text-muted-foreground">
                Register for upcoming alumni events and reunions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Event Selection & Details */}
              <div className="lg:col-span-1">
                <Card className="p-6 mb-6 bg-gradient-card">
                  <h3 className="text-xl font-bold mb-4">Select Event</h3>
                  <div className="space-y-3">
                    {Object.entries(events).map(([key, event]) => (
                      <div
                        key={key}
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedEvent === key 
                            ? 'border-primary bg-primary/10' 
                            : 'border-muted hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedEvent(key)}
                      >
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <Badge variant="outline" className="mt-2">{event.price}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Selected Event Details */}
                <Card className="p-6 bg-gradient-card">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{currentEvent.title}</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        {currentEvent.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-primary" size={16} />
                        <span>{currentEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-primary" size={16} />
                        <span>{currentEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-primary" size={16} />
                        <span>{currentEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="text-primary" size={16} />
                        <span>{currentEvent.registered}/{currentEvent.capacity} registered</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Registration Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 bg-gradient-card">
                  <h3 className="text-2xl font-bold mb-6">Registration Form</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="graduation">Graduation Year *</Label>
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
                            <SelectItem value="2019">2019</SelectItem>
                            <SelectItem value="2018">2018</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="department">Department/Branch</Label>
                        <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="computer-science">Computer Science</SelectItem>
                            <SelectItem value="information-technology">Information Technology</SelectItem>
                            <SelectItem value="electronics">Electronics Engineering</SelectItem>
                            <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                            <SelectItem value="civil">Civil Engineering</SelectItem>
                            <SelectItem value="mba">MBA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="tshirt">T-Shirt Size</Label>
                        <Select onValueChange={(value) => setFormData({...formData, tshirtSize: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="XS">XS</SelectItem>
                            <SelectItem value="S">S</SelectItem>
                            <SelectItem value="M">M</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                            <SelectItem value="XL">XL</SelectItem>
                            <SelectItem value="XXL">XXL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Current Company</Label>
                        <Input
                          id="company"
                          value={formData.currentCompany}
                          onChange={(e) => setFormData({...formData, currentCompany: e.target.value})}
                          placeholder="e.g., Google, Microsoft"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Current Role</Label>
                        <Input
                          id="role"
                          value={formData.currentRole}
                          onChange={(e) => setFormData({...formData, currentRole: e.target.value})}
                          placeholder="e.g., Software Engineer"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input
                        id="emergency"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                        placeholder="Name and phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dietary">Dietary Restrictions/Allergies</Label>
                      <Input
                        id="dietary"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                        placeholder="Vegetarian, Vegan, Allergies, etc."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="guests"
                        checked={formData.attendingWithGuests}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, attendingWithGuests: checked as boolean})
                        }
                      />
                      <Label htmlFor="guests">I will be attending with guests</Label>
                    </div>

                    {formData.attendingWithGuests && (
                      <div>
                        <Label htmlFor="guestCount">Number of Guests</Label>
                        <Select onValueChange={(value) => setFormData({...formData, guestCount: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="requests">Special Requests/Messages</Label>
                      <Textarea
                        id="requests"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                        placeholder="Any special accommodations or messages..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, agreeToTerms: checked as boolean})
                        }
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      variant="gradient" 
                      size="xl" 
                      className="w-full"
                      disabled={!formData.agreeToTerms}
                    >
                      Complete Registration
                    </Button>
                  </form>
                </Card>

                {/* Alumni List */}
                <Card className="p-6 mt-6 bg-gradient-card">
                  <h3 className="text-xl font-bold mb-4">Alumni Directory</h3>
                  <p className="text-muted-foreground mb-4">
                    See who else might be attending from your network
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alumniList.map((alumni, index) => (
                      <div key={index} className="p-4 bg-card rounded-lg border">
                        <h4 className="font-semibold">{alumni.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Batch {alumni.batch} • {alumni.role} at {alumni.company}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EventRegister;