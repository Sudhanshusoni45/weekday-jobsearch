import JobCard from "@components/JobListingPage/JobCard/JobCard";
import styles from "./JobListingPage.module.css";
import { useEffect, useState } from "react";
import useJobs from "@hooks/useJobs";
import { useSelector } from "react-redux";
import LoaderWrapper from "@components/LoaderWrapper";
import useOnScreen from "@hooks/useOnScreen";
import { Loader } from "@components/LoaderWrapper/LoaderWrapper";

const JobListingPage = () => {
  const { handleGetJobs, handleGetMoreJobs } = useJobs();
  const { jobsData, loading } = useSelector((state) => state.jobs);
  const { measureRef, isIntersecting } = useOnScreen();
  // have kept limit as most common screen size would fit 3 cards in a column, 3*3= 9
  const [bodyData, setBodyData] = useState({
    limit: 9,
    offset: 0,
  });

  useEffect(() => {
    handleGetJobs({
      limit: 9,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    setBodyData((prev) => ({
      ...prev,
      offset: prev.offset + 9,
    }));

    if (isIntersecting) {
      handleGetMoreJobs(bodyData);
    }
  }, [isIntersecting]);

  // if the the network request is not completed show loading
  return loading ? (
    <LoaderWrapper />
  ) : (
    <>
      <div className={styles.Wrapper}>
        {jobsData?.jdList?.length ? (
          jobsData?.jdList.map(({ jdUid, ...props }) => (
            <JobCard key={jdUid} {...props} />
          ))
        ) : (
          <div>No jobs found...</div>
        )}
      </div>
      <div ref={measureRef} className={styles.Loader}>
        <Loader />
      </div>
    </>
  );
};

export default JobListingPage;
