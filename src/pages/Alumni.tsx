import Navigation from "@/components/layout/Navigation";
import AlumniDirectory from "@/components/sections/AlumniDirectory";
import Footer from "@/components/layout/Footer";

const Alumni = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AlumniDirectory />
      </div>
      <Footer />
    </div>
  );
};

export default Alumni;