import React from "react";
import styles from "./styles.module.scss";

const intuitiveAssessment = () => {
  return (
    <div className={styles.intuitve}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
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
        </div>

        <div className={styles.right}>
          <img alt="" src="/images/lightBulb.svg" />
        </div>
      </div>
    </div>
  );
};

export default intuitiveAssessment;
