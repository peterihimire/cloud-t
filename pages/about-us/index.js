import React from "react";
import Layout from "../../layouts/landing";
import AboutUsIndex from "../../components/aboutUs";

const AboutUs = () => {
  return (
    <>
      <AboutUsIndex />
    </>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
