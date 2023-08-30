import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const Mission = async () => {
  const resolve = await fetch(url);
  const mission = await resolve.json();
  return mission;
};

const getMission = createAsyncThunk('missions/getMission', Mission);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {
    missionReserve: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      state.missions = newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMission.pending, (state) => {
      state.isLoading = true;
    }).addCase(getMission.fulfilled, (state, action) => {
      state.isLoading = false;
      const realMission = [];
      action.payload.map((mission) => realMission.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      state.missions = realMission;
      state.error = '';
    }).addCase(getMission.rejected, (state, action) => {
      state.isLoading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export const { missionReserve } = missionSlice.actions;
export { getMission };
export default missionSlice.reducer;
