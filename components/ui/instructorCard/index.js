import React from "react";
import styles from "./styles.module.scss";

const InstructorCard = ({
  alt,
  src,
  title,
  role,
  desc,
  facebook,
  twitter,
  linkedIn,
}) => {
  return (
    <div className={styles.instructorCard}>
      <div className={styles.cardImg}>
        <img alt={alt} src={src} />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
          <p>{role}</p>
        </div>

        <div className={styles.cardDesc}>
          <p>{desc}</p>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <a href={facebook}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href={twitter}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href={linkedIn}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default InstructorCard;
