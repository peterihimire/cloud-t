import React from "react";
import styles from "./styles.module.scss";
import Requirements from "./requirements";
import OtherJobs from "./otherJobs";

const CareerDetailsIndex = () => {
  return (
    <div className={styles.careerDetails}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1>Snr. Product Designer</h1>

          <div className={styles.jobTags}>
            <span>
              <i className="fal fa-clock"></i> Contract
            </span>

            <span>
              <i className="fal fa-map-marker-alt"></i> Temporarily Remote
            </span>
          </div>

          <p className={styles.leadText}>
            This candidate will have a strong ability to take ideas and create
            an attractive product based on customer needs, building a modern-day
            UI. This candidate should feel comfortable creating prototypes and
            communicating with internal teams in order to deliver wholesome
            solutions. Must be highly skilled in UI/UX tools, graphics design
            would be a plus.
          </p>
        </div>

        <div className={styles.right}>
          <img alt="" src="/images/career-deatils-shape.svg" />
        </div>
      </div>

      <Requirements />

      <OtherJobs />
    </div>
  );
};

export default CareerDetailsIndex;
