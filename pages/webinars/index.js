import React from "react";
import Layout from "../../layouts/landing";
import WebinarIndex from "../../components/webinars";

const Webinars = () => {
  return (
    <>
      <WebinarIndex />
    </>
  );
};

export default Webinars;

Webinars.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
