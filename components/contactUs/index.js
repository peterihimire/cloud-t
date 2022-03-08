import React from "react";
import styles from "./styles.module.scss";
import ContactForm from "./form";
import Outro from "../home/outro";

const ContactUsIndex = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.leadWrapper}>
        <p className={styles.paraLead}>SHOOT US A MESSAGE</p>
        <h1>Get In Touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
          vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
          nibh.
        </p>
      </div>

      <div className={styles.contactInfoBox}>
        <div className={styles.contactInfoLeft}>
          <h2>Contact Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus .
          </p>

          <ul className={styles.contactInfoSteps}>
            <li>
              <div className={styles.contactInfoIcon}>
                <img src="/images/contact-add.svg" alt="" />
              </div>
              <div className={styles.contactInfoStep}>
                <h3>Address</h3>
                <p>
                  Presidential Suite, White House Road, 1038477 Washington, U.SA
                </p>
              </div>
            </li>
            <li>
              <div className={styles.contactInfoIcon}>
                <img src="/images/contact-headphone.svg" alt="" />
              </div>
              <div className={styles.contactInfoStep}>
                <h3>Telephone Number</h3>
                <p>
                  +1-79474824629 (US Only)
                  <span>+1-45272637728 (International)</span>
                </p>
              </div>
            </li>
            <li>
              <div className={styles.contactInfoIcon}>
                <img src="/images/contact-email.svg" alt="" />
              </div>
              <div className={styles.contactInfoStep}>
                <h3>Email Address</h3>
                <p>contact@cloudticians.com</p>
              </div>
            </li>
            <li>
              <div className={styles.contactInfoIcon}>
                <img src="/images/contact-exclamation.svg" alt="" />
              </div>
              <div className={styles.contactInfoStep}>
                <h3>You can also write us a message 👉</h3>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.contactInfoRight}>
          <ContactForm />
        </div>
      </div>

      <Outro
        outroLink="/contact-sales"
        outroBtn="CONTACT SALES"
        outroText="Need something big for your business?"
      />
    </div>
  );
};

export default ContactUsIndex;
