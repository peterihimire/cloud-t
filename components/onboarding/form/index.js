import React from "react";
import Input from "../../ui/customInput";
import styles from "./styles.module.scss";

const Form = ({ clicked, step }) => {
  return (
    <div className={styles.stepperForm}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <>
            <div className={styles.formGroup}>
              <Input
                labelText="Your Display Name"
                type="text"
                id="display-name"
                name="name"
                placeholder="Enter your role"
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                labelText="Profile Link"
                type="text"
                id="profile-link"
                name="name"
                placeholder="cloudticians.com/person/kenneth-eg"
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                labelText="Your Organisation"
                type="text"
                id="organization"
                name=""
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                labelText="Job Title"
                type="text"
                id="job-title"
                name="name"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={styles.formGroup}>
              <Input
                labelText="I am a"
                type="text"
                id="role"
                name="name"
                placeholder="Select Role"
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                labelText="I want to learn"
                type="text"
                id="course"
                name="name"
                placeholder="Select Course"
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                labelText="For atleast"
                type="text"
                id="period"
                name=""
                placeholder="2 hours everyday"
              />
            </div>
          </>
        )}

        <div className={styles.formBtn}>
          <button
            className="btn-primary btn-medium first-button"
            onClick={clicked}
          >
            CONTINUE
          </button>
          {step === 2 && (
            <button className="btn-transparent btn-medium">SKIP STEP</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
