import React from "react";
import doctor_treating_patient from "../Images/doctor-patient.jpeg";
import { Link } from "react-router-dom";
function About() {
  return (
    <section id="about">
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col-md-6">
            <img
              src={doctor_treating_patient}
              alt="doctor_treating_patient"
              className="img-fluid rounded"
              style={{ objectFit: "cover", width: "100%" }}
            ></img>
          </div>
          <div className="col-md-6 mt-5">
            <h3 className="text-uppercase about-h3">About us</h3>
            <h1 className="about-h1 mt-4">
              <span className="about-span">Your Journey </span>to a Healthier
              Smile Begins Here
            </h1>
            <p className="about-text-color mt-4">
              The goal of our clinic is to provide friendly, caring dentistry
              and the highest level of general, cosmetic, and specialist dental
              treatments. With dental practices throughout the world.
            </p>
            <div className="row mt-4">
              <div className="col-sm-6">
                <p className="service-list">
                  <i class="fa-solid fa-circle-check me-2 check-box"></i>
                  experienced team
                </p>
                <p className="service-list">
                  <i class="fa-solid fa-circle-check me-2 check-box"></i>
                  state-of-the-art technology
                </p>
              </div>
              <div className="col-sm-6">
                <p className="service-list">
                  <i class="fa-solid fa-circle-check me-2 check-box"></i>
                  comprehensive services
                </p>
                <p className="service-list">
                  <i class="fa-solid fa-circle-check me-2 check-box"></i>
                  emergency dental services
                </p>
              </div>
            </div>
            <div className="about-p-center mt-4">
              <button className="btn btn-primary"><Link to="/clinic-app/about" style={{textDecoration:"none"}} className="text-white">Read More About Us</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
