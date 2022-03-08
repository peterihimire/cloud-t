import React from "react";
import Layout from "../../layouts/landing";
import InsightsReadIndex from "../../components/insightsRead";

const InsightRead = () => {
  return (
    <>
      <InsightsReadIndex />
    </>
  );
};

// export async function getServerSideProps({ query }) {
//   const courseProps = {
//     title: query.title,
//     rating: query.rating,
//     enrolls: query.enrolls,
//   };

//   return {
//     props: { courseProps },
//   };
// }

export default InsightRead;

InsightRead.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
