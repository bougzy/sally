// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const AppNavbar = ({ isLoggedIn }) => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home" className="text-black bg-warning p-4 fw-bold rounded">VIRGO</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link> */}
//             {/* <Nav.Link href="/coinmodal">Dashboard One</Nav.Link> */}
//             {!isLoggedIn ? (
//               <>
//                 <Nav.Link href="/login" className="me-2">Login</Nav.Link>
//                 <Nav.Link href="/register">Register</Nav.Link>
//               </>
//             ) : null}
//             {/* <Nav.Link href="/my">My</Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AppNavbar;


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
        <Navbar.Brand href="#home" className="text-black bg-warning p-4 fw-bold rounded">VIRGO</Navbar.Brand>
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
