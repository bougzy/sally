// Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TradingViewWidget from './TradingViewWidget';
import './Home.css'; // Import the CSS file for additional styling
import UserComponent from './UserComponent';
import Chat from './Chat';
import MyCard from './MyCard';
import VideoPlayer from './VideoPlayer';

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="header-section p-5 h-50" style={{ backgroundImage: 'url("data:image/jpeg;base64,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")', 
      backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <Col>
    <h1 className="text-white"></h1>
    <p className="text-white"></p>
    <Button variant="warning">
    <Link to="/login" className="text-decoration-none text-black">
      Get Started
      </Link>
      </Button>
  </Col>
   </Row>


      <Row className="align-items-center shadow-sm p-3 mb-5 rounded">
        <Col md={6} className="bg-light">
          <h2 className="">Features</h2>
          <ul>
            <li>Real-time Crypto Market Data</li>
            <li>User-Friendly Trading Interface</li>
            <li>Secure and Transparent Transactions</li>
            {/* Add more features as needed */}
          </ul>
          <p>
          Stay ahead of the curve with our real-time market data. We understand the importance of timely and accurate 
          information in the fast-paced crypto market. Our platform empowers you with live updates on prices, trading volumes, and market trends. Whether you are a seasoned 
          trader or just getting started, access to real-time data ensures that you can make informed decisions at the right moment.
          </p>
          <p>
          Security is paramount in the world of cryptocurrency, and we prioritize the protection of your assets. 
          Our platform employs state-of-the-art security measures, including encryption protocols and multi-factor authentication, 
          to safeguard your funds and personal information. Moreover, we uphold transparency in every transaction, providing you with 
          clear and detailed records. Our commitment to security and 
          transparency is aimed at fostering trust and confidence in your crypto trading journey.
          </p>
        </Col>
        <Col md={6}>
          <img src="data:image/jpeg;base64,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" />
        </Col>
      </Row>

        <MyCard />

      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2 className="text-center mt-3">About Us</h2>
          <p>
          Welcome to Virgo, your trusted partner in the world of cryptocurrency trading and investment. Founded on the principles of innovation, transparency, and financial empowerment, we aim to redefine the way individuals and institutions engage with the rapidly evolving landscape of digital assets.
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Our Mission</h2>
          <p>
          At Virgo, our mission is to provide accessible and secure solutions for cryptocurrency enthusiasts and investors alike. We believe in fostering a global community that embraces the potential of blockchain technology and empowers individuals to take control of their financial future.
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Why Choose Us</h2>
          <p>
          Expertise in Crypto Markets
Our team comprises seasoned experts with a deep understanding of cryptocurrency markets. We leverage this expertise to deliver real-time insights, advanced trading tools, and comprehensive educational resources to our users.

Cutting-edge Technology
We stay ahead of the curve by implementing cutting-edge technology to ensure a seamless and secure trading experience. Our platform is designed to meet the needs of both novice traders and seasoned professionals, offering an intuitive interface paired with advanced features.

Commitment to Security
Security is paramount in the cryptocurrency space, and we take it seriously. Virgo employs state-of-the-art security measures to safeguard your assets, providing you with peace of mind as you navigate the world of digital finance
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Our Vision</h2>
          <p>
          As we look to the future, our vision is to be a global leader in cryptocurrency trading, recognized for our commitment to innovation, integrity, and customer satisfaction. We strive to be at the forefront of industry advancements, shaping the future of finance through the democratization of digital assets.
          </p>
        </Col>
      </Row>
      <Row className="about-section bg-light shadow-sm p-3 mb-5 rounded m-4">
        <Col>
          <h2  className="text-center mt-3">Join Us On The Journey</h2>
          <p>
          Whether you are a seasoned trader or a newcomer to the crypto space, Virgo welcomes you to join us on this exciting journey. Explore the endless possibilities of digital finance, backed by a team dedicated to your success.

Thank you for choosing Virgo. Together, let's navigate the fascinating world of cryptocurrencies and unlock the potential of your financial journey.

Virgo Team
          </p>
        </Col>
      </Row>

      {/* Add more sections like testimonials, pricing, etc. based on your requirements */}
          <TradingViewWidget />
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=VYWc9dFqROI" />
          <UserComponent />
          <Chat />
        
    </Container>
  );
};

export default Home;
