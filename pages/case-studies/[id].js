import React from "react";
import Layout from "../../layouts/landing";
import CaseStudyRead from "../../components/caseStudyRead";

const SingleCaseStudy = ({ courseProps }) => {
  return (
    <>
      <CaseStudyRead />
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

export default SingleCaseStudy;

SingleCaseStudy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
