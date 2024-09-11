import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';
import {Payments} from '../types'
import StyledDataTable from '../../../components/styled/StyledDataTable';


const paymentInit:Payments = {
    id:0,
    amount:0,
    description:'',
    paymentDate:'',
    method:'',
    memberId:0
  }
  

interface MemberPaymentsProps  {
    payments: Payments[];
}

const MemberPayments: React.FC <MemberPaymentsProps> = ({payments}) =>{
  const [values, setValue] = useState(paymentInit);

  const paymentCols = [
    {'fieldName':'id', 'column':'#', 'type':'null', 'style':{width:'10px'}},
    {'fieldName':'description', 'column':'Description', 'type':'string'},
    {'fieldName':'method', 'column':'Method', 'type':'string'},
    {'fieldName':'paymentDate', 'column':'Payment Date Awarded', 'type':'date'},
    {'fieldName':'amount', 'column':'Amount', 'type':'string'},
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
            <h3><Badge bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>Payment History</Badge></h3>          </Col>
          </Row>
          <StyledDataTable
            data={payments} 
            cols={paymentCols} 
            addField = {true} 
            crudField={true}
            addnewRow={addnewRow}
            editRow={editRow}
            deleteRow={deleteRow}
            />
    
    </Container>      
  )
}

export default MemberPayments;