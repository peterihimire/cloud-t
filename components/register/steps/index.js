import React from "react";
import styles from "./styles.module.scss";
import Stepper from "../../ui/stepper";
import AccountDetails from "../accountDetails";
import PaymentDetails from "../paymentDetails";

const RegisterForm = ({ step, stepHandler, backHandler }) => {
  return (
    <div className={styles.regForm}>
      <div className={styles.formLead}>LET US KNOW YOU</div>
      <h1>Setup your account</h1>

      <Stepper step={step}>
        <div className={styles.stepContent}>
          {step === 1 && (
            <AccountDetails
              stepHandler={stepHandler}
              backHandler={backHandler}
            />
          )}

          {step === 2 && (
            <>
              <PaymentDetails
                stepHandler={stepHandler}
                backHandler={backHandler}
              />

              <div className={styles.orderSummary}>
                <div className={styles.orderSumContent}>
                  <h4>Order Summary</h4>

                  <ul className={styles.sumList}>
                    <li>
                      <span className={styles.sumLeft}>CHOOSEN PLAN</span>
                      <span className={styles.sumRight}>Standard Plan</span>
                    </li>
                    <li>
                      <span className={styles.sumLeft}>AMOUNT</span>
                      <span className={styles.sumRight}>$200</span>
                    </li>
                    <li className={styles.sumDiscount}>
                      <span className={styles.sumLeft}>
                        DISCOUNT <span>(-45%)</span>
                      </span>
                      <span className={styles.sumRight}>- $90</span>
                    </li>
                    <li className={styles.justifyEnd}>
                      <span className={styles.sumLeft}>Sub-Total</span>
                      <span className={styles.sumRight}>$110</span>
                    </li>
                    <li className={styles.justifyEnd}>
                      <span className={styles.sumLeft}>Estimated Tax</span>
                      <span className={styles.sumRight}>$0</span>
                    </li>
                    <li className={styles.sumTotal}>
                      <span className={styles.sumLeft}>TOTAL</span>
                      <span className={styles.sumRight}>$110</span>
                    </li>
                  </ul>
                </div>

                <div className={styles.sumInfo}>
                  <p>
                    Cloudtician.com is required by law to collect transaction
                    taxes such as sales tax, VAT, GST or other similar taxes on
                    purchases in some jurisdictions. The actual tax amount will
                    be calculated based on the applicable jurisdictional tax
                    rates when your order is processed.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Stepper>
    </div>
  );
};

export default RegisterForm;
