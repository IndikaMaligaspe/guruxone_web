import React, { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchMembers, createMember} from './memberActions';

import ListMembers from './components/ListMembers';

import {Member} from  './types'


const Members: React.FC = () => {

  const dispatch = useAppDispatch();
  const members:Member[] = useAppSelector((state) => state.members.members);

  useEffect(() =>{
    dispatch(fetchMembers());
  },[]);

  return (
    <Container>
      <h1>Members</h1>
      <Button variant="primary" className="mb-3">Add Member</Button>
      <ListMembers members={members} />
    </Container>
  );
};

export default Members;
