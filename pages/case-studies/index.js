import React from "react";
import Layout from "../../layouts/landing";
import CaseStudiesIndex from "../../components/caseStudies";

const CaseStudies = () => {
  return (
    <>
      <CaseStudiesIndex />
    </>
  );
};

export default CaseStudies;

CaseStudies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
