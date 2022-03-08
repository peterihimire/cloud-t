import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";

const contactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <Input
            labelText="Full Name"
            required
            id="fullName"
            name="full_name"
            type="text"
          />
        </div>

        <div className={styles.formGroup}>
          <Input
            labelText="Email Address"
            required
            id="email"
            name="email"
            type="email"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <Input
          labelText="Subject"
          required
          id="subject"
          name="subject"
          type="text"
        />
      </div>

      <div className={styles.formGroup}>
        <Textarea labelText="Message" required id="message" name="message" />
      </div>

      <div className={styles.submitBtn}>
        <button className="btn-primary btn-small">SEND MESSAGE</button>
      </div>
    </form>
  );
};

export default contactForm;
