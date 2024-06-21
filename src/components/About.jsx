// import React from "react";
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
                <Card.Title className="text-center mb-4" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }}>
                  All About Katie Rose
                </Card.Title>
                  <Card.Text>
                   I am a full stack developer who is captivated by code, has a passion for programming, a love of learning, who is on a journey through JavaScript as well as a path to learn every other programming language and style, database and relevant topic related to software engineering and programming. I am a double threat as a Fastidious Front-End Fanatic with a Flair for the UI as well as being a Bold Back-End Boss with a penchant for the server side and databases. 
                  </Card.Text>
                  <Card.Text>
                  I am a student of Michigan State University as well as a Web Developer for an automotive company in a Suburb of Detroit, MI. I love all things code and while I do tend to be obsessive about the projects I work on, I am always looking for new ways to learn and grow as a developer.
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