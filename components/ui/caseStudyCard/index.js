import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const CaseStudyCard = ({ alt, src, title, desc, tag, variant, href }) => {
  return (
    <Link href={href}>
      <a className={styles.caseStudyCard}>
        {/* handle dynamic background of cardImg*/}
        <div className={styles.cardImg} style={{ backgroundColor: variant }}>
          <img alt={alt} src={src} />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>
            <h3>{title}</h3>
          </div>

          <div className={styles.cardDesc}>
            <p>{desc}</p>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <p>{tag}</p>
        </div>
      </a>
    </Link>
  );
};

export default CaseStudyCard;
