import Navigation from "@/components/layout/Navigation";
import MentorshipSection from "@/components/sections/MentorshipSection";
import Footer from "@/components/layout/Footer";

const Mentorship = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MentorshipSection />
      </div>
      <Footer />
    </div>
  );
};

export default Mentorship;