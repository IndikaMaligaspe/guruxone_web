import React from 'react';
import { Route, Navigate, RouteProps, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

type PrivateRouteProps  =  RouteProps & {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (

    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    // <Route
    //   {...rest}
    //   render={(props: any) =>
    //     isAuthenticated ? (
    //       <Component {...props} />
    //     ) : (
    //       <Navigate to="/login" />
    //     )
    //   }
    // />
  );
};

export default PrivateRoute;
