import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const MemberDashboard: React.FC = () => {
  return (
    <Container fluid>
      <h1>Member Dashboard</h1>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Available Locations for Next Two Weeks</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Dojo A</ListGroup.Item>
                <ListGroup.Item>Pool B</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Payments</Card.Title>
              <Card.Text>You have no pending payments.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberDashboard;
