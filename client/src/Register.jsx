import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserRegistrationComponent = () => {
  const navigate = useNavigate(); // Import useNavigate

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/register', formData);
      console.log(response.data); // Handle success response

      // Redirect to the login page upon successful registration
      navigate('/login');
    } catch (error) {
      console.error(error.response.data); // Handle error response
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 text-center vh-100 border-4 shadow-lg">
    <Form onSubmit={handleFormSubmit} className="bg-light p-5 m-3">
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3 bg-warning">
        Register
      </Button>
      <p>Please 
        <Link to="/login" className="mt-2 ms-2">Login Here</Link>
      </p>
    </Form>
    </div>
  );
};

export default UserRegistrationComponent;
