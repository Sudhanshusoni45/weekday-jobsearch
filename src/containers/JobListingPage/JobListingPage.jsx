import JobCard from "@components/JobListingPage/JobCard/JobCard";
import styles from "./JobListingPage.module.css";

const JobListingPage = () => {
  return (
    <div className={styles.Wrapper}>
      <JobCard />
    </div>
  );
};

export default JobListingPage;
