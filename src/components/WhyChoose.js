import React from "react";
import { LeftServices } from "./LeftsideServiceList";
import bigteeth from "../Images/big-teeth.png";
import { RightServices } from "./RightsideService";
function WhyChoose() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
      <div className="container pt-5">
        <h3 className="text-uppercase text-center about-h3">Why choose us</h3>
        <h1 className="about-h1 text-center fs-1 mt-3 mb-3">
          <span className="about-span">Diagnosis of </span>Dental Diseases
        </h1>
        <p className="about-text-color text-center">We are committed to sustainability. eco-friendly initiatives.</p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="row">
              {LeftServices.map((item) => {
                return (
                  <div className="col-12 mb-5" key={item.id}>
                    <div className="row">
                      <div className="col-10">
                        <h4 className="text-end service-h4">{item.title}</h4>
                        <p className="text-end about-text-color">{item.description}</p>
                      </div>
                      <div className="col-2 m-auto">
                        <img src={item.url} alt="service-icons"></img>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" col-md-4 text-center mb-4">
            <img src={bigteeth} alt="big-teeth" className="img-fluid"></img>
          </div>
          <div className=" col-md-4">
            <div className="row">
              {RightServices.map((item) => {
                return (
                  <div className="col-12 mb-5" key={item.id}>
                    <div className="row">
                      <div className="col-2 m-auto">
                        <img src={item.url} alt="service-icons"></img>
                      </div>
                      <div className="col-10">
                        <h4 className="service-h4">{item.title}</h4>
                        <p className="text-start about-text-color">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
