import Navigation from "@/components/layout/Navigation";
import EventsSection from "@/components/sections/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <EventsSection />
      </div>
    </div>
  );
};

export default Events;