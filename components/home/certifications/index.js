import React from "react";
import styles from "./styles.module.scss";
import CertCard from "../../ui/certCard";

const certifications = ({lead, heading}) => {
  return (
    <section className={styles.certs}>
      <div className={styles.wrapper}>
        <h3>{lead}</h3>

        <h2>{heading}</h2>

        <div className={styles.certsWrapper}>
          <CertCard
            href="/"
            alt=""
            src="/images/certs.png"
            title="AWS Certification Training"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
          />
          <CertCard
            href="/"
            alt=""
            src="/images/certs.png"
            title="AWS Certification Training"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
          />
          <CertCard
            href="/"
            alt=""
            src="/images/certs.png"
            title="AWS Certification Training"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
          />
          <CertCard
            href="/"
            alt=""
            src="/images/certs.png"
            title="AWS Certification Training"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac vitae
      dui, sit semper orci eu tincidunt."
          />
        </div>
      </div>
    </section>
  );
};

export default certifications;
