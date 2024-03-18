import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const My = () => {
    const location = useLocation();
    const username = location?.state?.username;

  const [depositAmount, setDepositAmount] = useState(() => {
    // Get the deposit amount from localStorage or set it to 0 if not found
    const storedAmount = localStorage.getItem('depositAmount');
    const storedTimestamp = localStorage.getItem('timestamp');
    if (storedAmount && storedTimestamp) {
      const elapsedTime = Date.now() - parseInt(storedTimestamp, 10);
      const secondsPassed = Math.floor(elapsedTime / 1000);
      return parseFloat(storedAmount) * Math.pow(1.00000003, secondsPassed / (24 * 60 * 60));
    }
    return 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - parseInt(localStorage.getItem('timestamp'), 10);
      const secondsPassed = Math.floor(elapsedTime / 1000);
      const newAmount = depositAmount * Math.pow(1.3, secondsPassed / (24 * 60 * 60));
      setDepositAmount(newAmount);
      // Update the timestamp in localStorage
      localStorage.setItem('timestamp', Date.now());
    }, 3000); // Change interval to 3 seconds

    return () => clearInterval(interval);
  }, [depositAmount]);

  const handleDeposit = (amount) => {
    const newAmount = depositAmount + amount;
    setDepositAmount(newAmount);
    // Update the timestamp in localStorage
    localStorage.setItem('timestamp', Date.now());
    // Store the new amount in localStorage
    localStorage.setItem('depositAmount', newAmount);
  };

  return (
    <Container>
      <Card className="border-0 p-5 mt-4">
        <Card.Body>
        <h1>Welcome, {username}!</h1>
          <h1>Deposit Dashboard</h1>
          <Form>
            <Form.Group controlId="depositAmount">
              <Form.Label>Enter deposit amount:</Form.Label>
              <Form.Control className="" type="number" placeholder="Enter amount" />
            </Form.Group>
            <Button className="mt-2" variant="warning" onClick={() => handleDeposit(Number(document.getElementById('depositAmount').value))}>
              Deposit
            </Button>
          </Form>
          <hr />
          <h2>Total Deposit Amount:</h2>
          <h3>${depositAmount.toFixed(2)}</h3>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default My;




// import React, { useState, useEffect } from 'react';
// import { Container, Form, Button, Card } from 'react-bootstrap';

// const DepositManager = () => {
//   const [depositAmount, setDepositAmount] = useState(() => {
//     // Get the deposit amount from localStorage or set it to 0 if not found
//     const storedAmount = localStorage.getItem('depositAmount');
//     return storedAmount ? parseFloat(storedAmount) : 0;
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDepositAmount(prevAmount => {
//         const newAmount = prevAmount * 1.000000003 ;
//         localStorage.setItem('depositAmount', newAmount);
//         return newAmount;
//       });
//     }, 3000); // Change interval to 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return depositAmount.toFixed(2);
// };

// const My = () => {
//   const [depositInput, setDepositInput] = useState(0);

//   const handleDeposit = () => {
//     const amount = parseFloat(depositInput);
//     if (!isNaN(amount) && amount > 0) {
//       setDepositInput(0);
//       localStorage.setItem('depositAmount', parseFloat(localStorage.getItem('depositAmount')) + amount);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Card.Body>
//           <h1>Deposit Dashboard</h1>
//           <Form>
//             <Form.Group controlId="depositAmount">
//               <Form.Label>Enter deposit amount:</Form.Label>
//               <Form.Control 
//                 type="number" 
//                 placeholder="Enter amount"
//                 value={depositInput}
//                 onChange={(e) => setDepositInput(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleDeposit}>
//               Deposit
//             </Button>
//           </Form>
//           <hr />
//           <h2>Total Deposit Amount:</h2>
//           <h3>${<DepositManager />}</h3>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default My;



// import React, { useState, useEffect } from 'react';
// import { Container, Form, Button, Card } from 'react-bootstrap';

// const DepositManager = ({ username }) => {
//   const [depositAmount, setDepositAmount] = useState(() => {
//     // Get the deposit amount from localStorage or set it to 0 if not found
//     const storedAmount = localStorage.getItem(`depositAmount_${username}`);
//     return storedAmount ? parseFloat(storedAmount) : 0;
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDepositAmount(prevAmount => {
//         const newAmount = prevAmount * 1.000000003;
//         localStorage.setItem(`depositAmount_${username}`, newAmount);
//         return newAmount;
//       });
//     }, 3000); // Change interval to 3 seconds

//     return () => clearInterval(interval);
//   }, [username]);

//   return depositAmount.toFixed(2);
// };

// const My = ({ location }) => {
//   const username = location.state.username;
//   const [depositInput, setDepositInput] = useState(0);

//   const handleDeposit = () => {
//     const amount = parseFloat(depositInput);
//     if (!isNaN(amount) && amount > 0) {
//       setDepositInput(0);
//       localStorage.setItem(`depositAmount_${username}`, parseFloat(localStorage.getItem(`depositAmount_${username}`)) + amount);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Card.Body>
//           <h1>{username}'s Deposit Dashboard</h1>
//           <Form>
//             <Form.Group controlId="depositAmount">
//               <Form.Label>Enter deposit amount:</Form.Label>
//               <Form.Control 
//                 type="number" 
//                 placeholder="Enter amount"
//                 value={depositInput}
//                 onChange={(e) => setDepositInput(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleDeposit}>
//               Deposit
//             </Button>
//           </Form>
//           <hr />
//           <h2>Total Deposit Amount:</h2>
//           <h3>${<DepositManager username={username} />}</h3>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default My;




// import React, { useState } from 'react';
// import { Container, Form, Button, Card } from 'react-bootstrap';
// import DepositManager from './DepositManager'; // Assuming DepositManager is in a separate file

// const My = ({ location }) => {
//   // Check if location exists and has the state property
//   const username = location?.state?.username || ''; // Using optional chaining and providing a default value

//   const [depositInput, setDepositInput] = useState(0);

//   const handleDeposit = () => {
//     const amount = parseFloat(depositInput);
//     if (!isNaN(amount) && amount > 0) {
//       setDepositInput(0);
//       localStorage.setItem(`depositAmount_${username}`, parseFloat(localStorage.getItem(`depositAmount_${username}`)) + amount);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Card.Body>
//           <h1>{username}'s Deposit Dashboard</h1>
//           <Form>
//             <Form.Group controlId="depositAmount">
//               <Form.Label>Enter deposit amount:</Form.Label>
//               <Form.Control 
//                 type="number" 
//                 placeholder="Enter amount"
//                 value={depositInput}
//                 onChange={(e) => setDepositInput(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" onClick={handleDeposit}>
//               Deposit
//             </Button>
//           </Form>
//           <hr />
//           <h2>Total Deposit Amount:</h2>
//           <h3><DepositManager username={username} /></h3>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default My;

