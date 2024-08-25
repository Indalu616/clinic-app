import React from "react";
import NavbarApp from "../NavbarApp";
import About from "../About";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Images/img-1.svg";
import img2 from "../../Images/img-2.svg";
import img3 from "../../Images/img-3.svg";
import HowWork from "../HowWork";
import WhyChoose from "../WhyChoose";
import { DentalProcess } from "./DentalProcessList";
import Footer from "../Footer";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div data-aos="fade-in">
      <NavbarApp />
      <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
        <div className="container">
          <h1 className="about-h1 mt-5 mb-4 text-center">
            About <span className="about-span">Us</span>
          </h1>
          <p className="about-text-color text-center">
            <Link to="/clinic-app" style={{ textDecoration: "none" }}>
              Home
            </Link> / About Us
          </p>
        </div>
      </section>
      <About />
      <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="service-h4 text-center">
                Trusted by the industry's leading insurance provider
              </h2>
            </div>
            <div className="col-md-7">
              <Carousel>
                <Carousel.Item>
                  <div className="row">
                    <div className="col">
                      <img src={img1} alt="image-one"></img>
                    </div>
                    <div className="col">
                      <img src={img2} alt="image-two"></img>
                    </div>
                    <div className="col">
                      <img src={img3} alt="image-three"></img>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <HowWork />
      <WhyChoose />
      <section className="py-5">
        <div className="container">
          <h3 className="about-h3 text-uppercase text-center">
            Dental implant process
          </h3>
          <h1 className="about-h1 fs-1 mt-4 mb-4 text-center">
            <span className="about-span">Guiding</span> you to optimal Teeth
          </h1>
          <div className="row mt-5">
            {DentalProcess.map((item) => {
              return (
                <div className="col-sm-6 col-md-3 mt-4" key={item.id}>
                  <div className="card">
                    <div className="img-card">
                      <img
                        src={item.url}
                        alt="process-image"
                        className="img-fluid rounded"
                        style={{ width: "100%" }}
                      ></img>
                      <div className="process p-2 fs-5 about-text-color">
                        0{item.id}
                      </div>
                    </div>
                    <div className="p-2">
                      <h4 className="service-h4 mt-3 mb-3">{item.title}</h4>
                      <p className="about-text-color">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
