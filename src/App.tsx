import React from 'react';
import logo from './logo.svg';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute'
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';



function App() {
  return (
    <AuthProvider>
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
