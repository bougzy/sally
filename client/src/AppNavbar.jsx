import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AppNavbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    // For simplicity, let's assume logout just updates the isLoggedIn state to false
    // You can add more logic like clearing localStorage, etc.
    // Redirect to the home page
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-black bg-warning p-4 fw-bold rounded">
          <img src="data:image/png;base64,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" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */}
            {/* <Nav.Link href="/coinmodal">Dashboard One</Nav.Link> */}
            {isLoggedIn ? (
              <>
                <Button variant="outline-warning" onClick={handleLogout} className="me-2">Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link href="/login" className="me-2">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
            {/* <Nav.Link href="/my">My</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
