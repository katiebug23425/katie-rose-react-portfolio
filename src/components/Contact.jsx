import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css";
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Set initial state for name, email, message, and form errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === "email") {
    setEmail(inputValue);
  } else if (inputType === "name") {
    setName(inputValue);
  } else {
    setMessage(inputValue);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (!validateEmail(email) || !name ) {
    setErrorMessage("Email is Invalid or Name is Missing!");
    return;
  }

  if (!setMessage(message)) {
    setErrorMessage(`Message is Required!`);
    return;
  }

  setName("");
  setMessage("");
  setEmail("");
};

  // Render the contact form
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="contact-header" style={{ fontSize: '50px' }}>Contact Me</h2>
              <p className="email-direct">
                *Currently Under Construction* please 
                <a href="mailto:katierosealford@gmail.com" style={{ marginLeft: '5px' }}>click this link to email me</a>
              </p>
            <Form className="formClass" >
              <Form.Group>
                <Form.Label htmlFor="name" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', background: "black" }}>Name:</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Please Enter Your Name"
                  autoComplete="off"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', background: "black", marginTop:5 }}>Email:</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Please Enter Your Email"
                  autoComplete="off"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', background: "black", marginTop:5 }}>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  placeholder="Please Enter Your Message Here"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button type="submit" onClick={handleFormSubmit} className="custom-send-message-button">
                Send Message
              </Button>
              {errorMessage && (
          <div style={{ fontSize: '25px', fontWeight: 'bold', color: 'red', background: "black"}}>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Contact
export default Contact;