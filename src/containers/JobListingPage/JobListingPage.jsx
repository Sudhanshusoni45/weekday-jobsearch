import JobCard from "@components/JobListingPage/JobCard/JobCard";
import styles from "./JobListingPage.module.css";
import { useEffect, useState } from "react";
import useJobs from "@hooks/useJobs";
import { useSelector } from "react-redux";
import LoaderWrapper from "@components/LoaderWrapper";
import useOnScreen from "@hooks/useOnScreen";
import { Loader } from "@components/LoaderWrapper/LoaderWrapper";
import Filters from "@components/Filters/Filters";

const JobListingPage = () => {
  const { handleGetJobs, handleGetMoreJobs } = useJobs();
  const { jobsData, loading } = useSelector((state) => state.jobs);
  const { measureRef, isIntersecting } = useOnScreen();

  const [filters, setFilters] = useState({
    roles: [],
    numberOfEmployees: [],
    experience: [],
    remote: [],
    salary: [],
    companyName: "",
  });

  const [filteredData, setFilteredData] = useState([]);
  console.log("filters:", filters);
  console.log("filteredData:", filteredData);
  // have kept limit as most common screen size would fit 3 cards in a column, 3*3= 9
  const [bodyData, setBodyData] = useState({
    limit: 9,
    offset: 0,
  });

  const JobCardListing = () => {
    if (filteredData) {
      return (
        <>
          {filteredData.map(({ jdUid, ...props }) => (
            <JobCard key={jdUid} {...props} />
          ))}
        </>
      );
    } else {
      return (
        <>
          {jobsData?.jdList?.length ? (
            jobsData?.jdList.map(({ jdUid, ...props }) => (
              <JobCard key={jdUid} {...props} />
            ))
          ) : (
            <div>No jobs found...</div>
          )}
        </>
      );
    }
  };

  useEffect(() => {
    let filtered = jobsData.jdList;

    Object.keys(filters).forEach((filterKey) => {
      const filterValues = filters[filterKey];
      if (filterValues.length > 0) {
        if (filterKey === "minJdSalary") {
          // Special case for salary: keep jobs with salary >= filter value
          filtered = filtered.filter(
            (job) => job[filterKey] >= filterValues[0].value
          );
        } else if (filterKey !== "companyName") {
          // General case for other filters
          filtered = filtered.filter((job) =>
            filterValues.some((filter) => filter.value === job[filterKey])
          );
        }
      }
    });

    // Special handling for companyName as it's a string and not an array of options
    if (filters.companyName !== "") {
      filtered = filtered.filter((job) =>
        job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [filters, jobsData]);

  // get initial set of 9 jobs
  useEffect(() => {
    handleGetJobs({
      limit: 9,
      offset: 0,
    });
  }, []);

  // get more jobs on scroll
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
    <div className={styles.Wrapper}>
      <div className={styles.FilterWrapper}>
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      <div className={styles.JobCardsWrapper}>
        <JobCardListing />
      </div>
      <div ref={measureRef} className={styles.Loader}>
        <Loader />
      </div>
    </div>
  );
};

export default JobListingPage;
