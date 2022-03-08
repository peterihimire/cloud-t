import React from "react";

import AccountLeftGrid from "../account-left-grid";
import NotificationToggle from "./notification-toggle";
import styles from "./styles.module.scss";

export default function Notification() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.flex}>
        <AccountLeftGrid
          {...{
            header: "Notification Setting",
            content:
              "Expand your AWS cloud skills with our constantly-updated AWS training and online course library. Whether you’re just finding your footing, interested in AWS certification training.",
          }}
        />

        <NotificationToggle />
      </div>
    </section>
  );
}
