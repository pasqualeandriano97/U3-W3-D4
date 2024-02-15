import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Space News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="d-block">
            <Form className="d-flex ">
              <Form.Group className="me-2">
                <Form.Control type="email" placeholder="Search..." />
              </Form.Group>
              <Button variant="outline-primary" type="submit" className="px-3">
                SEARCH
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
