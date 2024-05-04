import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: false,
    jobsData: [],
  },
  reducers: {
    getJobsLoading: (state) => {
      state.loading = true;
    },
    getJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobsData = action.payload;
    },
    getJobsFailure: (state) => {
      state.loading = false;
    },
  },
});

export default jobsSlice.reducer;
export const { getJobsLoading, getJobsSuccess, getJobsFailure } =
  jobsSlice.actions;
