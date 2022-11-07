import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles/components/nav.css";

function WebNavBar() {
  return (
    <Navbar expand="lg" id="webNav">
      <Container className="navWidth">
        <Navbar.Brand href="#home" className="navLogo">
          <img
            alt=""
            src="../../logo/logo.svg"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="menuToggleBtn"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto centerMenuWeb">
            <Nav.Link className="navLinkMenu" href="#home">
              Movies
            </Nav.Link>
            <Nav.Link className="navLinkMenu" href="#link">
              New
            </Nav.Link>
            <Nav.Link className="navLinkMenu" href="#link">
              My List
            </Nav.Link>
            <Nav.Link className="navLinkMenu" href="#link">
              Subscription
            </Nav.Link>
          </Nav>
          <Navbar.Text className="navRight">
            <img src="../../icons/searchIcon.png" alt="" />
            <img src="../../avatar.png" alt="" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebNavBar;
