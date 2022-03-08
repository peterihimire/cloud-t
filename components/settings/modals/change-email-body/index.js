import React from "react";
import Input from "../../../ui/customInput";
import styles from "./styles.module.scss";

export default function changeEmailBody() {
  return (
    <aside className={styles.formGroup}>
      <Input labelText="Email" type="text" id="New Email" name="New Email" />
      <div className={styles.mt}>
        <Input
          labelText="Confirm New Email"
          type="text"
          id="Confirm New Email"
          name="Confirm New Email"
        />
      </div>
    </aside>
  );
}
