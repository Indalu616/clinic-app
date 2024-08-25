import React from "react";
import About from "./About";
import Achievements from "./Achievements";
import Blogs from "./Blogs";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Hero from "./Hero";
import HowWork from "./HowWork";
import NavbarApp from "./NavbarApp";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";
import WhyChoose from "./WhyChoose";
function Home() {
  return (
    <div data-aos="fade-in">
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

export default Home;
