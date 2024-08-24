import React from "react";
import logo from "../Images/footer-logo.svg";
function Footer() {
  return (
    <section className="py-5" style={{ backgroundColor: "#0E384C" }}>
      <div className="container">
        <div className="row border-bottom">
          <div className="col-sm-12 col-md-3 mb-4">
            <div className="mb-4">
              <img src={logo} alt="footer-logo" className="img-fluid" style={{width:"10rem"}}></img>
            </div>
            <p className="text-white">
              The goal our clinic is provide friendly, caring dentistry and
              highest level of general, cosmetic, and specialist dental
              treatments.
            </p>
          </div>
          <div className="col-sm-4 col-md-3 mb-4 text-white">
            <h4 className="text-white">Quick Links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Book Appointment</p>
          </div>
          <div className="col-sm-4 col-md-3 mb-4 text-white">
            <h4 className="text-white">Social Media</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
          <div className="col-sm-4 col-md-3 mb-4 text-white">
            <h4 className="text-white">Contact Us</h4>
            <p>info@domain.com</p>
            <p> +(123) 698-5245</p>
          </div>
        </div>
        <p className="text-white mt-4 mb-4 text-center">
          Copyright © 2024 All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
