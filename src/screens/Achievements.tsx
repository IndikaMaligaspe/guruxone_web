import React from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Achievements: React.FC = () => {
  return (
    <Container>
      <h1>Achievements</h1>
      <Button variant="primary" className="mb-3">Add Achievement</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Member</th>
            <th>Achievement</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Awarded By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Black Belt</td>
            <td>2024-05-15</td>
            <td>Dojo A</td>
            <td>Master Yoshi</td>
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

export default Achievements;
