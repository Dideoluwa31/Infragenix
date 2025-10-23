import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServiceSection";
import VisionMissionMandate from "@/components/VisionMissionMandate";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Listofservices from "@/components/Listofservices";


export default function Home() {
  return (
    
    <div>
      <Navbar/>     
      <LandingPage/>
      <VisionMissionMandate/>
      <ServicesSection/>
      <Listofservices/>
      <Contact/>
      <Footer/>
    </div>
  );
};
