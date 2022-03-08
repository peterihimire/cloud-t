import React from "react";
import styles from "./styles.module.scss";

const CertCourseCard = ({ src, alt, title }) => {
  return (
    <div className={styles.certCourse}>
      <div className={styles.left}>
        <img alt={alt} src={src} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>

        <div className={styles.cardLink}>
          <a href="/" className="hovered">
            EXPLORE COURSE <i className="far fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertCourseCard;
