import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchMembers, createMember} from './memberActions';

import ListMembers from './components/ListMembers';

import {Member} from  './types'
import { useNavigate } from 'react-router-dom';
import AddEditMembers from './components/AddEditMembers';


const Members: React.FC = () => {

  const dispatch = useAppDispatch();
  const members:Member[] = useAppSelector((state) => state.members.members);

  const [addEditMember, setAddEditMember] = useState(false);

  useEffect(() =>{
    dispatch(fetchMembers());
  },[]);

  

  return (
    <Container>
      
      {!addEditMember ?
         <Container>
           <Row>
            <Col lg={10}><h1>Create / Update Members</h1></Col>
            <Col><Button variant="primary" className="mb-3" onClick={e=>setAddEditMember(true)}>Add Member</Button></Col>
            </Row>
            <br></br>
            <Row>
              <ListMembers members={members} />
            </Row>
          </Container>
          :
          <Container> 
            <Row>
              <Col lg={10}><h1>Create / Update Members</h1></Col>
              <Col><Button variant="primary" className="mb-3" onClick={e=>setAddEditMember(false)}>List Member</Button></Col>
            </Row> 
            <br></br> 
            <Row>
              <AddEditMembers />
            </Row>
          </Container>
      }
    </Container>
  );
};

export default Members;
