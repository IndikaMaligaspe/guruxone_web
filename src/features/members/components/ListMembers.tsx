import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import {Member} from '../../../features/members/types'
import StyledDataTable from '../../../components/styled/StyledDataTable';




interface MemberProps {
  members: Member[]
}

const ListMembers: React.FC <MemberProps> = ({members}) => {

  const [data, setData] = useState<unknown[]>([]);


  useEffect(()=>{
    let _membersRows = members.map(m=>{
      return{
        ...m,
        achievements:m.achievements.join() 
      }
    })
    setData(_membersRows)
  },[members])


  const memberListCols = [
    {'fieldName':'id', 'column':'#', 'type':'null','style':{width:'10px'}},
    {'fieldName':'name', 'column':'Name', 'type':'string'},
    {'fieldName':'phone', 'column':'Phone', 'type':'string'},
    {'fieldName':'email', 'column':'Email', 'type':'date'},
    {'fieldName':'achievements', 'column':'Achievements', 'type':'string'},
    {'fieldName':'action', 'column':'Action', 'type':'action'}];
  
  const addnewRow = (e:undefined) =>{
    console.log('Add Row -> ', e)
  } 
 
  const editRow = (id:number) =>{
    console.log('Edit Row -> ', id)
  }

  const deleteRow = (id:number) =>{
    console.log('Delete Row -> ', id)
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
