import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';
import {Payments} from '../types'


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

  return (
    <Container>
          <Row>
            <Col>
            <h3><Badge bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>Payment History</Badge></h3>          </Col>
          </Row>
          <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Reason</th>
                            <th>Method</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           payments.length > 0?payments.map((p)=>{
                                return(
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.description}</td>
                                        <td>{p.method}</td>
                                         <td>{p.paymentDate}</td>
                                        <td>{p.amount}</td>
                                        <td width={'10%'}>
                                            <Row style={{padding:0, gap:0}}>
                                            <Col style={{padding:0}}><Button>E</Button></Col>
                                            <Col style={{padding:0}}><Button>D</Button></Col>
                                            <Col style={{padding:0}}><Button>S</Button></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                )
                            })
                            : null
                        }
                        <tr>
                            <td>{payments.length +1}</td>
                            <td>
                            <Form.Control
                                name="description"
                                value={values.description}>
                            </Form.Control>
                            </td>
                            <td>
                            <Form.Control
                                name="method"
                                value={values.method}>
                            </Form.Control>
                            </td>
                            <td>
                            <Form.Control
                                name="paymentDate"
                                type="date"
                                value={values.paymentDate}>
                            </Form.Control>
                            </td>
                            <td>
                            <Form.Control
                                name="amount"
                                value={values.amount}
                                type="number"
                                maxLength={5}
                                width={5}
                                >
                            </Form.Control>
                            </td>
                            <td width={'10%'}>
                                <Row style={{padding:0, gap:0, textAlign:'end'}}>
                                <Col style={{padding:0}}><Button>Add</Button></Col>
                                </Row>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
          </Row>
    </Container>      
  )
}

export default MemberPayments;