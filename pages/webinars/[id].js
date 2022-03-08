import React from "react";
import Layout from "../../layouts/landing";
import WebinarViewIndex from "../../components/webinarsView";

const WebinarView = () => {
  return (
    <>
      <WebinarViewIndex />
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

export default WebinarView;

WebinarView.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
