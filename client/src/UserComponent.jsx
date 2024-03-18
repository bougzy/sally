// import React, { useState, useEffect } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import './UserComponent.css'; // Import the CSS file for styling

// const UserComponent = () => {
//   const [users, setUsers] = useState([]);
//   const [currentUserId, setCurrentUserId] = useState(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Randomly select a user to display
//       const randomUserId = Math.floor(Math.random() * users.length) + 1;
//       setCurrentUserId(randomUserId);
//     }, 3000); // Adjust the interval as needed

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [users]);

//   useEffect(() => {
//     // Initialize users on component mount
//     const initialUsers = Array.from({ length: 5 }, (_, index) => ({
//       id: index + 1,
//       name: `User ${index + 1}`,
//       country: 'Country X', // Replace with actual country names
//       deposit: Math.floor(Math.random() * 1000),
//       withdrawal: Math.floor(Math.random() * 500),
//     }));
//     setUsers(initialUsers);
//   }, []);

//   const currentUser = users.find(user => user.id === currentUserId);

//   return (
//     <div className="card-container">
//       {currentUser && (
//         <Card key={currentUser.id} className="fade-in" style={{ width: '18rem', margin: '10px' }}>
//           <Card.Body>
//             <Card.Title>{currentUser.name}</Card.Title>
//             <Card.Text>
//               Country: {currentUser.country}
//               <br />
//               Deposit: {currentUser.deposit}
//               <br />
//               Withdrawal: {currentUser.withdrawal}
//             </Card.Text>
//             {/* <Button variant="primary">Details</Button> */}
//           </Card.Body>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default UserComponent;

import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './UserComponent.css'; // Import the CSS file for styling

const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Randomly select a user to display
      const randomUserId = Math.floor(Math.random() * users.length) + 1;
      setCurrentUserId(randomUserId);
    }, 700); // Adjust the interval as needed

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [users]);

  useEffect(() => {
    // Initialize users on component mount
    const initialUsers = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
    //   name: `John Doe ${index + 1}`,
    //  country: 'Country X', Replace with actual country names
      deposit: Math.floor(Math.random() * 10000),
      withdrawal: Math.floor(Math.random() * 10000),
    }));
    setUsers(initialUsers);
  }, []);

  const currentUser = users.find(user => user.id === currentUserId);

  return (
    <div className="card-container">
      {currentUser && (
        <Card key={currentUser.id} className="fade-in" style={{ width: '12rem', margin: '5px' }}>
          <Card.Body className="bg-warning">
            <Card.Title>{currentUser.name}</Card.Title>
            <Card.Text className="fw-bold fs-italic">
              Deposited: {currentUser.deposit}
              <br />
              Withdrew: {currentUser.withdrawal}
            </Card.Text>
            {/* <Button variant="primary">Details</Button> */}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserComponent;



