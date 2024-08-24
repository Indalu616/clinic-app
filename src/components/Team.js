import React from "react";
import { TeamsList } from "./TeamsList";

function Team() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
      <div className="container">
        <h3 className="about-h3 text-uppercase text-center">Our team</h3>
        <h1 className="about-h1 text-center fs-1 mt-3 mb-3">
          <span className="about-span">Our Friendly </span>Dentists Team
        </h1>
        <p className="text-center about-text-color">
          We are committed to sustainability. eco-friendly initiatives.
        </p>
        <div className="row mt-5">
          {TeamsList.map((item) => {
            return (
              <div className="col-sm-6 col-md-3 image-holder" key={item.id}>
                <div>
                  <div className="image-card">
                    <img
                      src={item.url}
                      className="img-fluid rounded"
                      alt="doctors"
                    ></img>
                    <div className="d-flex align-items-center justify-content-center gap-3 social-media">
                      <div>
                        <i
                          className="fa-brands fa-youtube fs-5 rounded text-white p-2"
                          style={{ backgroundColor: "#0E384C" }}
                        ></i>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-facebook fs-5 text-white p-2 rounded"
                          style={{ backgroundColor: "#0E384C" }}
                        ></i>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-square-x-twitter fs-5 text-white p-2 rounded"
                          style={{ backgroundColor: "#0E384C" }}
                        ></i>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-linkedin fs-5 text-white  p-2 rounded"
                          style={{ backgroundColor: "#0E384C" }}
                        ></i>
                      </div>
                    </div>
                  </div>

                  <h4 className="service-h4 text-center mt-3">{item.name}</h4>
                  <p className="text-center about-text-color">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
