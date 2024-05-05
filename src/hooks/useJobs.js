import {
  getJobsFailure,
  getJobsLoading,
  getJobsSuccess,
  getMoreJobsFailure,
  getMoreJobsLoading,
  getMoreJobsSuccess,
} from "@redux/slices/jobSlice";
import { useDispatch } from "react-redux";
import { getJobListingData } from "src/service/getJobListingData";

const useJobs = () => {
  const dispatch = useDispatch();

  const handleGetJobs = async (bodyData) => {
    try {
      dispatch(getJobsLoading());
      const responseData = await getJobListingData(bodyData);
      dispatch(getJobsSuccess(responseData));
    } catch (error) {
      dispatch(getJobsFailure(error));
      console.error(error);
    }
  };

  const handleGetMoreJobs = async (bodyData) => {
    try {
      dispatch(getMoreJobsLoading());
      const responseData = await getJobListingData(bodyData);
      dispatch(getMoreJobsSuccess(responseData));
    } catch (error) {
      dispatch(getMoreJobsFailure(error));
      console.error(error);
    }
  };

  return {
    handleGetJobs,
    handleGetMoreJobs,
  };
};

export default useJobs;
