import React from "react";

import styles from "./styles.module.scss";
// import AccountButtons from "./billing-details/AccountButtons";
import AccountLeftGrid from "../account-left-grid";
import YourPlan from "./your-plans/YourPlan";

import BillingDetails from "./billing-details"

export default function MemeberShipBilling() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.flex}>
        <AccountLeftGrid
          {...{
            header: "Membership",
            content:
              "Expand your AWS cloud skills with our constantly-updated AWS training and online course library. Whether you’re just finding your footing, interested in AWS certification training.",
          }}
        />
        <YourPlan />
      </section>
      <section className={`${styles.flex} ${styles.gridMargin}`}>
        <AccountLeftGrid
          {...{
            header: "Billing",
            content:
              "Expand your AWS cloud skills with our constantly-updated AWS training and online course library. Whether you’re just finding your footing, interested in AWS certification training.",
          }}
        />
        <BillingDetails />
      </section>
      <section>{/* <AccountButtons /> */}</section>
    </section>
  );
}
