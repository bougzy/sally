import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="footer bg-warning text-black p-3 text-center">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h4>About Us</h4>
            <p>
          Welcome to Virgo, your trusted partner in the world of cryptocurrency trading and investment. Founded on the principles of innovation, transparency, and financial empowerment, we aim to redefine the way individuals and institutions engage with the rapidly evolving landscape of digital assets.
          </p>
          </Col>
          <Col xs={12} md={6} className="">
            <h4>Contact Information</h4>
            <p>Email: info@virgoonline</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <p className="text-center">&copy; 2024 Virgo. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterComponent;
