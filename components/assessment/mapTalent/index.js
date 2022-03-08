import React from "react";
import styles from "./styles.module.scss";
import Video from "../../../components/ui/customVideo";

const mapTalent = () => {
  return (
    <div className={styles.mapTalent}>
      <div className={styles.lead}>
        <p>GROW YOUR COMPANY BY GROWING YOUR ASSETS</p>
        <h2>Quickly and simply map your company's cloud talent.</h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Video wrapperClass={styles.video} />
        </div>

        <div className={styles.right}>
          <ul>
            <li data-step="1">
              <div className={styles.step}>
                <h3>Choose Your Platform</h3>
                <p>We offer competency analysis for both AWS and Azure</p>
              </div>
            </li>

            <li data-step="2">
              <div className={styles.step}>
                <h3>Invite Participants</h3>
                <p>
                  You can add anyone you like (not just people with an A
                  Cloudticians license), as well as create groups to get more
                  granular results by team or location. <br /> <br /> Add emails
                  individually by uploading a CSV file.
                </p>
              </div>
            </li>

            <li data-step="3">
              <div className={styles.step}>
                <h3>Await Result</h3>
                <p>
                  All is set, result will arrive in your dashboard on end 10
                  minutes after assessment ends.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default mapTalent;
