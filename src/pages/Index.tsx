import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AlumniDirectory from "@/components/sections/AlumniDirectory";
import JobBoard from "@/components/sections/JobBoard";
import MentorshipSection from "@/components/sections/MentorshipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AlumniDirectory />
      <JobBoard />
      <MentorshipSection />
    </div>
  );
};

export default Index;
