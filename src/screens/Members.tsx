import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Members: React.FC = () => {
  return (
    <Container>
      <h1>Members</h1>
      <Button variant="primary" className="mb-3">Add Member</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Achievements</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>+123456789</td>
            <td>john@example.com</td>
            <td>Black Belt</td>
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

export default Members;
