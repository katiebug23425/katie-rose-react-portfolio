import "../style/Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// Navigation component
const Navigation = () => {
  return (
    // Bootstrap Navbar
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="py-0.5 mt-0"
    >
      <Container className="d-flex justify-content-center">
        <Navbar.Brand
          as={Link}
          to="/katie-rose-react-portfolio/"
        ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/katie-rose-react-portfolio/about"
              className="fs-5 nav-link-highlight shadow-lg"
              style={{ color: "red" }}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/katie-rose-react-portfolio/portfolio"
              className="fs-5 nav-link-highlight shadow-lg "
              style={{ color: "red" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/katie-rose-react-portfolio/contact"
              className="fs-5 nav-link-highlight shadow-lg "
              style={{ color: "red" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/katie-rose-react-portfolio/resume"
              className="fs-5 nav-link-highlight shadow-lg "
              style={{ color: "red" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
// Export Navigation
export default Navigation;
