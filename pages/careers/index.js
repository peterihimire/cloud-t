import React from "react";
import Layout from "../../layouts/landing";
import CareersIndex from "../../components/careers";

const Careers = () => {
  return (
    <>
      <CareersIndex />
    </>
  );
};

export default Careers;

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
