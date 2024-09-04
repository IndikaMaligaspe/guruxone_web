import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import { logout } from '../../redux/auth/authActions';


const AdminSidebar: React.FC = () => {

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutUser = () =>{
    dispatch(logout(user != null?user.token:''));
    navigate('/dashboard');
  }

  return (
    <Nav defaultActiveKey="/dashboard" className="flex-column">
      <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={NavLink} to="/members">
        Members Setup
      </Nav.Link>
      <Nav.Link as={NavLink} to="/locations">Location Setup</Nav.Link>
      <Nav.Link as={NavLink} to="/schedules">Schedule Setup</Nav.Link>
      <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
    </Nav>
  );
};

export default AdminSidebar;
