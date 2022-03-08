import React from "react";
import styles from "./styles.module.scss";

export default function AccountButtons() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.buttonGroup}>
        <div className={styles.flexSpaceNone}></div>
        <div className={styles.flexSpace}>
          <button
            className="btn-primary btn-small"
            style={{ marginRight: "1em" }}
          >
            Save Changes
          </button>
          <button className="btn-transparent btn-small">Discard Changes</button>
        </div>
      </div>
    </section>
  );
}
