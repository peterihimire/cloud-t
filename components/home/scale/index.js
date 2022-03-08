import React from "react";
import styles from "./styles.module.scss";

const scale = () => {
  return (
    <div className={styles.scale}>
      <div className={styles.lead}>
        <p>THEY SCALE WELL</p>
        <h2>
          How Individuals and Organizations are using the skills assessment
        </h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src="/images/brain 1.svg" alt="" loading="lazy" />
          <h3>Understanding Skillset</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus .
          </p>
        </div>

        <div className={styles.card}>
          <img src="/images/suitcase 2.svg" alt="" loading="lazy" />
          <h3>Hire Right People</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus .
          </p>
        </div>

        <div className={styles.card}>
          <img src="/images/roi.svg" alt="" loading="lazy" />
          <h3>Return on Investment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus .
          </p>
        </div>
      </div>
    </div>
  );
};

export default scale;
