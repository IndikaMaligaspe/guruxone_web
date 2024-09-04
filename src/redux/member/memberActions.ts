import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setMembers, addMember } from './memberSlice';

export const fetchMembers = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('/api/members');
    dispatch(setMembers(response.data));
  } catch (error) {
    console.error('Error fetching members', error);
  }
};

export const createMember = (newMember: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post('/api/members', newMember);
    dispatch(addMember(response.data));
  } catch (error) {
    console.error('Error adding member', error);
  }
};
