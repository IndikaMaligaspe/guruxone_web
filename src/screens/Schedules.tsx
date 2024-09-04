import React from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Schedules: React.FC = () => {
  return (
    <Container>
      <h1>Schedules</h1>
      <Button variant="primary" className="mb-3">Add Schedule</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Coach</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dojo A</td>
            <td>2024-09-10</td>
            <td>09:00 AM</td>
            <td>John Doe</td>
            <td>
              <Button variant="warning" className="mr-2">Edit</Button>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Schedules;
