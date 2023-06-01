import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    user
  },
});

export const useAppDispatch = () => useDispatch();
