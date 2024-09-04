import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import { login } from '../../redux/auth/authActions';

import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username, password));
    navigate('/dashboard');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
