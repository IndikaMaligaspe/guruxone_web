import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LoginForm from '../components/auth/LoginForm';


const Login: React.FC = ()   => {
  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="login-left">
          <Image src="/logo.png" alt="Logo" fluid />
          <h1>Welcome to Sports Membership System</h1>
          <Image src="/welcome-image.jpg" alt="Welcome" fluid />
        </Col>
        <Col md={6} className="login-right">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
