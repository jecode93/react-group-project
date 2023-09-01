import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rocketReducer from './rockets/rocketsSlice';
import missionSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
