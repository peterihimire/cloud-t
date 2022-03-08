import React from "react";
import styles from "./styles.module.scss";
import PricingCards from "./pricingCards";
import Companies from "../home/companies";
import Faqs from "../contactSales/faqs";
import Link from "next/link";

const pricingIndex = () => {
  return (
    <div className={styles.pricings}>
      <div className={styles.pricingsLead}>
        <p>THERE’S SOMETHING FOR EVERYONE</p>
        <h1>Choose plan that works best for you</h1>
      </div>

      <div className={styles.pricingSection}>
        <PricingCards />
      </div>

      <div className={styles.companiesSect}>
        <Companies />
      </div>

      <div className={styles.faqSect}>
        <Faqs />

        <p className={styles.contactLink}>
          Can't find what you are looking for?{" "}
          <Link href="/contact-sales">
            <a>CONTACT SALES</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default pricingIndex;
