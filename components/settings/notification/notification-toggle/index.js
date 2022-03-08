import React from "react";
import { notificationData } from "../notificationData";
import CustomSwitch from "./../../../ui/switch/index";
import styles from "./styles.module.scss";

export default function NotificationToggle() {
  const notification = notificationData({ onClick: "" });

  return (
    <section className={styles.wrapper}>
      <section className={styles.notificationHeader}>
        <div className={styles.itemsLeft}>Toggle All</div>
        <div
          className={styles.itemsRight}
          style={{ display: "flex", alignSelf: "center", padding: "1.2em 0" }}
        >
          <CustomSwitch id="monthly" defaultChecked={true} />
        </div>
      </section>
      <div className={styles.subWrapperBorder}>
        {notification?.map(({ id, content }) => {
          return (
            <section key={id} className={styles.notificationItems}>
              <div className={styles.itemsLeft}>{content}</div>
              <div className={styles.itemsRight}>
                <CustomSwitch id={id} defaultChecked={true} />
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
