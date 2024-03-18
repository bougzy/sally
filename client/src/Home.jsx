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
      <Row className="header-section p-5 h-50" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600")', 
      backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <Col>
    <h1 className="text-white">Crypto Trading Platform</h1>
    <p className="text-white">Your gateway to the world of cryptocurrency trading and investment</p>
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
          <img src="https://media.istockphoto.com/id/1323542329/photo/woman-is-checking-bitcoin-price-chart-on-digital-exchange-on-smartphone-cryptocurrency-future.jpg?b=1&s=612x612&w=0&k=20&c=DeTtr-uAixs-rzxFAOx6FVHrYqn0-at2_ZKcH19EcYs=" alt="Crypto Trading" className="feature-image" />
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
