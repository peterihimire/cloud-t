import React from "react";
import styles from "./styles.module.scss";

export default function ModalWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
