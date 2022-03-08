import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const courseCard = ({
  src,
  title,
  multiple,
  enrolls,
  rating,
  ratingNumber,
  alt,
  bordered,
}) => {
  // using course title for query params for now, might be probably course id

  // query: { title, rating, enrolls }

  // pathname: `/courses/course/id?title=${title}&rating=${rating}&enrolls=${enrolls}`,

  return (
    <Link
      href={{
        pathname: "/user/course-overview",
        // pathname: `/courses/aws/course`,
        // query: { title, rating, enrolls },
      }}
    >
      <a className={`${styles.courseCard} ${bordered ? styles.bordered : ""}`}>
        <div className={styles.courseImg}>
          <img alt={alt} src={src} loading="lazy" />
        </div>
        <div className={styles.courseCardBody}>
          <h5>{title}</h5>

          {multiple && (
            <p>
              {enrolls} <span>enrolled</span>
            </p>
          )}

          {!multiple && <p>{enrolls}</p>}

          <div className={styles.courseCardFooter}>
            <span className={styles.courseRating}>
              <i className="far fa-star"></i> {rating}
            </span>
            <span className={styles.courseRatingNo}>({ratingNumber})</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default courseCard;
