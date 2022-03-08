import React from "react";
import styles from "./styles.module.scss";
import RatingStars from "../../../ui/ratings";

const OverviewInfo = ({ rating }) => {
  return (
    <>
      <div className={styles.overviewInfo}>
        <div className={styles.overviewInfoLeft}>
          <div className={styles.overviewSkill}>
            <span>Skill Level:</span>
            <span>Intermediate</span>
          </div>
          <div className={styles.overviewDuration}>
            <span>Duration:</span>
            <span>6hr 30mins</span>
          </div>
          <div className={styles.overviewRatings}>
            <span>Ratings:</span>
            <RatingStars rating={rating} />
          </div>
        </div>
        <div className={styles.overviewInfoRight}>
          <p>
            Expand your AWS cloud skills with our constantly-updated AWS
            training and online course library. Whether you’re just finding your
            footing, interested in AWS certification training, or looking to go
            deep into advanced AWS course topics like serverless and machine
            learning, we’ve got you covered. Our digital courses get you
            hands-on with the cloud technology to reinforce concepts with
            real-world experience, and our engaging instructors make it easy to
            stay motivated, keep moving, and have some fun along the way.
          </p>
        </div>
      </div>

      <div className={styles.tabOverviewReq}>
        <h3>Requirements</h3>
        <div className={styles.requirements}>
          <div className={styles.requirement}>
            <div className={styles.reqLeft}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.reqRight}>
              <p>
                As a new beginner, you will require to own a laptop and a fast
                nternet connection
              </p>
            </div>
          </div>
          <div className={styles.requirement}>
            <div className={styles.reqLeft}>
              <i className="far fa-check"></i>
            </div>
            <div className={styles.reqRight}>
              <p>
                Willingness and desire to learn and try out something new
                everyday
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.author}>
        <h3>About Author</h3>

        <div className={styles.authorInfo}>
          <div className={styles.authorInfoLeft}>
            <div className={styles.authorImg}>
              <img alt="" src="/images/author.png" />
            </div>
            <span className={styles.authorName}>Daniel Kadiri</span>
          </div>

          <div className={styles.authorInfoRight}>
            <p>
              Daniel Kadiri is the New York Times bestselling author of
              Switching Career to DevOps. He was named a Publishers Weekly
              Flying Start. Adam was born and raised in the Bronx. He was a
              bookseller before shifting to children’s publishing and has worked
              at a literary development company and a creative writing website
              for teens and as a book reviewer of children’s and young adult
              novels. He is tall for no reason and lives in Los Angeles.
            </p>

            <a href="/" className="hovered">
              MORE VIDEOS FROM DANIEL <i className="far fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewInfo;
