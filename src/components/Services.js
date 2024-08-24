import React from "react";
import { ServiceList } from "./ServicesList";

function Services() {
  return (
    <section
      id="service"
      style={{ backgroundColor: "#EFF8FF" }}
      className="pt-5"
    >
      <div className="container">
        <h3 className="about-h3 text-center text-uppercase">Our Services</h3>
        <h1 className="about-h1 text-center mb-4">
          <span className="about-span">Hight Quality</span> Services for You.
        </h1>
        <p className="about-text-color text-center">
          We are committed to sustainability. eco-friendly initiatives.
        </p>
        <div className="row mt-5">
          {ServiceList.map((service) => {
            return (
              <div className="col-sm-6 col-md-3" key={service.id}>
                <div className="service-item p-4 shadow mt-3">
                  <img src={service.url} className="mb-4" alt="teeth"></img>
                  <h4 className="mb-4 service-h4">{service.title}</h4>
                  <p className="mb-4 about-text-color service-description">
                    {service.description}
                  </p>
                  <button className="btn btn-primary rounded">Read More</button>
                  <div className="over-lay"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="service-footer d-flex flex-column align-items-center justify-content-center gap-3 mt-5">
          <p className="text-center about-text-color" style={{ width: "70%" }}>
            We believe in using the latest technology and techniques to ensure
            the best outcomes for our patients.
          </p>
          <button className="btn btn-secondary mb-5">View All Services</button>
        </div>
      </div>
      <div className=" container visit-clinic d-flex flex-column gap-4 align-items-center justify-content-center py-5">
        <h3 className="text-uppercase text-white fs-6">Visit clinic</h3>
        <h2 className="text-center text-white">
          Comprehensive Dental Care For All Ages
        </h2>
        <p>
          <button className="btn btn-danger rounded-circle">
            <i class="fa-brands fa-youtube  fs-3"></i>
          </button>
        </p>
      </div>
    </section>
  );
}

export default Services;
