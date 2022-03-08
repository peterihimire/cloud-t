import React from "react";
import AccountLeftGrid from "../account-left-grid";
import styles from "./styles.module.scss";
import AccountInfo from "./account-form/AccountInfo";
import OrganizationInfo from "./account-form/OrganizationInfo";
import AccountButtons from "./account-form/AccountButtons";

export default function AccountSettings() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.flex}>
        <AccountLeftGrid
          {...{
            header: "Account Information",
            content:
              "Expand your AWS cloud skills with our constantly-updated AWS training and online course library. Whether you’re just finding your footing, interested in AWS certification training.",
          }}
        />
        <AccountInfo />
      </section>
      <section className={`${styles.flex} ${styles.gridMargin}`}>
        <AccountLeftGrid
          {...{
            header: "Organisation Membership",
            content:
              "Expand your AWS cloud skills with our constantly-updated AWS training and online course library. Whether you’re just finding your footing, interested in AWS certification training.",
          }}
        />
        <OrganizationInfo />
      </section>
      <section>
        <AccountButtons />
      </section>
    </section>
  );
}
