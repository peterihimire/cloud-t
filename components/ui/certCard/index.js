import React from "react";
import styles from "./styles.module.scss";

const CertCard = ({ href, src, alt, title, desc }) => {
  return (
    <a href={href} className={styles.certsCard}>
      <div className={styles.certsCardImg}>
        <img src={src} alt={alt} loading="lazy" />
      </div>

      <div className={styles.certsCardBody}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default CertCard;
