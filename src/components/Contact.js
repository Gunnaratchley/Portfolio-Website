import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../assets/img/contact-image.png";
import connectPage from "../assets/img/connect-page2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImage} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col> */}
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={connectPage} alt="Contact Us"/>
                {/* <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImage} alt="Contact Us"/>
                    }
                  </TrackVisibility>
                </Col> */}
                {/* <h1>{`Let's Connect:`}</h1>
                  <p>Email: gunnaratchley@gmail.com {"\n"}</p>
                  <p> Phone Number: (479)-313-3005</p> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
