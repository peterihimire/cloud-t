import React from "react";
import styles from "./styles.module.scss";
import ProfileGraph from "../../ui/graphs/profile";

const ExamResult = () => {
  return (
    <div className={styles.exam__result__wrapper}>
      <div className={styles.exam_pratice_header_cta}>
        <p>
          <img src="/images/Vector.png" alt="img" />
          <span>Back to Dashboard</span>
        </p>
        <img src="/images/Cloudtician Logo.png" alt="logo" />
      </div>
      <div className={styles.exam__result__display}>
        <h3>Practice Exams</h3>
        <div className={styles.exam__result__header}>
          <h1>Virtualization and High Availability</h1>
          <button>Retake Test</button>
        </div>
        <div className={styles.exam__result__body}>
          <div className={styles.exam__result__body__item_graph}>
            <div className={styles.graphbox}>
              <ProfileGraph hideFooter hideProfileInfo size="215" />
            </div>
            <p>
              You perfomed better than 2,016 people who took this practice test
            </p>
            <button className="btn-primary">BROWSE MORE TEST</button>
          </div>

          <div className={styles.exam__result__body__item_scores}>
            <h2>RESULT BREAKDOWN</h2>
            <div className={styles.exam__result__body__item_scores__item}>
              <p>
                <span>Virtualization Concepts and Theory</span> <span>15%</span>
              </p>
              <p>
                <span>Xen</span> <span>13%</span>
              </p>
              <p>
                <span>KVM</span> <span>1%</span>
              </p>
              <p>
                <span>Virtualization Solutions</span> <span>15%</span>
              </p>
              <p>
                <span>libvirt</span> <span>9%</span>
              </p>
              <p>
                <span>High Availability Concepts</span> <span>10%</span>
              </p>
              <p>
                <span>Load Balanced Clusters</span> <span>10%</span>
              </p>
              <p>
                <span>Failover Clusters</span> <span>2%</span>
              </p>
              <p>
                <span>High Availability in Enterprise Linux Distros</span>
                <span>15%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;
