import React, { useState } from "react";
import styles from "./styles.module.scss";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState({
    platform: true,
    services: true,
    skill: true,
  });

  return (
    <div className={styles.filter}>
      <ul className={styles.filterList}>
        <li>
          <button
            onClick={() =>
              setOpenFilter({
                ...openFilter,
                platform: !openFilter.platform,
              })
            }
          >
            Platform <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.filterDrop} ${
              openFilter.platform ? styles.show : ""
            }`}
          >
            <label htmlFor="alibabaCloud">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="alibabaCloud" />
                <span>Alibaba Cloud</span>
              </div>
              <div className={styles.labelRight}>
                <span>64</span>
              </div>
            </label>

            <label htmlFor="aws">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="aws" />
                <span>AWS</span>
              </div>
              <div className={styles.labelRight}>
                <span>4</span>
              </div>
            </label>

            <label htmlFor="digitalOcean">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="digitalOcean" />
                <span>Digital Ocean</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="gcp">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="gcp" />
                <span>Google Cloud Platform</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="ibmCloud">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="ibmCloud" />
                <span>IBM Cloud</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="linux">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="linux" />
                <span>Linux</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="micazure">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="micazure" />
                <span>Microsoft Azure</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="365">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="365" />
                <span>Microsoft 365</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="sf">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="sf" />
                <span>Salesforce</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="sap">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="sap" />
                <span>SAP</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>
          </div>
        </li>

        <li>
          <button
            onClick={() =>
              setOpenFilter({
                ...openFilter,
                services: !openFilter.services,
              })
            }
          >
            Services <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.filterDrop} ${
              openFilter.services ? styles.show : ""
            }`}
          >
            <label htmlFor="bigdata">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="bigdata" />
                <span>Big Data</span>
              </div>
              <div className={styles.labelRight}>
                <span>9</span>
              </div>
            </label>

            <label htmlFor="bizMgt">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="bizMgt" />
                <span>Business Management</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="cloudMig">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="cloudMig" />
                <span>Cloud migration</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="cloudSec">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="cloudSec" />
                <span>Cloud Security</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="codeInf">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="codeInf" />
                <span>Code Infrastructure</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="containers">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="containers" />
                <span>Containers</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="dand">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="dand" />
                <span>DevOps & DevSecOps</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="machine">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="machine" />
                <span>Machine Learning</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="serverless">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="serverless" />
                <span>Serverless</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="uiux">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="uiux" />
                <span>UI/UX Design</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>

            <label htmlFor="vunMgt">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="vunMgt" />
                <span>Vulnerability Management</span>
              </div>
              <div className={styles.labelRight}>
                <span>12</span>
              </div>
            </label>
          </div>
        </li>

        <li>
          <button
            onClick={() =>
              setOpenFilter({
                ...openFilter,
                skill: !openFilter.skill,
              })
            }
          >
            Skill Level <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.filterDrop} ${
              openFilter.skill ? styles.show : ""
            }`}
          >
            <label htmlFor="advanced">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="advanced" />
                <span>Advanced</span>
              </div>
              <div className={styles.labelRight}>
                <span>64</span>
              </div>
            </label>

            <label htmlFor="intermediate">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="intermediate" />
                <span>Intermediate</span>
              </div>
              <div className={styles.labelRight}>
                <span>4</span>
              </div>
            </label>

            <label htmlFor="beginner">
              <div className={styles.labelLeft}>
                <input type="checkbox" id="beginner" />
                <span>Beginner</span>
              </div>
              <div className={styles.labelRight}>
                <span>9</span>
              </div>
            </label>
          </div>
        </li>
      </ul>

      <div className={styles.clearBtn}>
        <button className="btn-transparent">CLEAR FILTER</button>
      </div>
    </div>
  );
};

export default Filter;
