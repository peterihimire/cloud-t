import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const outro = ({ outroText, outroBtn, outroLink }) => {
  return (
    <section className={styles.outro}>
      <h3>{outroText}</h3>

      <Link href={outroLink}>
        <a className="btn-small btn-primary">{outroBtn}</a>
      </Link>
    </section>
  );
};

export default outro;
