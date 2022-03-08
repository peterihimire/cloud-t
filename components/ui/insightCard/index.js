import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const InsightCard = ({ alt, src, title, desc, label, link }) => {
  return (
    <Link href={link}>
      <a className={styles.insightCard}>
        <div className={styles.cardImg}>
          <img alt={alt} src={src} />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>

          <div className={styles.desc}>
            <p>{desc}</p>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <p>{label}</p>
        </div>
      </a>
    </Link>
  );
};

export default InsightCard;
