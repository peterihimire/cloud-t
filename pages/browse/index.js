import React from "react";
import Layout from "../../layouts/landing";
import BrowseIndex from "../../components/browse";

const Browse = () => {
  return (
    <>
      <BrowseIndex />
    </>
  );
};

export default Browse;

Browse.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
