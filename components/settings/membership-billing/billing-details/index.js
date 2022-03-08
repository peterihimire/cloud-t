import React from "react";
import styles from "./styles.module.scss";
import DetailsHeader from "../billing-header/DetailsHeader";

export default function BillingDetails() {
  return (
    <section className={styles.wrapper}>
      <DetailsHeader {...{ content: "Billing Details" }} />
      <section className={styles.billingWrapper}>
        <div className={styles.flex}>
          <aside className={styles.name}>
            <span>Lucky Onoriode</span>
            <div className={styles.email}>
              <span>luckyonoriode@gmail.com</span>
            </div>
          </aside>
          <aside className={styles.address}>
            <span>
              9908 Glenkirk Way Bowie, Maryland 20721 <br />
              United States (US)
            </span>
          </aside>
        </div>
        <div className={styles.button}>
          <button
            className="btn-primary btn-small"
            style={{ borderRadius: "3px", height: "48px" }}
          >
            Edit Details
          </button>
        </div>
      </section>

      <DetailsHeader {...{ content: "Payment Method" }} />

      <section className={styles.paymentWrapper}>
        <div className={styles.flex}>
          <aside>
            <img
              src="/images/Mastercard.png"
              alt="mastercard icon"
              style={{ width: "100%", height: "30px", objectFit: "contain" }}
            />
          </aside>
          <aside className={styles.name}>
            <span>Pay with Mastercard ending in 7502 expires Apr 2024</span>
          </aside>
        </div>
        <div className={styles.button}>
          <button
            className="btn-primary btn-medium"
            style={{ borderRadius: "3px", height: "48px" }}
          >
            Update payment Method
          </button>
        </div>
      </section>

      <DetailsHeader {...{ content: "View Billing History" }} />

      <section>
        <button
          className="btn-primary btn-medium"
          style={{
            borderRadius: "3px",
            marginTop: "30px",
            textTransform: "uppercase",
            height: "48px",
          }}
        >
          View billing history
        </button>
      </section>
    </section>
  );
}
