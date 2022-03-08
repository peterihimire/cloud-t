import React from "react";
import Layout from "../../../layouts/landing";
import CourseIndex from "../../../components/course";

const Course = () => {
  return (
    <>
      <CourseIndex />
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

export default Course;

Course.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
