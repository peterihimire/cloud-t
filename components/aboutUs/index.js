import React from "react";
import styles from "./styles.module.scss";
import Companies from "../home/companies";
import Reviews from "../home/reviews";
import Outreach from "../home/outreach";

const aboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        <h1>We Make The World Even Better By Helping You Build Your Dream</h1>
        <a href="/" className="btn-primary btn-small">
          READ OUR STORY
        </a>
      </div>

      <div className={styles.firstContent}>
        <div className={styles.firstWrapper}>
          <Companies />

          <div className={styles.vision}>
            <div className={styles.visionCard}>
              <h2>Our Vision</h2>
              <p>
                Keep up with the latest in modern tech skills, including new
                course releases and certification exam updates, as well as
                learning tips and step-by-step tutorials from our instructors,
                best practices for businesses re-skilling their workforce, and
                more.
              </p>
            </div>

            <div className={styles.missionCard}>
              <h2>Our Mission</h2>
              <p>
                Keep up with the latest in modern tech skills, including new
                course releases and certification exam updates, as well as
                learning tips and step-by-step tutorials from our instructors,
                best practices for businesses re-skilling their workforce, and
                more.
              </p>
            </div>
          </div>

          <div className={styles.evolvement}>
            <h2>Our unprecedented evolvement</h2>
            <p>
              Keep up with the latest in modern tech skills, including new
              course releases and certification exam updates, as well as
              learning tips and step-by-step tutorials from our instructors,
              best practices for businesses re-skilling their workforce, and
              more.
            </p>

            <ul className={styles.yearlyGrowth}>
              <li>
                <h3>2019</h3>
                <div className={styles.yearEllipse}></div>
                <span>Founded Cloudticians</span>
              </li>
              <li>
                <h3>2020</h3>
                <div className={styles.yearEllipse}></div>
                <span>Launched Learning Platform</span>
              </li>
              <li>
                <h3>2021</h3>
                <div className={styles.yearEllipse}></div>
                <span>Over 2.5 Million registered Cloudticians Worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.numbers}>
        <div className={styles.numbersWrapper}>
          <div className={styles.numbersLeft}>
            <h2>The numbers don’t lie</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              enim tincidunt arcu mauris. Leo urna semper non vel. Nisl,
              tincidunt malesuada vitae vestibulum egestas enim. Et aliquet
              nullam scelerisque morbi orci. Convallis nunc viverra vitae
              pellentesque praesent egestas enim, in neque. Lacus ut nulla
              ultrices amet urna,.
            </p>
          </div>

          <div className={styles.numbersRight}>
            <div className={styles.numbersStats}>
              <h3>2.5 Million</h3>
              <span>Active Cloudticians</span>
            </div>
            <div className={styles.numbersStats}>
              <h3>2,000+</h3>
              <span>Learning Resources</span>
            </div>
            <div className={styles.numbersStats}>
              <h3>50</h3>
              <span>Achievement Awards</span>
            </div>
          </div>
        </div>
      </div>

      <Reviews />

      <Outreach />

      <div className={styles.outro}>
        <h2>The Cloudticians Community</h2>
        <p>
          Make learning a shared experience. Our forum is a great area to ask
          questions, give advice, and get answers from other clouditcians – as
          well as our instructors.
        </p>
        <a href="/" className="btn-primary btn-medium">
          EXPLORE COMMUNITY
        </a>
      </div>
    </div>
  );
};

export default aboutUs;
