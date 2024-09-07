import React, { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import {Member} from '../../../features/members/types'




interface MemberProps {
  members: Member[]
}

const ListMembers: React.FC <MemberProps> = ({members}) => {


  useEffect(()=>{
    console.log('MEMBERS -> ', members)
  },[members])
  return (
    <Container>
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
          {
            members.map((m)=>(
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.email}</td>
              <td>{m.achiements.join()}</td>
              <td>
                <Button variant="warning" className="mr-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            ))
          }
          
        </tbody>
      </Table>
    </Container>
  );
};

export default ListMembers;
