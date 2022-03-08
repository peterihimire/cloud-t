import React from "react";
import styles from "./styles.module.scss";

const LoadMore = () => {
  return (
    <div className={styles.loadMore}>
      <div className={styles.loader}>
        <img alt="" src="/images/Loading_2.gif" />
      </div>

      <div className={styles.text}>Loading More</div>
    </div>
  );
};

export default LoadMore;
