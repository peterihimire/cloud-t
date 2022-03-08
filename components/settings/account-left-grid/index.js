import React from "react";
import styles from "./styles.module.scss";

export default function AccountLeftGrid({ header, content }) {
  return (
    <section className={styles.wrapper}>
      {content && (
        <aside className={styles.flexFill}>
          {header && (
            <div className={styles.header}>
              <span>{header}</span>
            </div>
          )}
          <div className={styles.content}>{content}</div>
        </aside>
      )}
    </section>
  );
}
