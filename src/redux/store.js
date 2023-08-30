import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missionReducer,
  },
});

export default store;
