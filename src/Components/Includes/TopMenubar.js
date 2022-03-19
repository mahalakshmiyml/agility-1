import React from "react";
import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo1.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../Store/Slice/authSlice";

const TopMenubar = () => {
  const Auth = useSelector((state) => state.auth.value);
  console.log(Auth);
  const dispatch = useDispatch();

  const logout = async () => {
    await axios.post("logout");
    dispatch(setAuth(false));
  };

  return (
    <div className="sticky-top shadow-sm">
      <div className="bg-white">
        <Container className=" border-bottom border-primary">
          <Row>
            <Col md={4} xs={6} className="align-self-center d-none d-md-block">
              <div className="text-center text-md-start py-2">
                <small>
                  <a
                    class="text-primary text-decoration-none fw-bold"
                    href="tel:08147203771"
                  >
                    <i class="fas fa-phone-volume"></i> +91 81472 03771
                  </a>
                </small>
              </div>
            </Col>
            <Col md={4} xs={6} className="align-self-center">
              <div className="text-center">
                <a
                  class="btn-sm btn-primary text-decoration-none text-white"
                  href="https://designrr.site/?i=k64h&t=139f64&f=1"
                  target="_blank"
                >
                  <i class="fas fa-download"></i> Get live E-Book
                </a>
              </div>
            </Col>
            <Col md={4} xs={6} className="align-self-center">
              <div className="text-center text-md-end py-1">
                {Auth ? (
                  <Link
                    to="/"
                    onClick={logout}
                    className="btn-sm btn-primary text-decoration-none"
                  >
                    Logout
                  </Link>
                ) : (
                  <div className="">
                    <Link
                      to="/register"
                      className="mx-2 btn-sm btn-primary text-decoration-none"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="btn-sm btn-primary text-decoration-none"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          className="shadow-sm"
          id="navbar"
        >
          <Container>
            <Navbar.Brand as={Link} to="/agility">
              <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-auto">
                <Nav.Link as={Link} to="/agility">
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
    </div>
  );
};

export default TopMenubar;
