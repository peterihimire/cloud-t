import React from "react";
import styles from "./styles.module.scss";
import WebinarsList from "./webinarsList";
import Link from "next/link";

const webinarIndex = () => {
  return (
    <div className={styles.webinar}>
      <div className={styles.webinarLead}>
        <p className={styles.paraLead}>WATCH US LIVE</p>
        <h1>Video presentations and Workshop to help you skill up</h1>

        <div className={styles.countdown}>
          <p>Next Webinar starts in:</p>

          <div className={styles.countBoxes}>
            <div className={styles.countdownBox}>
              <div className={styles.countNumber}>00</div>
              <span>Days</span>
            </div>
            <div className={styles.countdownBox}>
              <div className={styles.countNumber}>08</div>
              <span>Hours</span>
            </div>
            <div className={styles.countdownBox}>
              <div className={styles.countNumber}>29</div>
              <span>Minutes</span>
            </div>
            <div className={styles.countdownBox}>
              <div className={styles.countNumber}>45</div>
              <span>Seconds</span>
            </div>
          </div>

          <div className={styles.regLink}>
            <Link href="/register">
              <a className="btn-primary btn-small">REGISTER NOW</a>
            </Link>
          </div>
        </div>
      </div>

      <WebinarsList />

      <div className={styles.outro}>
        <h3>The Cloudticians Community</h3>
        <p>
          Make learning a shared experience. Our forum is a great area to ask
          questions, give advice, and get answers from other clouditcians – as
          well as our instructors.
        </p>

        <div className={styles.exploreLink}>
          <a href="/" className="btn-primary btn-medium">
            EXPLORE COMMUNITY
          </a>
        </div>
      </div>
    </div>
  );
};

export default webinarIndex;
