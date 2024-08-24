import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BlogPosts } from "./BlogsList";
function Blogs() {
  return (
    <section className="py-5" style={{ backgroundColor: "#EFF8FF" }}>
      <div className="container mt-5">
        <h3 className="about-h3 text-uppercase text-center">Blogs</h3>
        <h1 className="about-h1 fs-1 mt-4 mb-4 text-center">
          <span className="about-span">Check Our</span> Latest Articles
        </h1>
        <p className="text-center about-text-color">
          We are committed to sustainability. eco-friendly initiatives.
        </p>
        <div className="row mt-5">
          {BlogPosts.map((item) => {
            return (
              <div className="col-sm-6 col-md-4 mb-4">
                <Card>
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title>
                      <h4 className="service-h4">{item.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p className="about-text-color">{item.content}</p>
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
