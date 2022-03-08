import React from "react";
import Layout from "../../layouts/landing";
import HelpCenterIndex from "../../components/helpCenter";

const HelpCenter = () => {
  return (
    <>
      <HelpCenterIndex />
    </>
  );
};

export default HelpCenter;

HelpCenter.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
