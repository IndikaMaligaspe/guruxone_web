import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute'
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Locations from './screens/Locations';
import Members from './screens/Members';
import Schedules from './screens/Schedules';
import AdminLayout from './components/common/AdminLayout';

import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route  path="/" element={<PrivateRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/locations" element={<Locations/>} />
              <Route path="/members" element={<Members/>} />
              <Route path="/schedules" element={<Schedules/>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
