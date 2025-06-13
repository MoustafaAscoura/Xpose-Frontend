import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/TestimonialsSection";
import TechnologySection from "./components/TechnologySection";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="App bg-xpose-darker">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UploadSection />
        <TechnologySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
