import React from "react";
import Layout from "../../layouts/landing";
import IndividualsIndex from "../../components/individuals";

const Individuals = () => {
  return (
    <>
      <IndividualsIndex />
    </>
  );
};

export default Individuals;

Individuals.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
