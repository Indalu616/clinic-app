import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Book() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Book An Appointment
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="about-h1">
              <span className="about-span">Book</span> Appointment
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <label for="name" class="form-label about-text-color">
              Your name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Jon Doe"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label about-text-color">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label about-text-color">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="+000-000-000-0"
            />
          </div>
          <div class="mb-3">
            <label for="date" class="form-label about-text-color">
              Date
            </label>
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected className="about-text-color">
              Select service
            </option>
            <option value="general dental care" className="about-text-color">
              general dental care
            </option>
            <option value="dental Implants" className="about-text-color">
              dental Implants
            </option>
            <option value="cosmetic dentistry" className="about-text-color">
              cosmetic dentistry
            </option>
            <option value="teeth whitening" className="about-text-color">
              teeth whitening
            </option>
            <option value="pediatric dental care" className="about-text-color">
              pediatric dental care
            </option>
            <option value="advanced oral care" className="about-text-color">
              advanced oral care
            </option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Book</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Book;
