import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#eee] snap-y snap-mandatory">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;
