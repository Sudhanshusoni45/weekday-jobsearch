import {
  getJobsFailure,
  getJobsLoading,
  getJobsSuccess,
} from "@redux/slices/jobSlice";
import { useDispatch } from "react-redux";
import { getJobListingData } from "src/service/getJobListingData";

const useJobs = () => {
  const dispatch = useDispatch();

  const handleGetJobs = async () => {
    try {
      dispatch(getJobsLoading());
      const responseData = await getJobListingData();
      dispatch(getJobsSuccess(responseData));
    } catch (error) {
      dispatch(getJobsFailure(error));
      console.error(error);
    }
  };

  return {
    handleGetJobs,
  };
};

export default useJobs;
