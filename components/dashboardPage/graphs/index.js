import React from "react";
import styles from "./styles.module.scss";
import GoalGraph from "../../ui/graphs/goal";
import LearningGraph from "../../ui/graphs/learning";
import ProfileGraph from "../../ui/graphs/profile";

const Graphs = () => {
  return (
    <div className={styles.graphs}>
      <div className={styles.wrapper}>
        <h1>Welcome Kenneth</h1>

        <div className={styles.graphGrid}>
          <GoalGraph />
          <LearningGraph />
          <ProfileGraph size="140" />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
