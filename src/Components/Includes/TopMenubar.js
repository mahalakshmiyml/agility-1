import React from "react";
import { Navbar, NavDropdown, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";

const TopMenubar = () => {
  return (
    <div className="sticky-top">
      <div className="bg-white shadow">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          className="shadow-sm"
          id="navbar"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/manifesto">
                  Manifesto
                </Nav.Link>
                <NavDropdown title="Training" id="training">
                  <NavDropdown
                    title="Capability Building Programs"
                    id="coaching-inner"
                    drop="end"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/capability-building-programs/ic-agile"
                    >
                      IC Agile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/capability-building-programs/safe"
                    >
                      SAFe
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={Link}
                      to="/capability-building-programs/dasa"
                    >
                      DASA
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item
                    as={Link}
                    to="/experiential-learning-programs"
                  >
                    Experiential Learning Programs
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/e-learning-programs">
                    E-Learning Programs
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="training">
                  <NavDropdown.Item as={Link} to="/coaching">
                    Coaching
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/mentoring">
                    Mentoring
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/community-events">
                    Community Events
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Resources"
                  id="digital-marketing-solutions-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/youtube-videos">
                    Youtube Videos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/blogs">
                    Blogs
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/reusable-templates">
                    Reusable Templates
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/assessments">
                    Assesments
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/work-books">
                    Work books
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item as={Link} to="/custom-slider">
                  customslider
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/course-schedule">
                  Course Schedule
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/modal-image-upload">
                  Modal Image Upload
                </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link as={Link} to="/contact-us">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Nav>
                <div className="social text-center">
                  <a
                    href="https://www.instagram.com/digitalagilityinstitute/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/digitalagilityinstitute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digitalagilityinstitute/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/nivartijayaram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 fs-4"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* Calendly inline widget begin */}
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/nivarti/15min" >hello</div> */}

      {/* Calendly inline widget end */}
    </div>
  );
};

export default TopMenubar;
