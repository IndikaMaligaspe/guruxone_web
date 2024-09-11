import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';

import {MemberAchievment} from '../../../features/members/types'
import StyledDataTable from '../../../components/styled/StyledDataTable';


const achievementInit = {
    id:0,
    achievementType:'',
    description:'',
    dateAwarded:'',
    venue:'',
    memberId:0,
  }
  
  
  interface MemberAchievmentProps {
    achievements: MemberAchievment[]
  }
  

  const PersonalAchievements: React.FC <MemberAchievmentProps> = ({achievements})  =>{
    const [values, setValue] = useState(achievementInit);

    const achievementCols = [
      {'fieldName':'id', 'column':'#', 'type':'null', 'style':{width:'10px'}},
      {'fieldName':'description', 'column':'Description', 'type':'string'},
      {'fieldName':'achievementType', 'column':'Achievement Type', 'type':'string'},
      {'fieldName':'dateAwarded', 'column':'Date Awarded', 'type':'date','style':{width:'30px'}},
      {'fieldName':'venue', 'column':'Venue', 'type':'string'},
      {'fieldName':'action', 'column':'Action', 'type':'action'}];
    const [data, setData] = useState([]);
  
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
          <Row>
            <Col>
              <h3><Badge bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>Personal Achievements</Badge></h3>          
            </Col>
          </Row>
          <Row>
            <Col>
            <StyledDataTable
              data={achievements} 
              cols={achievementCols} 
              addField = {true} 
              crudField={true}
              addnewRow={addnewRow}
              editRow={editRow}
              deleteRow={deleteRow}
              />
            </Col>
          </Row>
      </Container>
    )
  }
export default PersonalAchievements;