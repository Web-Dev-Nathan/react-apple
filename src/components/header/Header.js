import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import apple from "./logo-sm.png";
import search from "./search-icon-sm.png";
import cart from "./cart-sm.png";
import "./header.css";

function Header() {
  return (
    <div>
      <Navbar fixed="top" expand="md" className="nav-col">
        <Container>
          <Navbar.Brand href="#home">
            <img src={apple} className="d-md-none" alt="apple logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white bg-light"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">
                <img
                  src={apple}
                  className="d-none item-col d-md-block "
                  alt="apple logo"
                />
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Store
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Mac
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                iPad
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                iPhone
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Watch
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                AirPods
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Tv
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Entertainment
              </Nav.Link>

              <Nav.Link
                href="#link"
                className="mx-lg-3 mx-md-1 item-col text-white"
              >
                Support
              </Nav.Link>

              <Nav.Link href="#home">
                <img src={search} alt="search" className="item-col" />
              </Nav.Link>
              <Nav.Link href="#home">
                <img src={cart} alt="cart logo" className="item-col" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="container top-text mt-5 pt-4  text-center">
        <p>
          Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.{" "}
          <a href="">
            Shop iPhone<i class="arrow"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
