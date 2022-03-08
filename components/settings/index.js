import React from "react";
import CustomTabs from "./../ui/tabs";
import AccountSettings from "./account";
import styles from "./index.module.scss";
import { settingsTabData } from "./settingsTabData";
import Notification from "./notification";
import MemeberShipBilling from "./membership-billing";

export default function Settings() {
  const [tabIndex, setTabIndex] = React.useState(1);

  const tabIndexHandler = (index) => setTabIndex(index);

  return (
    <section className={styles.settings}>
      <aside className={styles.settingsText}>
        <span>Account Settings</span>
      </aside>
      <CustomTabs
        activeTab={tabIndex}
        clicked={(index) => tabIndexHandler(index)}
        headers={settingsTabData}
        dot
      >
        <div className={styles.tabContent}>
          {tabIndex === 1 && <AccountSettings />}
          {tabIndex === 2 && <Notification />}
          {tabIndex === 3 && <MemeberShipBilling />}
        </div>
      </CustomTabs>
    </section>
  );
}
