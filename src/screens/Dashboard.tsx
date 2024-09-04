import React from 'react';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import MemberDashboard from '../components/dashboards/MemberDashboard';
import AdminSidebar from '../components/common/AdminSidebar';
import { Container, Row, Col } from 'react-bootstrap';

import {useAppSelector} from '../redux/hooks'


const Dashboard: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Container fluid>
      <Row>
        <Col>
        {
        user?.role === 'admin' ?
         (<AdminDashboard />)
        :
          (<MemberDashboard />)
        }
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
