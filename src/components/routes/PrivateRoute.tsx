import React from 'react';
import { Route, Navigate, RouteProps, Outlet } from 'react-router-dom';
import {useAppSelector} from '../../redux/hooks';

type PrivateRouteProps  =  RouteProps & {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC = () => {
  const user = useAppSelector((state) => state.auth);
  
    if(user.isAuthenticated)
      return  <Outlet /> 
    
    return <Navigate to="/login" />
   
  }

export default PrivateRoute;
