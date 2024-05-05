import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    loading: false,
    moreJobsLoading: false,
    jobsData: [],
  },
  reducers: {
    // getjobs
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
    // get more jobs
    getMoreJobsLoading: (state) => {
      state.moreJobsLoading = true;
    },
    getMoreJobsSuccess: (state, action) => {
      state.moreJobsLoading = false;
      state.jobsData = {
        ...state.jobsData,
        jdList: [...state.jobsData.jdList, ...action.payload.jdList],
        totalCount: action.payload.totalCount,
      };
    },
    getMoreJobsFailure: (state) => {
      state.moreJobsLoading = false;
    },
  },
});

export default jobsSlice.reducer;
export const {
  getJobsLoading,
  getJobsSuccess,
  getJobsFailure,
  getMoreJobsLoading,
  getMoreJobsSuccess,
  getMoreJobsFailure,
} = jobsSlice.actions;
