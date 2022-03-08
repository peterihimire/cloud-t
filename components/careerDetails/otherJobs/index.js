import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const otherJobs = () => {
  return (
    <div className={styles.otherJobs}>
      <div className={styles.wrapper}>
        <h2>Other jobs you might like</h2>

        <p>
          Sorry about that, probably we have that position occupied. Kindly
          provide your email address below and we will always send you recent
          openings whenever they are available
        </p>

        <ul className={styles.jobsGrid}>
          <li>
            {/* this link is to a dynamic route */}
            <Link href="/careers/123">
              <a>
                <h4>Research Analyst</h4>
                <div className={styles.jobTags}>
                  <span>
                    <i className="fal fa-clock"></i> Full-Time
                  </span>

                  <span>
                    <i className="fal fa-map-marker-alt"></i> Temporarily Remote
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/careers/123">
              <a>
                <h4>QA Tester</h4>
                <div className={styles.jobTags}>
                  <span>
                    <i className="fal fa-clock"></i> Full-Time
                  </span>

                  <span>
                    <i className="fal fa-map-marker-alt"></i> Houston, Texas
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/careers/123">
              <a>
                <h4>Business Development Manager</h4>
                <div className={styles.jobTags}>
                  <span>
                    <i className="fal fa-clock"></i> Contract
                  </span>

                  <span>
                    <i className="fal fa-map-marker-alt"></i> Temporarily Remote
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/careers/123">
              <a>
                <h4>Snr. DevOps Engineer</h4>
                <div className={styles.jobTags}>
                  <span>
                    <i className="fal fa-clock"></i> Contract
                  </span>

                  <span>
                    <i className="fal fa-map-marker-alt"></i> Temporarily Remote
                  </span>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default otherJobs;
