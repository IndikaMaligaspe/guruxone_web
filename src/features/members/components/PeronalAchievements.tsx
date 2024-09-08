import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';

import {MemberAchievment} from '../../../features/members/types'


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
    return (
      
      <Container>
          <Row>
            <Col>
            <h3><Badge bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>Personal Achievements</Badge></h3>          </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Awarded Type</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      achievements? achievements.map((r)=>{
                          return(
                            <tr>
                              <td>{r.id}</td>
                              <td>{r.description}</td>
                              <td>{r.achievementType}</td>
                              <td>{r.dateAwarded}</td>
                              <td>{r.venue}</td>
                              <td width={'10%'}>
                                <Row style={{padding:0, gap:0}}>
                                  <Col style={{padding:0}}><Button>E</Button></Col>
                                  <Col style={{padding:0}}><Button>D</Button></Col>
                                  <Col style={{padding:0}}><Button>S</Button></Col>
                                </Row>
                              </td>
                            </tr>
                          )
                      }):null
                    }
                    <tr>
                      <td>{achievements.length+1}</td>
                      <td>
                      <Form.Control
                        name='description'
                        value={values.description}>
                      </Form.Control>
                      </td>
                      <td>
                      <Form.Control
                        name='awardedBy'
                        value={values.achievementType}>
                      </Form.Control>
                      </td>
                      <td>
                      <Form.Control type='date'
                        name='dateAwarded'
                        value={values.dateAwarded}>
                      </Form.Control>
                      </td>
                      <td><Form.Control
                        name='venue'
                        value={values.venue}>
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
export default PersonalAchievements;