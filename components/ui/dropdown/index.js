import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../hoc/activeLink";
import { useRouter } from "next/router";

const dropdown = ({ wrapperClass, src, clicked, show, ...props }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.dropdown} ${wrapperClass ? wrapperClass : ""}`}
      {...props}
    >
      <button type="button" onClick={clicked}>
        <img alt="" loading="lazy" src={src} />
        <i className="fas fa-chevron-down"></i>
      </button>

      <div
        className={`${styles.dropmenu} hide-scrollbar ${
          show ? styles.open : ""
        }`}
        onClick={(e) => e.stopPropagation()}
        id="dropdown-menu"
      >
        <ul onClick={(e) => e.stopPropagation()}>
          <li className={styles.info}>
            <div className={styles.avatar}>
              <img alt="" src="/images/user.png" />
            </div>
            <div className={styles.infoRight}>
              <p>Lucky Onoriode</p>
              <span>luckyeonoriode@gmail.com</span>
            </div>
          </li>

          <li>
            <button
              className="btn-primary"
              onClick={() => router.push("/user/settings")}
            >
              Upgrade Plan
            </button>
          </li>

          <li>
            <ActiveLink href="/user/settings" name="Account Settings" />
          </li>

          <li>
            <ActiveLink href="/user/profile" name="User Profile" />
          </li>

          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default dropdown;
