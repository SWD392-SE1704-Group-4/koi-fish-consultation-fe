import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
      getDefaultMiddleware({
        serializableCheck: false,
      })
})

export type AppDispatcher = typeof store.dispatch;
export const useAppDispatcher = () => useDispatch<AppDispatcher>();
export default store;