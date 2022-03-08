import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const InsightPopularCard = ({ alt, src, title, label, desc, link }) => {
  return (
    <Link href={link}>
      <a className={styles.insightPopular}>
        <div className={styles.left}>
          <img alt={alt} src={src} />
        </div>

        <div className={styles.right}>
          <h4>{label}</h4>

          <div className={styles.title}>
            <h3>{title}</h3>
          </div>

          <div className={styles.desc}>
            <p>{desc}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default InsightPopularCard;
