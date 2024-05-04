import JobCard from "@components/JobListingPage/JobCard/JobCard";
import styles from "./JobListingPage.module.css";
import { useEffect } from "react";
import useJobs from "@hooks/useJobs";
import { useSelector } from "react-redux";

const JobListingPage = () => {
  const { handleGetJobs } = useJobs();
  const { jobsData, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    handleGetJobs();
  }, []);

  return (
    <div className={styles.Wrapper}>
      {jobsData?.jdList?.length ? (
        jobsData?.jdList.map(({ jdUid, ...props }) => (
          <JobCard key={jdUid} {...props} />
        ))
      ) : // if the the network request is not completed show loading
      loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>No jobs found...</div>
      )}
    </div>
  );
};

export default JobListingPage;
