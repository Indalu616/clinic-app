import React from "react";
import NavbarApp from "../NavbarApp";
import { Link } from "react-router-dom";
import { Allservices } from "./AllServicesList";
import WhyChoose from "../WhyChoose";
import Footer from "../Footer";
function ServicesPage() {
  return (
    <>
      <NavbarApp />
      <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
        <h1 className="about-h1 fs-1 mt-4 mb-4 text-center">
          <span className="about-span">Our</span> Services
        </h1>
        <p className="text-center about-text-color">
          <Link to="/clinic-app" style={{ textDecoration: "none" }}>
            Home
          </Link>
          /Services
        </p>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row mt-5">
            {Allservices.map((service) => {
              return (
                <div className="col-sm-6 col-md-3" key={service.id}>
                  <div className="service-item p-4 shadow mt-3">
                    <img src={service.url} className="mb-4" alt="teeth"></img>
                    <h4 className="mb-4 service-h4">{service.title}</h4>
                    <p className="mb-4 about-text-color service-description">
                      {service.description}
                    </p>
                    <button className="btn btn-primary rounded">
                      Read More
                    </button>
                    <div className="over-lay"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <WhyChoose />
      <Footer />
    </>
  );
}

export default ServicesPage;
