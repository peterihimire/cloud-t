import React, { useState } from "react";
import styles from "./styles.module.scss";
import OverviewInfo from "./info";
import OverviewDesc from "./desc";

const overview = ({ rating }) => {
  const [userAuth, setUserAuth] = useState(false);

  return (
    <div className={styles.tabOverview}>
      {!userAuth && <OverviewInfo rating={rating} />}

      {userAuth && <OverviewDesc />}
    </div>
  );
};

export default overview;
