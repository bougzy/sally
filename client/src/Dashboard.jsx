





import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import My from "./My"
import InvestmentCard from './InvestmentCard';
import WithdrawalForm from './WithdrawalForm';

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('Analytics');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <Container fluid className="">
      <Row>
        <Col sm={3} className="sidebar bg-dark">
          <Nav className="flex-column">
              
              <Nav.Link onClick={() => handleContentChange('Dashboard')} className="text-warning">Deposit</Nav.Link>
            <Nav.Item>
              
              <Nav.Link onClick={() => handleContentChange('Analytics')} className="text-warning">Investment Plans</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleContentChange('Settings')} className="text-warning">Withdrawal</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className="content">
          {selectedContent === 'Analytics' && <InvestmentCard />}
          {selectedContent === 'Dashboard' && <My/>}
          {selectedContent === 'Settings' && <WithdrawalForm />}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


