import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import {useAppDispatch} from '../../redux/hooks';
import {fetchMembers, fetchMemberById, fetchMemberAchivements, fetchMemberPayments,  createMember, updateMember} from './memberActions';

import ListMembers from './components/ListMembers';
import AddEditMembers from './components/AddEditMembers';



const Members: React.FC = () => {
  
  const dispatch = useAppDispatch();
  // const members:Member[] = useAppSelector((state) => state.members.members);

  const [reload, setReload] = useState(true);
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
    setSelectedMemberId(selectedMemberId);
    setAction(action);
  }   

  const handleSave = (values: unknown) =>{
    if(action === 'EDIT')
      dispatch(updateMember(values));
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
              <ListMembers updateStateActions={updateStateActions}/>
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
                handleSave={handleSave}
              />
            </Row>
          </Container>
      }
    </Container>
  );
};

export default Members;
