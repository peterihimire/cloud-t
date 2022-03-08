import React from "react";
import styles from "./styles.module.scss";
import Work from "./work";
import Input from "../ui/customInput";

const Careers = () => {
  return (
    <div className={styles.careers}>
      <div className={styles.hero}>
        <p>HELP SHAPEN THE FUTURE</p>
        <h1>
          Are you Passionate and Driven by Success? We need you to join our team
        </h1>
        <a href="/" className="btn-primary btn-small">
          SEE JOBS OPENING
        </a>
      </div>

      <Work />

      <div className={styles.outro}>
        <h2>Can’t find your job description?</h2>

        <p>
          Sorry about that, probably we have that position occupied. Kindly
          provide your email address below and we will always send you recent
          openings whenever they are available
        </p>

        <form className={styles.outroForm}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />

          <div className={styles.submitBtn}>
            <button className="btn-primary btn-small">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;
