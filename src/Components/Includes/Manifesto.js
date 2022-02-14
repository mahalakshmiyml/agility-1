import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../Images/manifesto/Manifesto.png";
import image2 from "../Images/manifesto/Principles.png";

const Manifesto = () => {
  return (
    <div>
      <div id="ic-agile" className="bg-primary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Manifesto</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Manifesto
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="text-center">
                <Image src={image1} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image src={image2} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Manifesto;
