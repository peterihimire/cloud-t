import React from "react";
import Layout from "../../layouts/landing";
import HandsOnLearningIndex from "../../components/handsOnLearning";

const HandsOnLearning = () => {
  return (
    <>
      <HandsOnLearningIndex />
    </>
  );
};

export default HandsOnLearning;

HandsOnLearning.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
