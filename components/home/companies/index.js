import React from "react";
import styles from "./styles.module.scss";

const companies = () => {
  return (
    <section className={styles.companies}>
      <div className={styles.wrapper}>
        <h4>THE INDUSTRIES TRUST US</h4>
        <h2>Rated by best known companies</h2>

        <div className={styles.companyLogos}>
          <img alt="" src="/images/eventbrite-dark.svg" />
          <img alt="" src="/images/volks.svg" />
          <img alt="" src="/images/Logo-WomenWhoCode.svg" />
          <img alt="" src="/images/applelogo.svg" />
          <img alt="" src="/images/netflix.svg" />
        </div>
      </div>
    </section>
  );
};

export default companies;
