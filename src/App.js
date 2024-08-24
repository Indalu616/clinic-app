import About from "./components/About";
import Achievements from "./components/Achievements";
import Blogs from "./components/Blogs";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWork from "./components/HowWork";
import NavbarApp from "./components/NavbarApp";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="App">
      <header>
        <NavbarApp />
        <Hero />
      </header>
      <main>
        <About />
        <Services />
        <Achievements />
        <WhyChoose />
        <HowWork />
        <Team />
        <Testimonial />
        <Blogs />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
