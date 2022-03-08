import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../hoc/activeLink";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img alt="" src="/images/Cloudtician Logo.svg" />
            </div>
            <div className={styles.socials}>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.footerLinks}>
              <h5>COMPANY</h5>

              <ul className={styles.footerLinksList}>
                <li>
                  <ActiveLink name="About Us" href="/about-us" />
                </li>
                <li>
                  <ActiveLink name="Careers" href="/careers">
                    <span>(We are hiring)</span>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink name="Insights" href="/insights" />
                </li>
                <li>
                  <ActiveLink name="Contact Sales" href="/contact-sales" />
                </li>
                <li>
                  <ActiveLink name="Pricings" href="/pricings" />
                </li>
                <li>
                  <ActiveLink name="For Business" href="/business" />
                </li>
                <li>
                  <ActiveLink name="For Individuals" href="/individuals" />
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h5>RESOURCES</h5>

              <ul className={styles.footerLinksList}>
                <li>
                  <ActiveLink name="Become An Instructor" href="/teach" />
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
                <li>
                  <a href="/">Affiliate Program</a>
                </li>
                <li>
                  <a href="/">Cloudticians.org</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h5>PLATFORM</h5>

              <ul className={styles.footerLinksList}>
                <li>
                  <ActiveLink name="Browse Library" href="/browse" />
                </li>
                <li>
                  <ActiveLink name="Case Studies" href="/case-studies" />
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <ActiveLink name="Webinars" href="/webinars" />
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h5>SUPPORT</h5>

              <ul className={styles.footerLinksList}>
                <li>
                  <ActiveLink name="Contact Us" href="/contact-us" />
                </li>
                <li>
                  <ActiveLink name="Help Center" href="/help-center" />
                </li>
                <li>
                  <a href="/">IP Whitelist</a>
                </li>
                <li>
                  <a href="/">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            @2021 - Cloudticians LMS is a registered trademark of
            cloudtician.org
          </div>

          <div className={styles.privacyTerms}>
            <ActiveLink href="/terms-of-service" name="- Terms of Service" />
            <ActiveLink href="/privacy" name="- Privacy Policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
