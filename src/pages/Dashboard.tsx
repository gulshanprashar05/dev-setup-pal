import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Mail, 
  MapPin, 
  GraduationCap,
  Briefcase,
  Calendar,
  Phone
} from "lucide-react";

const Dashboard = () => {
  // Alumni data
  const alumni = [
    {
      id: 1,
      name: "Gulshan Prashar",
      title: "Senior Software Engineer",
      company: "Google",
      location: "Ghaziabad, UP",
      graduationYear: "2022",
      department: "Computer Science",
      image: "/src/assets/gulshan.jpeg",
      expertise: ["AI/ML", "Web Development", "Full Stack Development"],
      isAvailableForMentorship: true,
      email: "gulshan.prashar@google.com",
      phone: "+91 98765 43210",
      joinedDate: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      name: "Mishthi Jamini",
      title: "Product Manager", 
      company: "Microsoft",
      location: "Noida, UP",
      graduationYear: "2021",
      department: "Information Technology",
      image: "/src/assets/mishthi.jpeg",
      expertise: ["Product Strategy", "Data Analytics", "Leadership"],
      isAvailableForMentorship: true,
      email: "mishthi.jamini@microsoft.com",
      phone: "+91 98765 43211",
      joinedDate: "2024-01-10",
      status: "active"
    },
    {
      id: 3,
      name: "Ayush Singh",
      title: "Frontend Developer",
      company: "Adobe",
      location: "Delhi, India",
      graduationYear: "2023",
      department: "Computer Science",
      image: "/src/assets/ayush.jpeg",
      expertise: ["React", "JavaScript", "UI/UX Design"],
      isAvailableForMentorship: false,
      email: "ayush.singh@adobe.com",
      phone: "+91 98765 43212",
      joinedDate: "2024-02-01",
      status: "active"
    },
    {
      id: 4,
      name: "Alok Pandey",
      title: "Data Scientist",
      company: "Netflix",
      location: "Mumbai, India",
      graduationYear: "2020",
      department: "Electronics Engineering",
      image: "/src/assets/alok.jpeg",
      expertise: ["Machine Learning", "Python", "Data Analysis"],
      isAvailableForMentorship: true,
      email: "alok.pandey@netflix.com",
      phone: "+91 98765 43213",
      joinedDate: "2023-12-20",
      status: "active"
    },
    {
      id: 5,
      name: "Aush Tomar",
      title: "Software Developer",
      company: "Amazon",
      location: "Bangalore, India",
      graduationYear: "2022",
      department: "Computer Science",
      image: "/src/assets/tomar.jpeg",
      expertise: ["Java", "Cloud Computing", "Backend Development"],
      isAvailableForMentorship: true,
      email: "aush.tomar@amazon.com",
      phone: "+91 98765 43214",
      joinedDate: "2024-01-05",
      status: "active"
    },
    {
      id: 6,
      name: "Abhishek Kumar",
      title: "DevOps Engineer",
      company: "Meta",
      location: "Gurgaon, India",
      graduationYear: "2023",
      department: "Computer Science",
      image: "/src/assets/abhi-2.jpeg",
      expertise: ["DevOps", "AWS", "Docker", "Kubernetes"],
      isAvailableForMentorship: true,
      email: "abhishek.kumar@meta.com",
      phone: "+91 98765 43215",
      joinedDate: "2024-02-10",
      status: "active"
    },
    {
      id: 7,
      name: "Arun Sharma",
      title: "Full Stack Developer",
      company: "Flipkart",
      location: "Bangalore, India",
      graduationYear: "2021",
      department: "Information Technology",
      image: "/src/assets/arun.jpeg",
      expertise: ["Node.js", "React", "MongoDB", "Express"],
      isAvailableForMentorship: true,
      email: "arun.sharma@flipkart.com",
      phone: "+91 98765 43216",
      joinedDate: "2024-01-20",
      status: "active"
    }
  ];

  // Pending requests data
  const pendingRequests = [
    {
      id: 101,
      name: "Priya Sharma",
      title: "UI/UX Designer",
      company: "Zomato",
      location: "Delhi, India",
      graduationYear: "2022",
      department: "Design",
      email: "priya.sharma@zomato.com",
      phone: "+91 98765 43217",
      appliedDate: "2024-02-15",
      status: "pending"
    },
    {
      id: 102,
      name: "Rahul Gupta",
      title: "Backend Developer",
      company: "Paytm",
      location: "Noida, India",
      graduationYear: "2023",
      department: "Computer Science",
      email: "rahul.gupta@paytm.com",
      phone: "+91 98765 43218",
      appliedDate: "2024-02-12",
      status: "pending"
    },
    {
      id: 103,
      name: "Sneha Patel",
      title: "Data Analyst",
      company: "Swiggy",
      location: "Bangalore, India",
      graduationYear: "2021",
      department: "Statistics",
      email: "sneha.patel@swiggy.com",
      phone: "+91 98765 43219",
      appliedDate: "2024-02-18",
      status: "pending"
    }
  ];

  const handleApprove = (id: number) => {
    console.log("Approved request:", id);
  };

  const handleReject = (id: number) => {
    console.log("Rejected request:", id);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Alumni Dashboard
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Manage alumni profiles and pending registration requests for ITS Engineering College
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{alumni.length}</p>
                    <p className="text-muted-foreground">Active Alumni</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{pendingRequests.length}</p>
                    <p className="text-muted-foreground">Pending Requests</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{alumni.filter(a => a.isAvailableForMentorship).length}</p>
                    <p className="text-muted-foreground">Available Mentors</p>
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="alumni" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="alumni">Active Alumni</TabsTrigger>
                <TabsTrigger value="pending">Pending Requests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="alumni" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {alumni.map((alum) => (
                    <Card key={alum.id} className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={alum.image}
                          alt={alum.name}
                          className="w-16 h-16 rounded-full object-cover shadow-card"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{alum.name}</h3>
                            <Badge variant={alum.status === 'active' ? 'default' : 'secondary'}>
                              {alum.status}
                            </Badge>
                          </div>
                          <p className="text-primary font-medium">{alum.title}</p>
                          <p className="text-muted-foreground text-sm">{alum.company}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail size={14} className="mr-2" />
                          {alum.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone size={14} className="mr-2" />
                          {alum.phone}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={14} className="mr-2" />
                          {alum.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <GraduationCap size={14} className="mr-2" />
                          {alum.department} • Class of {alum.graduationYear}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-2" />
                          Joined: {new Date(alum.joinedDate).toLocaleDateString()}
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
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="pending" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {pendingRequests.map((request) => (
                    <Card key={request.id} className="p-6 bg-gradient-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{request.name}</h3>
                          <p className="text-primary font-medium">{request.title}</p>
                          <p className="text-muted-foreground text-sm">{request.company}</p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                          <Clock size={12} className="mr-1" />
                          Pending
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail size={14} className="mr-2" />
                          {request.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone size={14} className="mr-2" />
                          {request.phone}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={14} className="mr-2" />
                          {request.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <GraduationCap size={14} className="mr-2" />
                          {request.department} • Class of {request.graduationYear}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-2" />
                          Applied: {new Date(request.appliedDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleApprove(request.id)}
                        >
                          <CheckCircle size={14} className="mr-1" />
                          Approve
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle size={14} className="mr-1" />
                          Reject
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;