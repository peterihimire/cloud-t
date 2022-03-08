import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ActiveLink from "../../../hoc/activeLink";
import Link from "next/link";
import styles from "./styles.module.scss";

const Nav = ({ isOpen }) => {
  const [showPlatform, setShowPlatform] = useState(false);

  const [showResources, setShowResources] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowPlatform(false);
    setShowResources(false);
  }, [router.pathname]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink href="/browse" name="Browse" linkClass={styles.navLink} />
        </li>

        <li className={styles.hasDropdown}>
          <button
            className={styles.hasDropdownBtn}
            onClick={() => {
              setShowPlatform(!showPlatform);
            }}
          >
            <span>Platform</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              showPlatform ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <ul className={styles.dropdownWrapper}>
                <li>
                  <Link href="/overview">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/overview.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>Overview</span>
                        <span className={styles.dropDesc}>
                          Take a closer look at our platform and how well we can
                          get you the result you desire
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/learning.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Learning Path</span>
                      <span className={styles.dropDesc}>
                        Customized learning programs based on the needs of teams
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href="/hands-on-learning">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/bulb brain 1.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>
                          Hands-on Labs
                        </span>
                        <span className={styles.dropDesc}>
                          Simulators of real-world cloud difficulties are easily
                          accessible.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/skills-assessment">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/skills.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>
                          Skills Assessment
                        </span>
                        <span className={styles.dropDesc}>
                          Quickly and simply map your company's cloud talent.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/rocket 1.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>
                        Accelerator Program
                      </span>
                      <span className={styles.dropDesc}>
                        Raise teams' cloud knowledge to a common level in a
                        short amount of time
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/cloud-computing 1.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>
                        Cloud Playground
                      </span>
                      <span className={styles.dropDesc}>
                        Try our risk-free cloud sandboxes for AWS, GCP and Azure
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className={styles.hasDropdown}>
          <button
            className={styles.hasDropdownBtn}
            onClick={() => {
              setShowResources(!showResources);
            }}
          >
            <span>Resources</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${styles.dropResources} ${
              showResources ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <ul className={styles.dropdownWrapper}>
                <li>
                  <Link href="/insights">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/blogs.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>Insights</span>
                        <span className={styles.dropDesc}>
                          Quickly and simply map your company's cloud talent.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/community.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Community</span>
                      <span className={styles.dropDesc}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href="/case-studies">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/case-study.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>
                          Case Studies
                        </span>
                        <span className={styles.dropDesc}>
                          Simulators of real-world cloud difficulties are easily
                          accessible.
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/bar-chart 1.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Infographics</span>
                      <span className={styles.dropDesc}>
                        Quickly and simply map your company's cloud talent.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link href="/webinars">
                    <a>
                      <div className={styles.dropIcon}>
                        <img src="/images/webinar.svg" />
                      </div>
                      <div className={styles.dropText}>
                        <span className={styles.dropTextHead}>Webinars</span>
                        <span className={styles.dropDesc}>
                          Raise teams' cloud knowledge to a common level in a
                          short amount of time
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <div className={styles.dropIcon}>
                      <img src="/images/ebooks.svg" />
                    </div>
                    <div className={styles.dropText}>
                      <span className={styles.dropTextHead}>Ebooks</span>
                      <span className={styles.dropDesc}>
                        Try our risk-free cloud sandboxes for AWS, GCP and Azure
                      </span>
                    </div>
                  </a>
                </li>
              </ul>

              <div className={styles.dropFeatured}>
                <div className={styles.dropFeaturedHead}>Featured Content</div>
                <div className={styles.dropFeaturedImg}>
                  <img src="/images/resource-featured.png" alt="resources" />
                </div>
                <div className={styles.dropFeaturedDesc}>
                  The Cloud Path: Engineering the pathway to success
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <ActiveLink
            href="/individuals"
            name="For Individuals"
            linkClass={styles.navLink}
          />
        </li>

        <li>
          <ActiveLink
            href="/business"
            name="For Business"
            linkClass={styles.navLink}
          />
        </li>

        <li>
          <ActiveLink
            href="/pricings"
            name="Pricings"
            linkClass={styles.navLink}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.searchBtn}>
          <button>
            <i className="far fa-search"></i>
          </button>
        </div>

        <ActiveLink href="/login" linkClass={styles.navLink} name="Sign In" />

        <div className={styles.regBtn}>
          <Link href="/register">
            <a className="btn-transparent btn-small">TRY FOR FREE</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
