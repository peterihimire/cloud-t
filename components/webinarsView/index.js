import React from "react";
import styles from "./styles.module.scss";
import Video from "../ui/customVideo";
import Benefit from "./benefit";
import Interest from "./interest";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const webinarViewIndex = () => {
  return (
    <div className={styles.webinarView}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.webinarInfo}>
            <span>
              <UserOutlined className={styles.iconn} />
              Mayowa Adegunwa, Falade Sunday
            </span>
            <span>
              <i className="far fa-calendar-alt"></i>
              23-24 August 2021
            </span>
          </div>

          <h1>Designing for Human Accessibility in a friendly way</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ac
            vitae dui, sit semper orci eu tincidunt. Sagittis viverra malesuada
            nibh diam nulla senectus justo, donec etiam. Donec hendrerit
            consequat.
          </p>

          <div className={styles.webinarActions}>
            <Link href="/register">
              <a className="btn-primary btn-small">REGISTER NOW</a>
            </Link>
            <button className={styles.alarmBtn}>
              <i className="far fa-clock"></i>
              SET ALARM
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <Video wrapperClass={styles.workVideo} />
        </div>
      </div>

      <Benefit />

      <Interest />
    </div>
  );
};

export default webinarViewIndex;
