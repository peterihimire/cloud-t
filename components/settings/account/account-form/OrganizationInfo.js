import React from "react";
import Input from "../../../ui/customInput";
import styles from "./styles.module.scss";

export default function OrganizationInfo() {
  return (
    <section className={styles.wrapper}>
      <aside>
        <Input
          labelText="Organization ID"
          type="text"
          name="Organization ID"
        />
        <div className={styles.orgTextWrapper}>
          <div>
            <span className={styles.dot}></span>
          </div>
          <div>
            <span className={styles.orgText}>
              A 32-Digit alphanumeric key from your registered organization
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}
