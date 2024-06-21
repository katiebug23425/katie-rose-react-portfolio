import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/life motto.jpg";
import "../style/About.css";

function About() {
  return (
    // About section
<section id="about" className="py-5">
  <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Katie Rose Alford
                </Card.Title>
                  <Card.Text>
                   text 1
                  </Card.Text>
                  <Card.Text>
                    text 2
                  </Card.Text>
                  <Card.Text>
                    text 3
                  </Card.Text>
                  <Card.Text>
                    text 4
                  </Card.Text>
                  <Card.Text>
                    text 5
                  </Card.Text>
                  <Card.Text>
                    text 6
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;