import Select from "react-select";
import styles from "./Filters.module.css";

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const Filters = () => {
  return (
    <div className={styles.Wrapper}>
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Roles"
      />
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Number of Employees"
      />
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Experience"
      />
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Remote"
      />
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Minimum Base Pay Salary"
      />

      <input
        className={styles.SearchCompanyInput}
        type="text"
        placeholder="Search Company Name"
      />
    </div>
  );
};

export default Filters;
