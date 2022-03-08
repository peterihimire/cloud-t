import React from "react";
import Layout from "../../../layouts/dashboard";
import DashBrowse from "../../../components/dashBrowse";

const Browse = () => {
  return (
    <>
      <DashBrowse />
    </>
  );
};

export default Browse;

Browse.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
