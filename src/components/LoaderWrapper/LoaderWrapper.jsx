import styles from "./LoaderWrapper.module.css";

export const Loader = ({ loader, isDeleteButton, className }) => {
  return (
    <div
      className={
        className
          ? `${className} ${styles.LoaderButton}`
          : loader === "main"
          ? styles.LoaderMain
          : isDeleteButton
          ? `${styles.LoaderButton} ${styles.LoaderRedButton}`
          : styles.LoaderButton
      }
    ></div>
  );
};

const LoaderWrapper = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <Loader />
    </div>
  );
};

export default LoaderWrapper;
