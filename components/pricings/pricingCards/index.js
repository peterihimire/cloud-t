import React from "react";
import styles from "./styles.module.scss";
import MonthlyPrices from "../monthly";
import CustomSwitch from "../../ui/switch";

const pricingCards = ({ wrapperClass, cardsClass }) => {
  return (
    <div
      className={`${styles.pricingCards} ${wrapperClass ? wrapperClass : ""}`}
    >
      <div className={styles.pricingTabHeader}>
        {/* <button className={styles.active}>Monthly</button>
        <button>Yearly</button> */}
        <label className={styles.monthly} htmlFor="monthly">
          <span>Monthly</span>
          <CustomSwitch id="monthly" defaultChecked={true} />
        </label>

        <label className={styles.yearly}>
          <span>Yearly</span>
        </label>
      </div>

      <MonthlyPrices cardsClass={cardsClass} />
    </div>
  );
};

export default pricingCards;
