import React from "react";
import Form from "./form";
import styles from "./styles.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authLeft}>
        <div className={styles.authInner}>
          <h1>
            Improve on your skillset and change the world with your progress
          </h1>
        </div>
      </div>
      <div className={styles.authRight}>
        <Form />
      </div>
    </div>
  );
};

export default LoginForm;
