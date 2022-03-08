import React from "react";
import styles from "./styles.module.scss";

const Collapse = () => {
  return (
    <>
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
        <ul
          className={`${styles.filterDrop} ${
            openFilter.platform ? styles.show : ""
          }`}
        >
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="alibabaCloud" />
              <label htmlFor="alibabaCloud">Alibaba Cloud</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="alibabaCloud">64</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="aws" />
              <label htmlFor="aws">AWS</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="aws">4</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="digitalOcean" />
              <label htmlFor="digitalOcean">Digital Ocean</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="digitalOcean">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="gcp" />
              <label htmlFor="gcp">Google Cloud Platform</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="gcp">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="ibmCloud" />
              <label htmlFor="ibmCloud">IBM Cloud</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="ibmCloud">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="linux" />
              <label htmlFor="linux">Linux</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="linux">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="azure" />
              <label htmlFor="azure">Microsoft Azure</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="azure">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="365" />
              <label htmlFor="365">Microsoft 365</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="365">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="salesforce" />
              <label htmlFor="salesforce">Salesforce</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="salesforce">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="sap" />
              <label htmlFor="sap">SAP</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="sap">12</label>
            </div>
          </li>
        </ul>
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
        <ul
          className={`${styles.filterDrop} ${
            openFilter.services ? styles.show : ""
          }`}
        >
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="bigData" />
              <label htmlFor="bigData">Big Data</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="bigData">9</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="bizMgt" />
              <label htmlFor="bizMgt">Business Management</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="bizMgt">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="cloudMigration" />
              <label htmlFor="cloudMigration">Cloud migration</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="cloudMigration">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="cloudSecurity" />
              <label htmlFor="cloudSecurity">Cloud Security</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="cloudSecurity">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="cloudInf" />
              <label htmlFor="cloudInf">Code Infrastructure</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="cloudInf">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="serverless" />
              <label htmlFor="serverless">Serverless</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="serverless">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="containers" />
              <label htmlFor="containers">Containers</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="containers">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="devops" />
              <label htmlFor="devops">DevOps & DevSecOps</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="devops">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="machine" />
              <label htmlFor="machine">Machine Learning</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="machine">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="ui" />
              <label htmlFor="ui">UI/UX Design</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="ui">12</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="vulnerability" />
              <label htmlFor="vulnerability">Vulnerability Management</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="vulnerability">12</label>
            </div>
          </li>
        </ul>
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
        <ul
          className={`${styles.filterDrop} ${
            openFilter.skill ? styles.show : ""
          }`}
        >
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="advanced" />
              <label htmlFor="advanced">Advanced</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="advanced">64</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="intermediate" />
              <label htmlFor="intermediate">Intermediate</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="intermediate">4</label>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <input type="checkbox" id="beginner" />
              <label htmlFor="beginner">Beginner</label>
            </div>
            <div className={styles.right}>
              <label htmlFor="beginner">9</label>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Collapse;
