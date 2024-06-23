// import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/KRAResume.pdf";

function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
          <div className="resume-header">
            <h1>Resume</h1>
            </div>
            <Button variant="primary" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="resume-item">
            <h3 style={{ color: "white" }}>Professional Summary</h3>
              <ul>
                <p>
                  Lines speaking about myself and qualifications
                </p>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="resume-skills">
            <h3 style={{ color: "white" }}>Full Stack Development Skills</h3>
            <ul className="list-inline">
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>Languages:</strong> HTML5, CSS, JavaScript, TypeScript</li>
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>Libraries & Frameworks:</strong> Bootstrap, jQuery, React, Node.js, Styled-Components, 
                Express.js, Next.js, Handlebars, Sequelize.js.</li>
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>Databases:</strong> NoSQL, MySQL, MongoDB, Custom Databases</li>
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>DevOps & Tools:</strong> VS Code, Git, GitHub, GitLab, Heroku, Render, Microsoft Office 365, MongoDB Compass, Mongo DB Atlas, NPM, Insomnia</li>
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>Methodologies:</strong> Agile Project Management, Scrum, Kanban, Version Control, E-Commerce, SEO</li>
              <li className="list-inline-item">
                <strong style={{ color: "white" }}>Operating Systems:</strong> Windows, macOS, Linux, iOS, Android.</li>
            <li className="list-inline-item">
                <strong style={{ color: "white" }}>Skills:</strong> Mobile First Design, Styled-Components, Responsive Web Design, UI/UX Design Principles, Express.js, API Integration, Object-Oriented Programming (OOP), Object Relational Mapping(ORM), Wire-frame Design, (CRUD) operations, Google Certified, Google Analytics, E-Commerce, SEO Optimization</li>
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;