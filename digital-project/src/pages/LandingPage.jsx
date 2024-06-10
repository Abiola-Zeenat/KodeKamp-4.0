import About from "../components/About";
import Hero from "../components/Hero";

import Mission from "../components/Mission";
import Projects from "../components/OurProjects";
import Contacts from "../components/Contacts";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <Mission />
      <Projects />
      <Contacts />
    </div>
  );
}
