import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const intuitveOverview = () => {
  return (
    <div className={styles.intuitive}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img alt="" src="/images/lightBulb.svg" />
        </div>

        <div className={styles.right}>
          <p className={styles.paraLead}>TRAIN YOURSELF MORE</p>
          <h2>
            Be intuitive about your growth, Learn about your current capability
          </h2>
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
          <Link href="/skills-assessment">
            <a className="btn-primary btn-small">ASSESS YOUR SKILL</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default intuitveOverview;
