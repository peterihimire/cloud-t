import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import DashIcon from "../../../../public/images/dashboardIcon.svg";
import BrowseIcon from "../../../../public/images/browseIcon.svg";
import LabIcon from "../../../../public/images/LabIcon.svg";
import PlaygroundIcon from "../../../../public/images/playgroundIcon.svg";
import BusinessIcon from "../../../../public/images/businessIcon.svg";
import Input from "../../customInput";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Dropdown from "../../dropdown";
import ActiveLink from "../../../../hoc/activeLink";
import { useRouter } from "next/router";

const DashboardNav = ({ isOpen }) => {
  const [showProfile, setShowProfile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowProfile(false);
  }, [router.pathname]);

  useEffect(() => {
    const hideProfile = () => {
      setShowProfile(false);
    };

    document.body.addEventListener("click", hideProfile);

    return () => {
      document.body.removeEventListener("click", hideProfile);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
      <ul className={styles.navLinks}>
        <li>
          <ActiveLink
            href="/user/dashboard"
            linkClass={`${styles.navLink} ${
              router.pathname === "/user/dashboard" ? styles.activeLink : ""
            }`}
          >
            <DashIcon />
            <span>Dashboard</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/user/browse"
            linkClass={`${styles.navLink} ${
              router.pathname === "/user/browse" ? styles.activeLink : ""
            }`}
          >
            <BrowseIcon />
            <span>Browse</span>
          </ActiveLink>
        </li>
        <li>
          <a href="/" className={styles.navLink}>
            <LabIcon />
            <span>Labs</span>
          </a>
        </li>
        <li>
          <a href="/" className={styles.navLink}>
            <PlaygroundIcon />
            <span>Playground</span>
          </a>
        </li>
        <li>
          <a href="/" className={styles.navLink}>
            <BusinessIcon />
            <span>Business</span>
          </a>
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.search}>
          <Input
            innerLabel
            id="search"
            type="text"
            placeholder="Search for content"
            wrapperClass={styles.searchWrapper}
          >
            {/* <i className="far fa-search"></i> */}
            <img alt="" src="/images/search.svg" />
          </Input>
        </div>

        <div className={styles.helpBtn}>
          <button>
            <QuestionCircleOutlined />
          </button>
        </div>

        <div className={styles.profileDrop}>
          <Dropdown
            src="/images/user.png"
            show={showProfile}
            clicked={(e) => {
              e.stopPropagation();

              setShowProfile(!showProfile);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
