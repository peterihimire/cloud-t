import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const learnOverview = () => {
  return (
    <div className={styles.learn}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.paraLead}>YOU’RE NOT ALONE</p>
          <h2>Learn By Doing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Id urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
            viverra malesuada nibh diam nulla senectus justo, donec etiam. Donec
            hendrerit consequat.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Id urna, ac vitae dui, sit semper orci eu
            tincidunt. Sagittis viverra malesuada nibh diam nulla senectus
            justo, donec etiam. Donec hendrerit consequat.
          </p>
          <Link href="/hands-on-learning">
            <a className="btn-primary btn-small">EXPLORE LAB</a>
          </Link>
        </div>

        <div className={styles.right}>
          <img alt="" src="/images/pressingPc.svg" />
        </div>
      </div>
    </div>
  );
};

export default learnOverview;
