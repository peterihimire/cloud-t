import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";

const CareerForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <Input
          type="text"
          required
          labelText="Full Name"
          id="fullName"
          name="full_name"
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="email"
          required
          labelText="Email"
          id="email"
          name="email"
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="file"
          required
          labelText="Resume"
          id="resume"
          name="resume"
        />
        <span className={styles.inputInfo}>
          PDF or DOC File only (Max. Upload size is 2MB)
        </span>
      </div>

      <div className={styles.formGroup}>
        <Textarea labelText="Tell us about yourself" id="about" name="about" />
      </div>

      <div className={styles.formBtn}>
        <button className="btn-primary btn-block">SUBMIT APPLICATION</button>
      </div>
    </form>
  );
};

export default CareerForm;
