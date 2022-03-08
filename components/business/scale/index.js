import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const scaleUp = () => {
  return (
    <div className={styles.scale}>
      <div className={styles.left}>
        <p className={styles.paraLead}>TOGETHER WE CAN DO MORE</p>
        <h2>We are helping teams to scale up</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
          vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
          nibh diam nulla senectus justo, donec etiam. Donec hendrerit
          consequat.
        </p>
        <Link href="/case-studies">
          <a className="btn-primary btn-medium">SEE ALL CASE STUDIES</a>
        </Link>
      </div>

      <div className={styles.right}>
        <img alt="" src="/images/rubicube.svg" />
      </div>
    </div>
  );
};

export default scaleUp;
