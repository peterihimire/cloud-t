import React from "react";
import styles from "./styles.module.scss";

const GrowSkills = () => {
  return (
    <div className={styles.grow}>
      <div className={styles.wrapper}>
        <h2>Grow Your Skills</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img alt="" loading="lazy" src="/images/cloud-computing 1.svg" />
            </div>
            <div className={styles.cardBody}>
              <h3>CLOUD PLAYGROUND</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                amet, mauris sit sapien at.
              </p>
              <a href="/">TRY PLAYGROUND NOW</a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img alt="" loading="lazy" src="/images/bulb brain 2.svg" />
            </div>
            <div className={styles.cardBody}>
              <h3>HANDS-ON LAB</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                amet, mauris sit sapien at.
              </p>
              <a href="/">VIEW HANDS-ON COURSES</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowSkills;
