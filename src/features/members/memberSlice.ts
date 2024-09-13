import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {Member, MemberAchievment, Payments} from './types'

interface MemberState {
  members: Member[];
  memberAchievements:MemberAchievment[];
  memberPayment:Payments[];
  member?:Member;
}



const initialState: MemberState = {
  members: [],
  memberAchievements:[],
  memberPayment:[],
  member:undefined
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setMembers(state, action: PayloadAction<Member[]>) {
      state.members = action.payload;
    },
    setMember(state, action: PayloadAction<Member>) {
      state.member = action.payload;
    },
    addMember(state, action: PayloadAction<Member>) {
      state.members.push(action.payload);
    },
    setMembersAchievements(state, action: PayloadAction<MemberAchievment[]>) {
      state.memberAchievements = action.payload;
    },
    setMembersPayments(state, action: PayloadAction<Payments[]>) {
      state.memberPayment = action.payload;
    },
  },
});

export const {  addMember, setMembers, setMember, setMembersAchievements, setMembersPayments } = memberSlice.actions;
export default memberSlice.reducer;
