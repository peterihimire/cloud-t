import React from "react";
import styles from "./styles.module.scss";

export default function DetailsHeader({ content }) {
  return (
    <section className={styles.wrapper}>
      <span>{content}</span>
    </section>
  );
}
