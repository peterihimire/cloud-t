import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const expandCareer = () => {
  return (
    <section className={styles.expandCareer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>DARE TO DREAM?</h3>

          <h2>Expand your career opportunities with hand-on experience</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>

          <div className={styles.expandGrid}>
            <div className={styles.expandCard}>
              <div className={styles.left}>
                <i className="far fa-lightbulb"></i>
              </div>
              <div className={styles.right}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur.
                </p>
              </div>
            </div>
            <div className={styles.expandCard}>
              <div className={styles.left}>
                <i className="far fa-lightbulb"></i>
              </div>
              <div className={styles.right}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur.
                </p>
              </div>
            </div>
            <div className={styles.expandCard}>
              <div className={styles.left}>
                <i className="far fa-lightbulb"></i>
              </div>
              <div className={styles.right}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur.
                </p>
              </div>
            </div>
            <div className={styles.expandCard}>
              <div className={styles.left}>
                <i className="far fa-lightbulb"></i>
              </div>
              <div className={styles.right}>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit. Id u consectetur.
                </p>
              </div>
            </div>
          </div>

          <Link href="/browse">
            <a className="hovered">
              Explore courses <i className="far fa-chevron-right"></i>
            </a>
          </Link>
        </div>

        <div className={styles.right}>
          <img src="/images/expand-logos.svg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default expandCareer;
