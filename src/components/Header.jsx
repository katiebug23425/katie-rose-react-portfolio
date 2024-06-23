// import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";
import Lottie from "lottie-react";
import watermelon from "./watermelon.json";
import chameleon from "./chameleon.json";


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
              ><div className="lottie-icon">
                <Lottie loop={true} animationData={watermelon}></Lottie></div>Katie Rose Alford <div className="lottie-icon2"><Lottie loop={true} animationData={chameleon}></Lottie></div>
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