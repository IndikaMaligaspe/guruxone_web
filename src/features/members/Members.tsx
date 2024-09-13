import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchMembers, fetchMemberById, fetchMemberAchivements, fetchMemberPayments,  createMember} from './memberActions';

import ListMembers from './components/ListMembers';

import {Member, MemberAchievment, Payments} from  './types'
import { useNavigate } from 'react-router-dom';
import AddEditMembers from './components/AddEditMembers';


const Members: React.FC = () => {
  
  const dispatch = useAppDispatch();
  const members:Member[] = useAppSelector((state) => state.members.members);
  const selectedMember:Member | undefined = useAppSelector((state) => state.members.member);
  const memberAchievements:MemberAchievment[] = useAppSelector((state) => state.members.memberAchievements);
  const memberPayments:Payments[] = useAppSelector((state) => state.members.memberPayment);

  const [reload, setReload] = useState(true);
  const [addEditMember, setAddEditMember] = useState(false);
  const [action, setAction] = useState(`LIST`);
  const [selectedMemberId, setSelectedMemberId]  = useState<number | null>(null);

  useEffect(() =>{
    if(reload){
      dispatch(fetchMembers());
      setReload(false)
    }
  },[reload]);

  useEffect(()=>{
     if(selectedMemberId != null){
      Promise.all(
        [dispatch(fetchMemberById(selectedMemberId)),
         dispatch(fetchMemberAchivements(selectedMemberId)),
         dispatch(fetchMemberPayments(selectedMemberId)),
        ]
      ).catch(err =>{
        console.log(err)
      });
     }
  },[action, selectedMemberId])

  const updateStateActions = (action:string, selectedMemberId:number) =>{
    console.log(action, selectedMemberId);
    setSelectedMemberId(selectedMemberId);
    setAction(action);
  }   

  return (
    <Container>
      
      {action ==='LIST'  ?
         <Container>
           <Row>
            <Col lg={10}><h1>List Members</h1></Col>
            <Col><Button variant="primary" className="mb-3" onClick={e=>setAction('CREATE')}>Add Member</Button></Col>
            </Row>
            <br></br>
            <Row>
              <ListMembers members={members} updateStateActions={updateStateActions}/>
            </Row>
          </Container>
          :
          <Container> 
            <Row>
              <Col lg={10}><h1>Create / Update Members</h1></Col>
              <Col><Button variant="primary" className="mb-3" onClick={e=>setAction('LIST')}>List Member</Button></Col>
            </Row> 
            <br></br> 
            <Row>
              <AddEditMembers 
                selectedMember={selectedMember}
                memberAchievements={memberAchievements}
                memberPayments={memberPayments}
              />
            </Row>
          </Container>
      }
    </Container>
  );
};

export default Members;
