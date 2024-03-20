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
           The CoinMarketCap Grant Program is a testament to our commitment to fostering innovation and driving positive 
              change within the cryptocurrency and blockchain ecosystem. 
              Through this program, we aim to support promising projects and initiatives that have the potential to make a 
              significant impact on the industry.
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
              <p className="text-center">&copy; 2024 CoinMarketCap. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterComponent;
