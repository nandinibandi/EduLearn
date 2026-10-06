import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import CourseHighlights from "./components/CourseHighlights/CourseHighlights.jsx";
import TechnologySection from "./components/TechnologySection/TechnologySection.jsx";
import PlacementAssistance from "./components/PlacementAssistance/PlacementAssistance.jsx";
import CallbackForm from "./components/CallbackForm/CallbackForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <CourseHighlights />
        <TechnologySection />
        <PlacementAssistance />
        <CallbackForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
