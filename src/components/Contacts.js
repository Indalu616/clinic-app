import React from "react";
import map from "../Images/map.webp";
function Contacts() {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-4">
            <div className="map">
              <img
                src={map}
                alt="map"
                className="img-fluid rounded"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h3 className="about-h3 text-uppercase">Contact Now</h3>
            <h1 className="about-h1 fs-1 mb-4 mt-4">
              <span className="about-span">Get Free </span>Professional
              Consultation
            </h1>
            <p className="about-text-color">
              <i className="fa-solid fa-location-dot me-3 fs-4"></i> 24/11
              Robert Road , New York , USA
            </p>

            <p className="about-text-color">
              <i className="fa-solid fa-phone-volume me-3 fs-4"></i>
              (123) 698-5245
            </p>

            <p className="about-text-color">
              <i class="fa-solid fa-envelope me-3 fs-4"></i>info@domain.com
            </p>
            <p className="about-text-color">
              <i class="fa-regular fa-calendar-days me-3 fs-4"></i>Mon to Sat
              9:00AM to 9:00PM
            </p>
            <button className="btn btn-secondary">
              {" "}
              <i class="fa-regular fa-calendar-check me-3 fs-4"></i>Make An
              Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
