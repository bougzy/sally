import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const WithdrawalForm = () => {
  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the submission of the withdrawal form
    // For demonstration purposes, I'll just display the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-5 mt-4 vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formWithdrawalAmount" className="w-100">
          <Form.Label>Withdrawal Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </Form.Group>
        <Button className="mt-3 bg-warning" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please contact the admin as an amount of ${amount} has been requested for withdrawal.
        </Modal.Body>
        <Modal.Footer>
          <Button className="mt-3 bg-warning" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WithdrawalForm;
