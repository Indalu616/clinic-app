import React from "react";
import doctorCleaningWithCotton from "../Images/clean-by-cotton.jpeg";
import Carousel from "react-bootstrap/Carousel";
import qote from "../Images/quote.svg";
import { TestimonialsList } from "./TestimonialsList";
function Testimonial() {
  return (
    <section className="py-5" id="testimonial">
      <div className="container">
        <h3 className="about-h3 text-center text-uppercase">Testimonial</h3>
        <h1 className="about-h1 text-center fs-1 mt-3 mb-3">
          <span className="about-span">What our </span>Client Say
        </h1>
        <p className="about-text-color text-center">
          We are committed to sustainability. eco-friendly initiatives.
        </p>
        <div className="row mt-5">
          <div className="col-md-5">
            <img
              src={doctorCleaningWithCotton}
              alt="doctorCleaningWithCotton"
              className="img-fluid rounded"
            ></img>
          </div>
          <div className="col-md-7 mt-5">
            <Carousel indicators={false} controls={false}>
              {TestimonialsList.map((item) => {
                return (
                  <Carousel.Item key={item.id}>
                    <div>
                      <img src={qote} alt="qoutation-mark"></img>
                    </div>
                    <p className="about-text-color mt-5 mb-5">{item.content}</p>
                    <div className="d-flex align-items center gap-3">
                      <img
                        src={item.url}
                        alt="clients"
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                      ></img>
                      <div className="d-flex flex-column align-items center gap-2">
                        <h4 className="service-h4">{item.name}</h4>
                        <p className="about-text-color">{item.role}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
