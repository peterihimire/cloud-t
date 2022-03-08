import React from "react";
import Layout from "../../layouts/landing";
import InsightIndex from "../../components/insights";

const Insights = () => {
  return (
    <>
      <InsightIndex />
    </>
  );
};

export default Insights;

Insights.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
