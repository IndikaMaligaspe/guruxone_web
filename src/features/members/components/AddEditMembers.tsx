import React, { useState } from 'react'
import { Button, Container, Col, Form,  Table, Row, Badge } from 'react-bootstrap';
import PersonalInformation from './PersonalInformation';
import PersonalAchievements from './PeronalAchievements';
import {Attendance, Member, MemberAchievment, Payments} from '../../../features/members/types';
import MemberPayments from './MemberPayments';
import MemberAttendance from './MemberAttendance';


const attendance : Attendance[] = [
  {
    id:1,
    title:'Tuesday Night bash',
    location:'Al Barsha Dojo',
    date:'2024-08-01',
    time:'7:30 pm - 9:00 pm',
    instructor:'Indika'
  },
  {
    id:2,
    title:'Saturday Morning',
    location:'Al Nasr',
    date:'2024-08-01',
    time:'8:30 am - 9:30 am',
    instructor:'Mukesh'
  },
]

interface AddEditMembersProps {
  selectedMember:Member | undefined;
  memberAchievements:MemberAchievment[];
  memberPayments:Payments[];
} 

const AddEditMembers :React.FC<AddEditMembersProps> = ({selectedMember,memberAchievements,memberPayments}) => {
  return (
    <Container>
      <PersonalInformation selectedMember={selectedMember} />
      <br></br>
      <PersonalAchievements  achievements={memberAchievements}/>
      <br></br>
      <MemberPayments payments={ memberPayments}/>
      <br></br>
      <MemberAttendance attendance={attendance}/>
    </Container>
  )
}

export default AddEditMembers;