// ChatBot.js
import "./Chat.css"

import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Container, Row, Col, Button } from 'react-bootstrap';

const steps = [
  {
    id: '1',
    message: 'Welcome to the ChatBot! How can I help you today?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'You said "{previousValue}". How can I assist you further?',
    trigger: '2',
  },
];

const ChatBotComponent = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <Container>
      <Row>
        <Col className={`fixed-bottom fixed-right mt-3 ${chatOpen ? 'chat-open' : 'chat-closed'}`}>
          {chatOpen && <ChatBot steps={steps} />}
          <Button variant="warning" className="text-black fw-bold shadow-lg p-3 mb-5 bg-white rounded" onClick={toggleChat}>
            {chatOpen ? 'Close Chat' : 'Open Chat'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatBotComponent;
