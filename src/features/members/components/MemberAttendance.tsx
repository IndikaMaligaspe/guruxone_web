import React, {useEffect, useState}from 'react'

import {Attendance} from '../types'
import { Badge, Col, Container, Row } from 'react-bootstrap';
import StyledDataTable from '../../../components/styled/StyledDataTable';

interface MemberAttenanceProps {
  attendance: Attendance[];
}

const MemberAttendance: React.FC<MemberAttenanceProps> = ({attendance}) =>{
  const attenaceCols = [
    {'fieldName':'id', 'column':'#', 'type':'null','style':{width:'10px'}},
    {'fieldName':'title', 'column':'Title', 'type':'string'},
    {'fieldName':'location', 'column':'Location', 'type':'string'},
    {'fieldName':'date', 'column':'Date', 'type':'date'},
    {'fieldName':'time', 'column':'Time', 'type':'string'},
    {'fieldName':'instructor', 'column':'Instructor', 'type':'string'},
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
  // const data = ['title','location','date','time','instructor'];
  return (
    <Container>
      <Row>
        <Col>
          <h3>
            <Badge  bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>
              Attendance Records
            </Badge>
          </h3>
        </Col>
      </Row>
      <StyledDataTable
        data={attendance} 
        cols={attenaceCols} 
        addField = {true} 
        crudField={true}
        addnewRow={addnewRow}
        editRow={editRow}
        deleteRow={deleteRow}
        />
    </Container>
  )
}

export default  MemberAttendance;