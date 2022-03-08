import React from "react";
import styles from "./styles.module.scss";
import Outro from "../home/outro";
import Link from "next/link";

const TeachIndex = () => {
  return (
    <div className={styles.teach}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1>Inspire creativity in every human</h1>
          <p>
            Teach on Cloudticians and share your passion with members around the
            world.
          </p>
          <Link href="/register">
            <a className="btn-primary btn-small">SIGN UP TO TEACH</a>
          </Link>
        </div>
      </div>

      <div className={styles.whyTeach}>
        <div className={styles.whyWrapper}>
          <h2>Why teach on Cloudticians</h2>
          <p>
            It's satisfying in more ways than one when you assist others on
            their creative path. You can increase your online following, give
            back, and make money by teaching on Cloudticians. Top-earning
            instructors earn more than $100,000 each year.
          </p>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.cardImg}>
                <img alt="" src="/images/whygrid1.svg" loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <p>
                  Teaching on Cloudticians allows me to focus my time and money
                  on the projects that I am most enthusiastic about.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <p>Daniel Kadiri</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardImg}>
                <img alt="" src="/images/whygrid2.svg" loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <p>
                  It's been incredibly great to be a part of this encouraging
                  initiative while also developing my personal voice and
                  freelance practice.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <p>Irene Shuaib</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.cardImg}>
                <img alt="" src="/images/whygrid3.svg" loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <p>
                  Teaching on Cloudticians allows me to focus my time and money
                  on the projects that I am most enthusiastic about.
                </p>
              </div>
              <div className={styles.cardFooter}>
                <p>Kenneth Eguakun</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scale}>
        <div className={styles.lead}>
          <p>THEY SCALE WELL</p>
          <h2>
            How Individuals and Organizations are using the skills assessment
          </h2>
        </div>

        <div className={styles.scaleWrapper}>
          <div className={styles.card}>
            <img src="/images/brain 1.svg" alt="" loading="lazy" />
            <h3>Understanding Skillset</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus .
            </p>
          </div>

          <div className={styles.card}>
            <img src="/images/suitcase 2.svg" alt="" loading="lazy" />
            <h3>Hire Right People</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus .
            </p>
          </div>

          <div className={styles.card}>
            <img src="/images/roi.svg" alt="" loading="lazy" />
            <h3>Return on Investment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna,
              ac vitae dui, sit semper orci eu tincidunt. Sagittis viverra
              malesuada nibh diam nulla senectus .
            </p>
          </div>
        </div>
      </div>

      <div className={styles.article}>
        <div className={styles.left}>
          <img alt="" src="/images/teachman.png" loading="lazy" />
        </div>

        <div className={styles.right}>
          <h2>
            Teaching on Cloudticians helped Jeremiah Gyang see his work in a
            whole new way, and inspire members all over the world.
          </h2>

          <a href="/" className="btn-primary btn-small">
            <i className="fal fa-play-circle"></i>
            WATCH HIS STORY
          </a>
        </div>
      </div>

      <Outro
        outroLink="/register"
        outroBtn="SIGN UP TO TEACH"
        outroText="Do you want to change the world with your passion?"
      />
    </div>
  );
};

export default TeachIndex;
