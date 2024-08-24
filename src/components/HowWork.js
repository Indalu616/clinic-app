import React from "react";
import { Faq } from "./FAQ";
import doctorCleaningTeeh from "../Images/doctor-cleaning-teeth.jpeg";
import Accordion from "react-bootstrap/Accordion";
function HowWork() {
  return (
    <section className="py-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={doctorCleaningTeeh}
              alt="doctorCleaningTeeh"
              className="img-fluid rounded"
            ></img>
          </div>
          <div className="col-md-6 mt-5">
            <h3 className="about-h3 text-uppercase">How it work</h3>
            <h1 className="about-h1 fs-1 mt-3 mb-5 ">
              <span className="about-span">What We Do</span> for Your Teeth
            </h1>
            <p className="about-text-color">
              We are committed to sustainability. Our clinic practices
              eco-friendly initiatives like digital records to reduce paper
              waste and energy-efficient equipment.
            </p>
            <Accordion defaultActiveKey="0">
              {Faq.map((item) => {
                return (
                  <Accordion.Item eventKey={item.id} key={item.id}>
                    <Accordion.Header><img src={item.url} alt="item-icon" className="img-fluid me-3" style={{width:"1.75rem"}}></img>{item.title}</Accordion.Header>
                    <Accordion.Body className="about-text-color">{item.content}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWork;
