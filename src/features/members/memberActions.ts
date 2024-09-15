import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setMembers, setMember, addMember, setMembersAchievements, setMembersPayments } from './memberSlice';

import {BASE_URL} from '../../conf'

export const fetchMembers = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/member/achievments`);
    if(response.status === 200){
      dispatch(setMembers(response.data.map((m:any)=>{
        return{
          ...m,
          name:`${m.firstName} ${m.lastName}`,
          achievements:m.achievements.map((a:any)=>{
            return a.description
          })
        }
      })));
    }
} catch (error) {
    console.error('Error fetching members', error);
  }
};

export const fetchMemberById = (id:number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/member/${id}`);
    if(response.status === 200){
      dispatch(setMember(response.data));
    }
} catch (error) {
    console.error('Error fetching member', error);
  }
};


export const fetchMemberAchivements = (id:number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/member/${id}/achievements`);
    if(response.status === 200){
      dispatch(setMembersAchievements(response.data.map((a:any)=>{
        return{
          ...a,
          memberId:id
        }
      })));
    }
} catch (error) {
    console.error(`Error fetching members achivement for ${id}`, error);
  }
};

export const fetchMemberPayments = (id:number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/member/${id}/payments`);
    if(response.status === 200){
      dispatch(setMembersPayments(response.data.map((p:any)=>{
        return{
          ...p,
          memberId:id
        }
      })));
    }
} catch (error) {
    console.error(`Error fetching members achivement for ${id}`, error);
  }
};

export const createMember = (newMember: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/members`, newMember);
  } catch (error) {
    console.error('Error adding member', error);
  }
};


export const updateMember = (newMember: any) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/members`, newMember);
    dispatch(addMember(response.data));
  } catch (error) {
    console.error('Error adding member', error);
  }
};