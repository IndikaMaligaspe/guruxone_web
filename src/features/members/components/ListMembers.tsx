import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import {Member} from '../../../features/members/types'
import StyledDataTable from '../../../components/styled/StyledDataTable';

import {useAppSelector} from '../../../redux/hooks';


interface MemberProps {
  updateStateActions: (action:string, selectedMemberId:number)=>void;
}

const ListMembers: React.FC <MemberProps> = ({ updateStateActions}) => {

  const members:Member[] = useAppSelector((state) => state.members.members);
  const [data, setData] = useState<unknown[]>([]);


  useEffect(()=>{
    let _membersRows = members.map(m=>{
      return{
        ...m,
       achievements:m.achievements?.join() 
      }
    })
    setData(_membersRows)
  },[members])


  const memberListCols = [
    {'fieldName':'id', 'column':'#', 'type':'null','style':{width:'10px'}},
    {'fieldName':'name', 'column':'Name', 'type':'string'},
    {'fieldName':'phoneNumber', 'column':'Phone', 'type':'string'},
    {'fieldName':'email', 'column':'Email', 'type':'date'},
    {'fieldName':'achievements', 'column':'Achievements', 'type':'string'},
    {'fieldName':'action', 'column':'Action', 'type':'action'}];
  
  const addnewRow = (e:undefined) =>{
    console.log('Add Row -> ', e)
  } 
 
  const editRow = (id:number) =>{
    updateStateActions('EDIT', id);
  }

  const deleteRow = (id:number) =>{
    updateStateActions('DELETE', id);
  }

  return (
    <Container>
      <StyledDataTable
              data={data} 
              cols={memberListCols} 
              addField = {false} 
              crudField={true}
              addnewRow={addnewRow}
              editRow={editRow}
              deleteRow={deleteRow}
              />
    </Container>
  );
};

export default ListMembers;
