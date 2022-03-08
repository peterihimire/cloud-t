import React, { useState } from "react";
import styles from "./styles.module.scss";
import OnboardingStepper from "../ui/onboardingStepper";
import StepThree from "./stepThree";
import StepOne from "./stepOne";

const OnboardingStep = () => {
  const [step, setStep] = useState(1);

  const stepHandler = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.onboarding}>
      <div className={styles.leadWrap}>
        <h1>Hi! Kenneth 👋</h1>
        <p className={styles.lead}>
          Welcome to the Cloudticians, we have tons of learning resources to
          share with you and we will need you to help us streamline your
          experience by inputing your role below.
        </p>
      </div>

      <OnboardingStepper step={step}>
        <div
          className={`${styles.stepContent} ${step === 3 ? styles.mt274 : ""}`}
        >
          {step < 3 && <StepOne clicked={stepHandler} step={step} />}
          {step === 3 && <StepThree />}
        </div>
      </OnboardingStepper>
    </div>
  );
};

export default OnboardingStep;
