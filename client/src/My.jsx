import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const My = () => {
    const location = useLocation();
    const username = location?.state?.username;

    const [depositAmount, setDepositAmount] = useState(() => {
        // Get the deposit amount from localStorage or set it to 0 if not found
        const storedAmount = localStorage.getItem('depositAmount');
        return storedAmount ? parseFloat(storedAmount) : 0;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsedTime = Date.now() - parseInt(localStorage.getItem('timestamp'), 10);
            const secondsPassed = Math.floor(elapsedTime / 1000);
            const newAmount = depositAmount * Math.pow(1.0000003, secondsPassed / (24 * 60 * 60));
            setDepositAmount(newAmount);
            // Update the timestamp in localStorage
            localStorage.setItem('timestamp', Date.now());
        }, 3000); // Change interval to 3 seconds

        return () => clearInterval(interval);
    }, [depositAmount]);

    const handleDeposit = (amount) => {
        if (!isNaN(amount) && amount > 0) {
            const newAmount = depositAmount + amount;
            setDepositAmount(newAmount);
            // Update the timestamp in localStorage
            localStorage.setItem('timestamp', Date.now());
            // Store the new amount in localStorage
            localStorage.setItem('depositAmount', newAmount);
        }
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
