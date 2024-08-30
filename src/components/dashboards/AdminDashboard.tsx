import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminDashboard: React.FC = () => {
  return (
    <Container fluid>
      <h1>Admin Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Active Members</Card.Title>
              <Card.Text>150 Members</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Membership Fees</Card.Title>
              <Card.Text>25 Members</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Attendance in Last Week</Card.Title>
              <Card.Text>Dojo A: 75%, Pool: 50%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
