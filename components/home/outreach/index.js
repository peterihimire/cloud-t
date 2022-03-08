import React from "react";
import styles from "./styles.module.scss";

const outreach = () => {
  return (
    <section className={styles.outreach}>
      <h3>GLOBAL OUTREACH</h3>

      <h2>Impacting humanity through global outreach</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
        vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada nibh
        diam nulla senectus justo, donec etiam. Donec hendrerit consequat.
      </p>

      <div className={styles.outreachActions}>
        <a href="/" className="btn-small btn-primary">
          <i className="fal fa-play-circle"></i>
          <span>OUR STORY</span>
        </a>
        <a href="/" className="btn-small btn-transparent">
          FOR NON-PROFIT
        </a>
      </div>
    </section>
  );
};

export default outreach;
