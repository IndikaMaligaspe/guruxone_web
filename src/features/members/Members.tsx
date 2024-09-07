import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

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
            <h1>Members</h1>
            <Button variant="primary" className="mb-3" onClick={e=>setAddEditMember(true)}>Add Member</Button>
            <ListMembers members={members} />
          </Container>
          :
          <Container> 
              <h1>Create / Update Members</h1>
              <Button variant="primary" className="mb-3" onClick={e=>setAddEditMember(false)}>List Member</Button>
              <AddEditMembers />
          </Container>
      }
    </Container>
  );
};

export default Members;
