import React from "react";
import styles from "./styles.module.scss";
import Video from "../../ui/customVideo";
import Link from "next/link";

const StepThree = () => {
  return (
    <>
      <div className={styles.onboardingVideo}>
        <Video wrapperClass={styles.video} />
      </div>
      <div className={styles.content}>
        <h2>Don’t know where to begin?</h2>
        <p>Here are some recommendations for you</p>

        <div className={styles.contentWrap}>
          <div className={styles.grid}>
            <div className={styles.gridLeft}>
              <div className={styles.gridImg}>
                <img alt="" src="/images/step1.png" />
              </div>
              <div className={styles.gridText}>
                <h3>PRACTICE EXAMS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                  amet, mauris sit sapien at.{" "}
                </p>
              </div>
            </div>
            <div className={styles.gridRight}>
              <a className="btn-primary" href="/">
                OPEN
              </a>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridLeft}>
              <div className={styles.gridImg}>
                <img alt="" src="/images/step2.png" />
              </div>
              <div className={styles.gridText}>
                <h3>AWS Certified Solutions Architect- Associate (SAA-C02)</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                  amet, mauris sit sapien at.{" "}
                </p>
              </div>
            </div>
            <div className={styles.gridRight}>
              <a href="/" className="btn-primary">
                START NOW
              </a>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridLeft}>
              <div className={styles.gridImg}>
                <img alt="" src="/images/step3.png" />
              </div>
              <div className={styles.gridText}>
                <h3>AWS Certified Developer - Associate 2020</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                  amet, mauris sit sapien at.{" "}
                </p>
              </div>
            </div>
            <div className={styles.gridRight}>
              <a href="/" className="btn-primary">
                START NOW
              </a>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridLeft}>
              <div className={styles.gridImg}>
                <img alt="" src="/images/step4.png" />
              </div>
              <div className={styles.gridText}>
                <h3>AWS Certified Cloud Practitioner (CLF-C01)</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  suspendisse ac posuere elit. Arcu, facilisis nisl, integer at
                  amet, mauris sit sapien at.{" "}
                </p>
              </div>
            </div>
            <div className={styles.gridRight}>
              <a href="/" className="btn-primary">
                START NOW
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contentOutro}>
          <h3>Can’t find what you need?</h3>
          <Link href="/user/browse">
            <a className="btn-primary">BROWSE COURSES</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepThree;
