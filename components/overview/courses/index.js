import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const coursesOverview = ({ text }) => {
  return (
    <div className={styles.courses}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img alt="" src="/images/Group 11451.png" />
        </div>

        <div className={styles.right}>
          <p className={styles.paraLead}>TRAIN YOURSELF MORE</p>
          <h2>
            Over 20,000+ courses taught by industry experts to improve you
          </h2>
          <p>{text}</p>
          <Link href="/browse">
            <a className="btn-primary btn-small">BROWSE COURSES</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default coursesOverview;
