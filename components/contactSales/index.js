import React from "react";
import styles from "./styles.module.scss";
import WorldMap from "./worldMap";
import ReactTooltip from "react-tooltip";
import Inquiry from "./inquiry";
import Faqs from "./faqs";

const contactSalesIndex = () => {
  return (
    <div className={styles.contactSales}>
      <section className={styles.lead}>
        <p className={styles.leadText}>WE ARE HERE TO HELP</p>
        <h1>Ready to take your business goal to a higher level?</h1>
        <p className={styles.leadPara}>
          Empower teams to unleash the cloud’s full potential with A
          Cloudticians upskilling and reskilling training and our powerful,
          hands-on learning platform.
        </p>

        <div className={styles.map}>
          <WorldMap />
          <ReactTooltip
            place="top"
            type="dark"
            effect="float"
            backgroundColor="#212121"
            id="map"
          >
            <div className={styles.mapOverlay}>
              <div className={styles.mapText}>
                <span>Lagos, Nigeria</span>
                <span>+234 (0) 7037441354</span>
              </div>
              <div className={styles.mapText}>
                <span>Accra, Ghana</span>
                <span>+233 (0) 242426206</span>
              </div>
              <div className={styles.mapText}>
                <span>Cape Town, SA</span>
                <span>+27 (0) 875510883</span>
              </div>
            </div>
          </ReactTooltip>
        </div>
      </section>

      <section className={styles.helpSection}>
        <Inquiry />
      </section>

      <section className={styles.faqs}>
        <Faqs />
      </section>
    </div>
  );
};

export default contactSalesIndex;
