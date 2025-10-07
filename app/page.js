import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServiceSection";
import VisionMissionMandate from "@/components/VisionMissionMandate";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
       <LandingPage/>
      </div>
      <div>
        <ServicesSection/>
      </div>
      <div>
        <VisionMissionMandate/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
