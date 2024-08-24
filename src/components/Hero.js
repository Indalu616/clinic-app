import React from "react";
import doctor from "../Images/doctor-hero-bg.png";
function Hero() {
  return (
    <section style={{ backgroundColor: "#EFF8FF" }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="border-bottom">
              <h1 className="hero-h1">
                Experience{" "}
                <span className="dental-experience">Dental Excellence</span>{" "}
                with a Gentle Touch
              </h1>
              <p className="fs-6 text-color">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal
              </p>
              <button className="btn btn-primary rounded my-4">
                Make an Appointment
              </button>
            </div>
            <p className="mt-4 text-color">
              Google rating 5.0 ⭐⭐⭐⭐⭐ based on 492 reviews
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={doctor}
              className="img-fluid rounded"
              style={{ objectFit: "cover" }}
              alt="doctor-image"
            ></img>
          </div>
        </div>
      </div>
      <div className="service-time py-4">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="row">
                <div className="col-2 m-auto">
                  <i class="fa-solid fa-phone-volume fs-2"></i>
                </div>
                <div className="col-10">
                  <h3 style={{ fontSize: "1.25rem" }}>
                    Need dental services ?
                  </h3>
                  <p className="timing">Call on : (+01) 987 828 745</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-auto">
              <div className="row">
                <div className="col-2 m-auto">
                  <i class="fa-solid fa-clock fs-2"></i>
                </div>
                <div className="col-10">
                  <h3 style={{ fontSize: "1.25rem" }}>Opening hours</h3>
                  <p className="timing">Mon to Sat 9:00AM to 9:00PM</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-auto text-center">
              <button className="btn btn-secondary">Make An Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
