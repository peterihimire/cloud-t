import React from "react";
import styles from "./styles.module.scss";
import DetailsHeader from "../billing-header/DetailsHeader";

const renderHeader = (text) => (
  <div className={styles.headerText}>
    <span>{text}</span>
  </div>
);

const renderSubText = (text) => (
  <div className={styles.subText}>
    <span>{text}</span>
  </div>
);

export default function YourPlan() {
  return (
    <section className={styles.wrapper}>
      <DetailsHeader {...{ content: "Your Plan" }} />

      <section className={styles.renewWrapper}>
        <div className={styles.text1}>
          <span>Your membership has been deactivated</span>
        </div>
        <div className={styles.text2}>
          <span>
            There was an issue with your payment. Please proceed to checkout
            with a valid payment method to renew your membership.
          </span>
        </div>

        <div className={styles.button}>
          <button
            className="btn-primary btn-medium"
            style={{ marginRight: "1em", borderRadius: "3px", height: '48px' }}
          >
            Renew your membership
          </button>
        </div>
      </section>

      <section className={styles.changeWrapper}>
        <div className={styles.flex1}>
          <div className={styles.marginRight}>
            {renderHeader("Current Plan")}
            {renderSubText("Personal Basic")}
          </div>

          <div>
            {renderHeader("Billing Cycle")}
            {renderSubText("$35 Billed Monthly")}
            <div className={styles.nextBText}>
              <span>No next billing date for this plan</span>
            </div>
          </div>
        </div>

        <div className={styles.flex2}>
          <button
            className="btn-primary btn-small"
            style={{
              marginRight: "1em",
              borderRadius: "3px",
              textTransform: "uppercase",
              height: '48px'
            }}
          >
            change plan
          </button>

          <div className={styles.taxRateText}>
            <span>*Taxes may apply</span>
          </div>
        </div>
      </section>
    </section>
  );
}
