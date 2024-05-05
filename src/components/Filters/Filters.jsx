import Select from "react-select";
import styles from "./Filters.module.css";
import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
const rolesOptions = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Fullstack" },
];

const experienceOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];
const locationOptions = [
  { value: "remote", label: "Remote" },
  { value: "delhi nc", label: "Delhi NCR" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
];
const salaryOptions = [
  { value: 0, label: "0L" },
  { value: 10, label: "10L" },
  { value: 20, label: "20L" },
  { value: 30, label: "30L" },
  { value: 40, label: "40L" },
  { value: 50, label: "50L" },
];

const Filters = ({ setFilters, filters }) => {
  const [companyName, setCompanyName] = useState(filters.companyName);
  // demonstration of debounce, ideally should be used when there is an api call but here it will prevent excessive re rendering
  const debouncedCompanyName = useDebounce(companyName, 300); // 300ms debounce time

  const handleInputChange = (value, action) => {
    setFilters((prev) => ({
      ...prev,
      [action.name]: value,
    }));
  };

  useEffect(() => {
    handleInputChange(debouncedCompanyName, { name: "companyName" });
  }, [debouncedCompanyName]);

  return (
    <div className={styles.Wrapper}>
      <Select
        defaultValue={[]}
        isMulti
        name="jobRole"
        options={rolesOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Roles"
        onChange={handleInputChange}
      />

      <Select
        defaultValue={[]}
        isMulti
        name="minExp"
        options={experienceOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Experience"
        onChange={handleInputChange}
      />
      <Select
        defaultValue={[]}
        isMulti
        name="location"
        options={locationOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Remote"
        onChange={handleInputChange}
      />
      <Select
        defaultValue={[]}
        isMulti
        name="minJdSalary"
        options={salaryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Minimum Base Pay Salary"
        onChange={handleInputChange}
      />

      <input
        className={styles.SearchCompanyInput}
        type="text"
        placeholder="Search Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </div>
  );
};

export default Filters;
