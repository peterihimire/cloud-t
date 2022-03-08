import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const monthlyPrices = ({ cardsClass }) => {
  return (
    <ul className={styles.priceList}>
      <li className={`${styles.priceCard} ${styles.alignEnd}`}>
        <div className={styles.priceFeatures}>
          <div className={styles.priceFeaturesHeader}></div>

          <ul className={styles.featuresInfo}>
            <li>
              <span className={styles.info}>Access to learning content</span>
            </li>
            <li>
              <span className={styles.info}>Certificate of Completion</span>
            </li>
            <li>
              <span className={styles.info}>1-1 Mentorship</span>
            </li>
            <li>
              <span className={styles.info}>Help & Support</span>
            </li>
            <li>
              <span className={styles.info}>Cloudtician Bootcamp</span>
            </li>
          </ul>
        </div>
      </li>

      <li className={`${styles.priceCard} ${cardsClass ? cardsClass : ""}`}>
        <h2 className={styles.priceTitle}>FREE</h2>
        <p className={styles.priceLead}>
          Kickstart your career with introductory courses
        </p>

        <div className={styles.price}>
          <div className={styles.priceCurr}>
            <span>$</span>
          </div>
          <div className={styles.priceInfo}>
            <h3>0</h3>
            <span className={styles.priceSmallText}>Per Month</span>
          </div>
        </div>

        <div className={styles.priceBtn}>
          <Link href="/register">
            <a className="btn-primary btn-small">GET STARTED</a>
          </Link>
        </div>

        <div className={styles.priceFeatures}>
          <div className={styles.priceFeaturesHeader}>
            <h2>Free</h2>
          </div>

          <ul className={styles.featuresInfo}>
            <li>
              <span className={styles.info}>Access to learning content</span>
              <span>Limited</span>
            </li>
            <li>
              <span className={styles.info}>Certificate of Completion</span>
              <span>
                <i className="far fa-horizontal-rule"></i>
              </span>
            </li>
            <li>
              <span className={styles.info}>1-1 Mentorship</span>
              <span>
                <i className="far fa-horizontal-rule"></i>
              </span>
            </li>
            <li>
              <span className={styles.info}>Help & Support</span>
              <span>
                <i className="far fa-horizontal-rule"></i>
              </span>
            </li>
            <li>
              <span className={styles.info}>Cloudtician Bootcamp</span>
              <span>
                <i className="far fa-horizontal-rule"></i>
              </span>
            </li>
          </ul>
        </div>
      </li>

      <li className={`${styles.priceCard} ${cardsClass ? cardsClass : ""}`}>
        <div className={styles.popularPrice}>
          <i className="far fa-tag"></i>
          <span>Most Popular</span>
        </div>

        <h2 className={styles.priceTitle}>STANDARD</h2>
        <p className={styles.priceLead}>
          Advance your career with even more knowledge
        </p>

        <div className={styles.price}>
          <div className={styles.priceCurr}>
            <span>$</span>
          </div>
          <div className={styles.priceInfo}>
            <h3>200</h3>
            <span className={styles.priceSmallText}>Per Month</span>
          </div>
        </div>

        <div className={styles.priceBtn}>
          {/* change this button to link */}
          <Link href="/register">
            <a className="btn-primary btn-small">SIGN UP</a>
          </Link>
        </div>

        <div className={styles.priceFeatures}>
          <div className={styles.priceFeaturesHeader}>
            <h2>Standard</h2>
          </div>

          <ul className={styles.featuresInfo}>
            <li>
              <span className={styles.info}>Access to learning content</span>
              <span>Unlimited</span>
            </li>
            <li>
              <span className={styles.info}>Certificate of Completion</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>1-1 Mentorship</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>Help & Support</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>Cloudtician Bootcamp</span>
              <span>
                <i className="far fa-horizontal-rule"></i>
              </span>
            </li>
          </ul>
        </div>
      </li>

      <li className={`${styles.priceCard} ${cardsClass ? cardsClass : ""}`}>
        <h2 className={styles.priceTitle}>PREMIUM</h2>
        <p className={styles.priceLead}>
          Advance your career with even more knowledge
        </p>

        <div className={styles.price}>
          <div className={styles.priceCurr}>
            <span>$</span>
          </div>
          <div className={styles.priceInfo}>
            <h3>431</h3>
            <span className={styles.priceSmallText}>Per Month</span>
          </div>
        </div>

        <div className={styles.priceBtn}>
          {/* change this button to link */}
          <Link href="/register">
            <a className="btn-primary btn-small">SIGN UP</a>
          </Link>
        </div>

        <div className={styles.priceFeatures}>
          <div className={styles.priceFeaturesHeader}>
            <h2>Premium</h2>
          </div>

          <ul className={styles.featuresInfo}>
            <li>
              <span className={styles.info}>Access to learning content</span>
              <span>Unlimited</span>
            </li>
            <li>
              <span className={styles.info}>Certificate of Completion</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>1-1 Mentorship</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>Help & Support</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
            <li>
              <span className={styles.info}>Cloudtician Bootcamp</span>
              <span>
                <img src="/images/checked10.svg" alt="" />
              </span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default monthlyPrices;
