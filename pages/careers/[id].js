import React from "react";
import Layout from "../../layouts/landing";
import CareerDetailsIndex from "../../components/careerDetails";

const CareerDetails = () => {
  return (
    <>
      <CareerDetailsIndex />
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

export default CareerDetails;

CareerDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
