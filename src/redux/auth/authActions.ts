// src/redux/auth/authActions.ts
import { Dispatch } from '@reduxjs/toolkit';
import { loginSuccess, logoutSuccess } from './authSlice';
import axios from 'axios';

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
  try {
    // const response = await axios.post('/api/login', { username, password });
    const user = {
        isAuthenticated: true,
        user: 'admin',
        role:username=='admin@example.com'?'admin':'member',
        token:password,
    }
    dispatch(loginSuccess(user));
    localStorage.setItem('token', user.token); // Persist token
  } catch (error) {
    console.error('Login failed', error);
  }
};


export const logout = (token: string) => async (dispatch: Dispatch) => {
  try {
    // const response = await axios.post('/api/login', { username, password });
    dispatch(logoutSuccess());
    localStorage.removeItem(token); // Persist token
  } catch (error) {
    console.error('Login failed', error);
  }
};