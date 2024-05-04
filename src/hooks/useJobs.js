import {
  getJobsFailure,
  getJobsLoading,
  getJobsSuccess,
} from "@redux/slices/jobs";
import { useDispatch } from "react-redux";
import { getJobListingData } from "src/service/getJobListingData";

const useJobs = () => {
  const dispatch = useDispatch();

  const handleGetJobs = async () => {
    try {
      dispatch(getJobsLoading());
      const response = await getJobListingData();
      dispatch(getJobsSuccess(response.data));
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
