import Navigation from "@/components/layout/Navigation";
import FundraisingSection from "@/components/sections/FundraisingSection";
import Footer from "@/components/layout/Footer";

const Fundraising = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <FundraisingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Fundraising;