import React from "react";
import styles from "./styles.module.scss";
import Layout from "../../layouts/login";
import Input from "../../components/ui/customInput";

const Launch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.launch}>
        <img src="/images/Cloudtician Logo.svg" alt="" />
        <div className={styles.launchText}>
          <h1>Launching Soon</h1>
          <p>
            We are currently putting everything in order so as to provide you
            with a better learning experience that takes you beginner to super
            hero or better still takes you to a better stage in your career.
            Kindly provide your email address in the field below so as to get
            notified once we launch our website.
          </p>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <Input
                id="email"
                placeholder="Please enter your email address"
                name="email"
                required
              />
              <button className="btn-primary btn-small">NOTIFY ME</button>
            </div>
          </form>

          <p className={styles.emailList}>
            <span>1,019,212</span> email address already on the notification
            list
          </p>
        </div>
      </div>
    </div>
  );
};

export default Launch;

Launch.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
