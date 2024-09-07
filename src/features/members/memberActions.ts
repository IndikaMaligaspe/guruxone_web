import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setMembers, addMember } from './memberSlice';

import {Member} from './types'

export const fetchMembers = () => async (dispatch: Dispatch) => {
  try {
    // const response = await axios.get('/api/members');
    const Members:Member[] = [
      {
         id:1 , 
         name:' indika',
         email:'sample@sample.com',
         achiements:['Black Belt'],
      },
      {
        id:2 , 
        name:' indika',
        email:'sample@sample.com',
        achiements:['Black Belt'],
     },
     {
      id:3 , 
      name:' indika',
      email:'sample@sample.com',
      achiements:['Black Belt'],
   },
    ]
    dispatch(setMembers(Members));
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
