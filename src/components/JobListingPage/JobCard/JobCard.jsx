import { Button } from "@mui/material";
import styles from "./JobCard.module.css";
const JobCard = ({
  companyName,
  jobDetailsFromCompany,
  jobRole,
  location,
  logoUrl,
  salaryCurrencyCode,
}) => {
  return (
    <div className={styles.Wrapper}>
      <div>Posted 10 days ago</div>
      <div>
        <img src={logoUrl} alt={companyName} />
        <div className={styles.CompanyInfoWrapper}>
          <span>{companyName}</span>
          <span>{jobRole}</span>
          <span>{location}</span>
        </div>
      </div>
      <span>Estimated Salary: </span>
      <div>
        <span>About Company</span>
        <span>About us</span>
        <p>{jobDetailsFromCompany}</p>
      </div>
      <div>
        <span>Minimun Experience </span>
        <span>2 years</span>
      </div>
      <div>
        <Button variant="contained">⚡ Easy Apply</Button>
      </div>
    </div>
  );
};

export default JobCard;
