import JobCard from "@components/JobListingPage/JobCard/JobCard";
import styles from "./JobListingPage.module.css";
import { useEffect } from "react";
import useJobs from "@hooks/useJobs";
import { useSelector } from "react-redux";

const JobListingPage = () => {
  const { handleGetJobs } = useJobs();
  const data = useSelector((state) => state.jobs);
  console.log("data:", data);

  useEffect(() => {
    handleGetJobs();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <JobCard />
    </div>
  );
};

export default JobListingPage;
