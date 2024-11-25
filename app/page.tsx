import About from "../components/about";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Testimonial from "../components/testimonial";
import Container from "../components/ui/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center max-w-[1280px] px-16 mx-auto">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      </div>

    </Container>
  );
}
