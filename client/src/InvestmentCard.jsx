


// import React, { useState } from 'react';
// import { Card, Button, Modal, Row, Col } from 'react-bootstrap';

// const InvestmentCard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [walletAddresses, setWalletAddresses] = useState({
//     plan1: ["3FvCweCorYnRairoWXoYf2PorLmZ95tNNy", "3FvCweCorYnRairoWXoYf2PorLmZ95tNNy", "3FvCweCorYnRairoWXoYf2PorLmZ95tNNy"],
//     plan2: ["3FvCweCorYnRairoWXoYf2PorLmZ95tNNy", "3FvCweCorYnRairoWXoYf2PorLmZ95tNNy"],
//     plan3: ["3FvCweCorYnRairoWXoYf2PorLmZ95tNNy", "3FvCweCorYnRairoWXoYf2PorLmZ95tNNy"]
//   });

//   const handleShowModal = (plan) => {
//     setSelectedPlan(plan);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const copyToClipboard = (address) => {
//     navigator.clipboard.writeText(address)
//       .then(() => alert('Wallet address copied to clipboard'))
//       .catch((error) => console.error('Could not copy text: ', error));
//   };

//   return (
//     <Card className='p-5 mt-4 border-0'>
//     <Row className="p-3 p-5 mt-4">
//       <Col md={4} className="">
//         <Card className="shadow p-3 mb-5 bg-white rounded">
//           <Card.Body>
//             <div className="investment-plan">
//               <h4>Starter</h4>
//               <p>Type: Crypto</p>
//               <p>Percentage: 30%</p>
//               <p>$500-$4000</p>
//               <p>Withdrawal in 14 days</p>
//               <Button className='bg-warning' onClick={() => handleShowModal('plan1')}>View Wallet Addresses</Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col>
//         <Card className="shadow p-3 mb-5 bg-white rounded">
//           <Card.Body>
//             <div className="investment-plan">
//               <h4>Standard</h4>
//               <p>Type: Crypto</p>
//               <p>Percentage: 30%</p>
//               <p>$5000-$9000</p>
//               <p>Withdrawal in 10 days</p>
//               <Button className="bg-warning" onClick={() => handleShowModal('plan2')}>View Wallet Addresses</Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col>
//         <Card className="shadow p-3 mb-5 bg-white rounded">
//           <Card.Body>
//             <div className="investment-plan">
//               <h4>Premium</h4>
//               <p>Type: Crypto</p>
//               <p>Percentage: 30%</p>
//               <p>$10000 and bove</p>
//               <p>Withdrawal in 5 days</p>
//               <Button className="bg-warning" onClick={() => handleShowModal('plan3')}>View Wallet Addresses</Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Wallet Addresses</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p className="fw-italic bg-light p-2 rounded text-warning">Please copy the wallet address below an make your payment</p>
//           {walletAddresses[selectedPlan]?.map((address, index) => (
//             <div key={index}>
//               <p>Bitcoin {index + 1}: {address}</p>
//               <Button variant="warning" className="text-white" onClick={() => copyToClipboard(address)}>Copy to Clipboard</Button>
//             </div>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="warning" className="text-white" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Row>
//     </Card>
//   );
// }

// export default InvestmentCard;




import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';

const InvestmentCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [walletAddresses, setWalletAddresses] = useState({
    plan1: [
      { coin: 'Bitcoin', address: "3FvCweCorYnRairoWXoYf2PorLmZ95tNNy" },
      { coin: 'Ethereum', address: "0x1234567890123456789012345678901234567890" }
    ],
    plan2: [
      { coin: 'Litecoin', address: "ltc123456789012345678901234567890123" },
      { coin: 'Bitcoin Cash', address: "bitcoincash:qrcw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4" }
    ],
    plan3: [
      { coin: 'Ripple', address: "rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn" },
      { coin: 'Stellar', address: "GDGMR4XQPDQL7ZM5LWS6KQZUWLC7P3Q3JPMMVH3HV5TECBKRG3WU65ZA" }
    ]
  });

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => alert('Wallet address copied to clipboard'))
      .catch((error) => console.error('Could not copy text: ', error));
  };

  return (
    <Card className='p-5 mt-4 border-0'>
      <Row className="p-3 p-5 mt-4">
        <Col md={12} className="">
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className="investment-plan">
                <h4>Starter</h4>
                <p>Type: Crypto</p>
                <p>Percentage: 30%</p>
                <p>$500-$4000</p>
                <p>Withdrawal in 14 days</p>
                <Button className='bg-warning' onClick={() => handleShowModal('plan1')}>View Wallet Addresses</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more columns with different investment plans */}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Wallet Addresses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-italic bg-light p-2 rounded text-warning">Please copy the wallet address below and make your payment</p>
          {walletAddresses[selectedPlan]?.map(({ coin, address }, index) => (
            <div key={index}>
              <p>{coin}: {address}</p>
              <Button variant="warning" className="text-white" onClick={() => copyToClipboard(address)}>Copy to Clipboard</Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="text-white" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default InvestmentCard;

