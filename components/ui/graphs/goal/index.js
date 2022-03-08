import React from "react";
import styles from "./styles.module.scss";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const GoalGraph = () => {
  const router = useRouter();

  return (
    <div className={styles.goal}>
      <h2>Weekly Goal</h2>

      <div className={styles.graphBody}>
        <div className={styles.circle}>0/12</div>
        <div className={styles.goalInfo}>
          <p>You’ve got this! Start learning to reach your goal.</p>
          <span>Last Week: 0 minutes</span>
        </div>
      </div>

      <div className={styles.graphFooter}>
        <button
          className="btn-transparent"
          onClick={() => router.push("/user/settings")}
        >
          <EditOutlined />
          <span>EDIT GOAL</span>
        </button>
      </div>
    </div>
  );
};

export default GoalGraph;
