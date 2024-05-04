import { GET_JOB_LISTING_URL } from "src/constants";
import axios from "axios";

export const getJobListingData = () => {
  return axios.get(GET_JOB_LISTING_URL);
};
