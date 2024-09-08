import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';
import PersonalInformation from './PersonalInformation';
import PersonalAchievements from './PeronalAchievements';
import {MemberAchievment, Payments} from '../../../features/members/types';
import MemberPayments from './MemberPayments';




const sampleAchievements : MemberAchievment[]= [
  {
    id:1,
    achievementType:'Blackbelt',
    description:'Aikikai Australia - Shodan',
    dateAwarded:'1977-09-01',
    venue:'Sydney Dojo',
    memberId:1,
  },
  {
    id:2,
    achievementType:'Blackbelt',
    description:'Aikikai Australia - Nidan',
    dateAwarded:'1987-09-01',
    venue:'Sydney Dojo',
    memberId:1,
  },
  {
    id:3,
    achievementType:'Blackbelt',
    description:'Aikikai Australia - Sandan',
    dateAwarded:'1997-09-01',
    venue:'UAE Dojo',
    memberId:1,
  }
]

const samplePayments : Payments[]  = [
{
  id:1,
  amount:200,
  description:'June Monthly Payment',
  paymentDate:'2024-06-06',
  method:'online',
  memberId:1

},
{
  id:2,
  amount:350,
  description:'Sugano Seminar Payment',
  paymentDate:'2024-08-01',
  method:'online',
  memberId:1

},
]

const AddEditMembers = () => {
  return (
    <Container>
      <PersonalInformation />
      <br></br>
      <PersonalAchievements  achievements={sampleAchievements}/>
      <br></br>
      <MemberPayments payments={ samplePayments}/>
    </Container>
  )
}

export default AddEditMembers;