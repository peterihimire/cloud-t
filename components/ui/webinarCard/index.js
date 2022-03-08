import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";

const WebinarCard = ({ alt, src, title, date, host, href }) => {
  return (
    <div className={styles.webinarCard}>
      <div className={styles.cardImg}>
        <img alt={alt} src={src} />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
        </div>

        <div className={styles.cardDetails}>
          <span className={styles.date}>
            <i className="far fa-calendar-alt"></i>
            {date}
          </span>
          <span className={styles.hosts}>
            <UserOutlined className={styles.iconn} />
            {host}
          </span>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Link href={href}>
          <a className="btn-primary btn-block">View Details</a>
        </Link>
        <button className={styles.alarmBtn}>
          <i className="far fa-clock"></i>
          SET ALARM
        </button>
      </div>
    </div>
  );
};

export default WebinarCard;
