import React from "react";
import styles from "./styles.module.scss";
import InquiryForm from "../form";

const Inquiry = () => {
  return (
    <div className={styles.inquiry}>
      <div className={styles.left}>
        <h3>WE ARE HERE TO HELP</h3>
        <h2>Need help with something?</h2>
        <p>
          Our amiable team is ready to show you how A Cloudtician can assist you
          in achieving your buniess's strategic cloud objectives.
        </p>

        <ul className={styles.helpList}>
          <li>
            <i className="far fa-check"></i>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam.{" "}
            </span>
          </li>
          <li>
            <i className="far fa-check"></i>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam.{" "}
            </span>
          </li>
          <li>
            <i className="far fa-check"></i>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam.{" "}
            </span>
          </li>
          <li>
            <i className="far fa-check"></i>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus justo, donec etiam.{" "}
            </span>
          </li>
        </ul>

        <div className={styles.helpAwards}>
          <img
            alt="talk award 2021"
            src="/images/2021-TALK-EMBLEM-768x960.png"
          />
          <img
            alt="best customer service award 2021"
            src="/images/best-customer-service-award.png"
          />
          <img
            alt="favorite customer service award 2021"
            src="/images/customer-service-award.png"
          />
          <img
            alt="customer satisfaction award 2021"
            src="/images/msp-customer-satisfaction-winner-300x244.png"
          />
        </div>
      </div>

      <div className={styles.right}>
        <InquiryForm />
      </div>
    </div>
  );
};

export default Inquiry;
