import React from "react";
import styles from "./styles.module.scss";

const ratingStars = ({ rating }) => {
  return (
    <div className={styles.rateStars}>
      <i
        className={`fa-star ${rating > 0 ? styles.gold + " " + "fas" : "fal"}`}
      ></i>
      <i
        className={`fa-star ${rating > 1 ? styles.gold + " " + "fas" : "fal"}`}
      ></i>
      <i
        className={`fa-star ${rating > 3 ? styles.gold + " " + "fas" : "fal"}`}
      ></i>
      <i
        className={`fa-star ${rating > 4 ? styles.gold + " " + "fas" : "fal"}`}
      ></i>
      <i
        className={`fa-star ${rating >= 5 ? styles.gold + " " + "fas" : "fal"}`}
      ></i>
    </div>
  );
};

export default ratingStars;
