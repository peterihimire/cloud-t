import React from "react";
import styles from "./styles.module.scss";

const OnboardingStepper = ({ children, step }) => {
  return (
    <div className={styles.stepper}>
      <ul className={styles.stepperHead}>
        <li
          className={`${styles.stepperHeadItem} ${
            step >= 1 ? styles.active : ""
          }`}
        >
          <div>1</div>
          <span className={styles.stepperTitle}>Basic Information</span>
        </li>

        <li
          className={`${styles.stepperHeadItem} ${
            step >= 2 ? styles.active : ""
          }`}
        >
          <div>2</div>
          <span className={styles.stepperTitle}>Set Goals</span>
        </li>

        <li
          className={`${styles.stepperHeadItem} ${
            step === 3 ? styles.active : ""
          }`}
        >
          <div>3</div>
          <span className={styles.stepperTitle}>Create Experience</span>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default OnboardingStepper;
