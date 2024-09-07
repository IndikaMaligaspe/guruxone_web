import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Locations: React.FC = () => {
  return (
    <Container>
      <h1>Locations</h1>
      <Button variant="primary" className="mb-3">Add Location</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Location Name</th>
            <th>Address</th>
            <th>Contact Email</th>
            <th>Contact Number</th>
            <th>Activities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dojo A</td>
            <td>123 Main St, Dubai</td>
            <td>dojoa@example.com</td>
            <td>+97112345678</td>
            <td>Karate, Aikido</td>
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

export default Locations;
