import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Member {
  id: number;
  name: string;
  email: string;
}

interface MemberState {
  members: Member[];
}

const initialState: MemberState = {
  members: [],
};

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setMembers(state, action: PayloadAction<Member[]>) {
      state.members = action.payload;
    },
    addMember(state, action: PayloadAction<Member>) {
      state.members.push(action.payload);
    },
  },
});

export const { setMembers, addMember } = memberSlice.actions;
export default memberSlice.reducer;
