import React from "react";

import Nav from "../nav";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = ({ clicked, isOpen }) => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.headerWrapper}`}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/images/Cloudtician Logo.svg" />
            </a>
          </Link>
        </div>

        <Nav isOpen={isOpen} />

        <div className={styles.hamburgerBtn}>
          <button
            type="button"
            aria-label="navigation button"
            onClick={clicked}
            className={`hamburger hamburger--vortex ${
              isOpen ? "is-active" : ""
            }`}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
