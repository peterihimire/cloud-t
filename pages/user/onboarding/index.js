import React from "react";
import Layout from "../../../layouts/login";
import OnboardingStep from "../../../components/onboarding";

const Onboarding = () => {
  return (
    <>
      <OnboardingStep />
    </>
  );
};

export default Onboarding;

Onboarding.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
