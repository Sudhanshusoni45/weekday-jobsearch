import { Button } from "@mui/material";
import styles from "./JobCard.module.css";
import profilePic from "../../../assets/profilePic.png";

const JobCard = ({
  companyName,
  jobDetailsFromCompany,
  jobRole,
  location,
  logoUrl,
  minExp,
  minJdSalary,
  maxJdSalary,
  // salaryCurrencyCode,
}) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.PostedDateWrapper}>
        <span className={styles.PostedText}>⏳ Posted a month ago</span>
      </div>
      <div className={styles.CompanyLogoWrapper}>
        <img className={styles.CompanyLogo} src={logoUrl} alt={companyName} />
        <div className={styles.CompanyInfoWrapper}>
          <span className={styles.CompanyName}>{companyName}</span>
          <span>{jobRole}</span>
          <span>{location}</span>
        </div>
      </div>
      <span>
        Estimated Salary: ₹{minJdSalary ?? "NA"} - {maxJdSalary ?? "NA"} LPA ✅
      </span>
      <div className={styles.AboutWrapper}>
        <span className={styles.AboutCompany}>About Company:</span>
        <span className={styles.AboutUs}>About us</span>
        <div className={styles.JobDetailsFromCompany}>
          {jobDetailsFromCompany}
        </div>
      </div>
      <div className={styles.ViewJobWrapper}>
        <span className={styles.ViewJob}> View Job</span>
      </div>
      <div className={styles.ExperienceWrapper}>
        <span className={styles.MinExperience}>Minimun Experience </span>
        <span>
          {minExp ?? "NA"} {minExp ? "years" : ""}
        </span>
      </div>
      <div className={styles.BtnWrapper}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primary-green)",
            padding: ".8rem 1.8rem",
            fontSize: "1.6rem",
            fontWeight: "500",
            textTransform: "none",
            color: "var(--pure-black)",
            "&:hover": {
              backgroundColor: "var(--primary-green)", // same as normal state
              color: "var(--pure-black)", // same as normal state
            },
          }}
        >
          ⚡ Easy Apply
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primary-violet)",
            padding: ".8rem 1.8rem",
            fontSize: "1.6rem",
            fontWeight: "500",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--primary-violet)", // same as normal state
            },
          }}
        >
          <img
            className={styles.ProfilePic}
            src={profilePic}
            alt="profilePic"
          />
          Unlock referral asks
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
