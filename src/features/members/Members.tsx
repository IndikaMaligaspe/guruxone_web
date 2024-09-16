import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import {useAppDispatch} from '../../redux/hooks';
import {fetchMembers, fetchMemberById, fetchMemberAchivements, fetchMemberPayments,  createMember, updateMember} from './memberActions';

import ListMembers from './components/ListMembers';
import AddEditMembers from './components/AddEditMembers';
import StyledMessage from '../../components/styled/StyledMessage';


interface ToastProps {
  message:string;
  header:string;
  type:string;
}

const Members: React.FC = () => {
  
  const dispatch = useAppDispatch();

  const [reload, setReload] = useState(true);
  const [action, setAction] = useState(`LIST`);
  const [selectedMemberId, setSelectedMemberId]  = useState<number | null>(null);
  const [toast, setToast] = useState<ToastProps>();
  const [showToast, setShowToast] = useState(false);
  

  useEffect(() =>{
    if(reload || action == 'LIST'){
      dispatch(fetchMembers());
      setReload(false)
    }
  },[reload, action]);

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
      if(selectedMemberId)
        dispatch(updateMember(selectedMemberId, values)).then((res) =>{
          if (res == 200)
            setToast({
              message:'Saved Successfully',
              type:'success',
              header:'Success'
            })
          else
            setToast({
              message:'Error while saving',
              type:'danger',
              header:'Error'
          }) 
          setShowToast(!showToast)  
        });
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
              <Col><Button variant="primary" className="mb-3" onClick={e=>{setSelectedMemberId(null);setReload(true);setAction('LIST');}}>List Member</Button></Col>
            </Row> 
            <br></br> 
            <Row>
              <AddEditMembers 
                handleSave={handleSave}
              />
              <StyledMessage 
                message={toast?.message}
                type={toast?.type} 
                header={toast?.header}
                setShow={setShowToast}
                show={showToast}
              />
            </Row>
          </Container>
      }
    </Container>
  );
};

export default Members;
