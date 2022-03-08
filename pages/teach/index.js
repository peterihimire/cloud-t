import React from "react";
import Layout from "../../layouts/landing";
import TeachIndex from "../../components/teach";

const Teach = () => {
  return (
    <>
      <TeachIndex />
    </>
  );
};

export default Teach;

Teach.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
