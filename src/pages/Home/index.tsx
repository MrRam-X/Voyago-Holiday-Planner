import React from "react";
import HeroSection from "./components/HeroSection";
import DestinationList from "./components/DestinationList";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Destination List Section */}
      <DestinationList />
    </main>
  );
};

export default Home;
