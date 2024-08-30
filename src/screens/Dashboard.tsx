import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import MemberDashboard from '../components/dashboards/MemberDashboard';

const Dashboard: React.FC = () => {
  const { user } = useAuthContext();

  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }

  return <MemberDashboard />;
};

export default Dashboard;
