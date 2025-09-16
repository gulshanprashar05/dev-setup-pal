import Navigation from "@/components/layout/Navigation";
import FundraisingSection from "@/components/sections/FundraisingSection";

const Fundraising = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <FundraisingSection />
      </div>
    </div>
  );
};

export default Fundraising;