// import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";
import { FaBomb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


// Header component
function Header() {
  return (
    // Header component
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Link
                to="/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                <FaBomb />Katie Rose Alford <FaCode />
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;