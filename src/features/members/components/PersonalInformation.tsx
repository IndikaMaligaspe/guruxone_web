import React, { useState, useEffect } from 'react'
import { Button, Container, Col, Form, Row, Badge } from 'react-bootstrap';
import { Member } from '../types';
import moment from 'moment';


const memberDetailsInit  ={
  id:0,
  firstName: '',
  lastName: '',
  mobileNumber:'',
  email:'',
  dob:new Date(),
  gender:'',
  address:'',
  city:'',
};

interface PersonalInformationProps {
    selectedMember:Member | undefined;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({selectedMember}) => {
    const [values, setValues] = useState(memberDetailsInit)
    const [reset, setReset] = useState(false)

    useEffect(()=>{
        if(selectedMember){
            setValues({
                ...values,
                id:selectedMember?.id,
                firstName:selectedMember?.firstName,
                lastName:selectedMember?.lastName,
                address:selectedMember?.address,
                mobileNumber:selectedMember?.phoneNumber,
                email:selectedMember?.email,
                gender:selectedMember?.gender,
                dob:selectedMember?.dateofBirth,
                city:selectedMember?.city,
            })
            setReset(false)
        }
        
    },[selectedMember, reset])

    const handleValues = (name:string, value:string|number|Date|undefined) =>{
        setValues({
            ...values,
            [name]:value
        })
    }

    return (
        <Container id='personalDetail'>
            <Row>
            <Col>
                <h3><Badge bg="primary" style={{width:'100%', alignItems:'left', textAlign:'left'}}>Personal Information</Badge></h3>
            </Col>
            </Row>
            <Form>
            <Form.Group as={Row}>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name='firstName' 
                                  value={values.firstName}
                                  onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name='lastName' 
                                  value={values.lastName}
                                  onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row}>
                <Col lg={8}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' 
                                  value={values.address}
                                  onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
                <Col>
                    <Form.Label>City</Form.Label>
                    <Form.Select name='city' value={values.city} onChange={e=>handleValues(e.target.name, e.target.value)}>
                    <option>Abu Dabi</option>
                    <option>Ajman</option>
                    <option>Al Amin</option>
                    <option>Dubai</option>
                    <option>Sharjah</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row}>
                <Col lg={3}>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type='date' name='birthDate' 
                              value={moment(values.dob).format("YYYY-MM-DD")} 
                              onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
                <Col lg={3}>
                <Form.Label>Gender</Form.Label>
                <Form.Select  name='gender' 
                              value={values.gender}
                              onChange={e=>handleValues(e.target.name, e.target.value)}>
                    <option>Select</option>
                    <option>him</option>
                    <option>her</option>
                    <option>nutral</option>
                    <option>prefer not to say</option>
                </Form.Select>
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row}>
                <Col lg={3}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control  name='mobile' 
                                   value={values.mobileNumber}
                                   onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
                <Col lg={5}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' 
                                  name='email' 
                                  value={values.email}
                                  onChange={e=>handleValues(e.target.name, e.target.value)}></Form.Control>
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row}>
                <Col lg={10}>
                </Col>
                <Col>
                <Button variant='outline-primary' onClick={(e)=>{setReset(true)}}>Reset</Button>
                </Col>
                <Col>
                <Button variant='primary' onClick={(e)=>{console.log('Save')}}>Save</Button>
                </Col>
            </Form.Group>
            </Form>
        </Container>
      )
}

export default PersonalInformation;