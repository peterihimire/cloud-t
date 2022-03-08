import React from "react";
import Layout from "../../layouts/landing";
import PricingIndex from "../../components/pricings";

const Pricing = () => {
  return (
    <>
      <PricingIndex />
    </>
  );
};

export default Pricing;

Pricing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
