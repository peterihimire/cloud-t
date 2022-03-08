import React from "react";
import styles from "./styles.module.scss";
import Video from "../../ui/customVideo";

const riskFree = () => {
  return (
    <div className={styles.riskFree}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.paraLead}>IMPROVE WITH THE RIGHT MIND</p>
          <h2>Try our risk-free cloud sandboxes for AWS, GCP and Azure</h2>
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

          <a href="/" className="btn-primary btn-medium">
            EXPLORE PLAYGROUND
          </a>
        </div>

        <div className={styles.right}>
          <Video wrapperClass={styles.video} />
        </div>
      </div>
    </div>
  );
};

export default riskFree;
