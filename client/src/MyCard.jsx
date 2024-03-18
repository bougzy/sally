import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-80 mt-4 text-center">
      <Card style={{ width: '18rem' }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title>Startee Plan</Card.Title>
          <Card.Text>
            <p>Type: Crypto</p>
            <p>Percentage: 30%</p>
            <p>$500-$4000</p>
            <p>Withdrawal in 14 days</p>
          </Card.Text>
          <a href="#" className="btn btn-warning">
          <Link to="/login" className="text-decoration-none text-black">
      Get Started
      </Link>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
