
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import memberReducer from '../features/members/memberSlice';
// Add more reducers as needed

export const rootReducer = combineReducers({
  auth: authReducer,
  members: memberReducer,
});
