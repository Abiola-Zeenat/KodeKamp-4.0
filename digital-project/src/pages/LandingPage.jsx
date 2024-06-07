import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Mission from "../components/Mission";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Mission />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
