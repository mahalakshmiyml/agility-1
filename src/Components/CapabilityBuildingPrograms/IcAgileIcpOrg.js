import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import video1 from "../Images/videos/ICP-ORG.mp4"
import video2 from "../Images/testimonial-videos/Ian-Feedback-final.mp4"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import icpOrg from "../Images/capability-building-programs/icp-org.png";
import agile from "../Images/agile-visa.png"


const IcAgileIcpOrg = () => {
  let history = useNavigate();
  const [formStatus, setformStatus] = useState("");
  const [Timing, setSchedule] = useState([]);
  const CoursePrice = 699;
  const CourseActualPrice = 1799;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    schedule: "",
  };

  const onSubmit = (values) => {
    const Price = 699;
    const data = values;

    axios
      .get(
        "https://digitalagilityinstitute.com/email-payment-form.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone +
          "&schedule=" +
          data.schedule
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });

    displayRazorpay(Price, data.name, data.email, data.phone);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, username, useremail, userphone) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..");
      return;
    }

    const options = {
      key: "rzp_live_1SmU1PuRbz53st",
      currency: "USD",
      amount: amount * 100,
      contact: userphone,
      email: useremail,
      name: username,
      description: "Payment for Course",

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // // console.log(response)
        // // console.log(username)
        const paymentid = response.razorpay_payment_id;
        const Values = {
          paymentid,
          username,
          useremail,
        }

        // // console.log(Values);

        axios.post('https://digitalagilityinstitute.com/Api/Payment/payment.php', Values)
        .then(function (response) {
          // // console.log(response);
          // setformStatus(response.data);
        })
        .catch(function (error) {
          // console.log(error);
          // setformStatus(error.data);
        });

        // alert("Success payment Done.");
        history.push('/success');
      },
      prefill: {
        name: username,
        contact: userphone,
        email: useremail,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  useEffect(() => {
    axios
      .get(
        "courseschedule/ICP - ORG"
      )
      .then((response) => {
        // console.log(response.data.data);
        setSchedule(response.data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <>
      <div
        id="ic-agile-flipbook"
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
      >
        <Container>
          <Row>
          <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">ICP - ORG</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a href="/capability-building-programs/ic-agile" className="custom">
                      IC - Agile
                      </a>
                    </li>
                    <li className="breadcrumb-item">ICP - ORG</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={3} className="align-self-center">
                  <div className="text-center">
                    <Image src={icpOrg} alt="" className="img-fluid" />
                    <h5 className="text-center py-1">In collaboration with</h5>
                    <Image src={agile} alt="" className="img-fluid" />
                  </div>
                </Col>
                <Col md={9} className="">
                  <h2 className="text-primary py-3 ">
                    About This Certification
                  </h2>
                  <p className="text-align-justify">
                  ICP-ORG certification is one of the advanced certifications through which you will  understand that with the shift to more agile ways of working, organizations need a structure that will pivot & adapt quickly to new challenges and the world around them.</p>
                  <p>We need to find ways to break down silos and increase opportunities for people in different areas to work collaboratively. There is a need to align the organization around the flow of work through the system and reduce bureaucracy to optimise value delivery throughout the organization.</p>
                </Col>
              </Row>
              <Row className="py-2">
                <Col md={6} className="">
                  <h4 className="text-primary py-2">
                    Featured Learning Outcomes
                  </h4>
                  <ul>
                    <li>Shifting to Cross-Functional Autonomous Teams</li>
                    <li>Distributing Power, Control, and Authority</li>
                    <li>Acknowledging Individuals as the Key to the Adaptive Network</li>
                    <li>Building Collective Intelligence</li>
                  </ul>
                </Col>
                <Col md={6} className="">
                  <h4 className="text-primary py-2">What you will receive</h4>
                  <ul>
                    <li>Access to eLearning Portal</li>
                    <li>Course material & Work Book</li>
                    <li>Export of Miro Board</li>
                    <li>ICP-ORG certificate from ICAgile (valid for lifetime) </li>
                    <li>Connect to Digital Agility Institute Community</li>
                  </ul>
                </Col>
                <p>
                Our training is designed by Certified & Practicing Professional Coaches, Training from the Back of the Room practitioners specialising in delivering experiential learning programs. 
                </p>
                <p>
                  This masterclass is delivered by practicing professional
                  coaches Trainer with diverse experience of transforming teams
                  & organizations.
                </p>
              </Row>

              <Row>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Who Should attend :</h4>
                  <ul>
                    <li>Agile team leaders or aspiring team leaders</li>
                    <li>Enterprise Agile Coaches and aspiring coaches</li>
                    <li>First level & Middle level Managers </li>
                    <li>Change Managers & Change Agents </li>
                    <li>And anyone with the desire to explore the power of People Development.</li>
                  </ul>
                </Col>
                <Col md={6} className="pb-3 pt-md-2 pb-md-2">
                  <h4 className="text-primary py-2">Prerequisites:</h4>
                  <ul>
                    <li>An Intermediate level course</li>
                    <li>
                      There are no conditional pre-requisites for the training
                      program
                    </li>
                    <li>
                      Participants should have exposure at least one agile
                      framework.
                    </li>
                  </ul>
                </Col>
              </Row>
              {/* <div className="">
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://designrr.page?id=149596&token=4003258846&type=FP&h=3861"
                    title="IC Agile FlipBook"
                  ></iframe>
                </div>
              </div> */}
              <div className="pt-2 pb-2">
                <Row>
                  <Col md={6}>
                    <div className="text-center pt-3 pb-3">
                      <h2 className="text-white"> </h2>
                      <video height="400" width="400" controls>
                        <source src={video2} type="video/mp4"></source>
                      </video>
                    </div>
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className="">
              <div className="text-center pt-3 pb-3 bg-primary">
                <video height="300" width="300" controls autoPlay>
                  <source src={video1} type="video/mp4"></source>
                </video>
              </div>

              <div className="shadow p-3">
                <h3 className="text-primary">Schedule Your Course</h3>
                <p>
                  Course Name: <strong>IC - Agile (ICP - ORG)</strong>
                </p>
                <p>
                  Course Price: <del>${CourseActualPrice}</del>{" "}
                  <strong> ${CoursePrice}</strong>
                </p>
                <p>
                  Course Price: <del> (INR 135920/-) </del>{" "}
                  <strong> (INR 52812/-)</strong>
                </p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="name" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="email" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone No
                          </label>
                          <Field
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                          />
                          <small className="text-danger">
                            <ErrorMessage name="phone" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="mb-3">
                          <label htmlFor="channel" className="form-label">
                            Schedule
                          </label>
                          <Field
                            as="select"
                            type="text"
                            className="form-control"
                            id="schedule"
                            name="schedule"
                          >
                            <option>-- Select --</option>
                            {Timing.map((option) => (
                              <option
                                key={option.id}
                                value={option.coursetiming}
                              >
                                {option.coursetiming}
                              </option>
                            ))}
                          </Field>
                          <small className="text-danger">
                            <ErrorMessage name="schedule" />
                          </small>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        {formStatus ? (
                          <div className="alert alert-success p-3 text-center">
                            {formStatus}
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md={12}>
                        <div className="">
                          <Button className="btn btn-primary" type="submit">
                            Checkout
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default IcAgileIcpOrg;
