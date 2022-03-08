import React from "react";
import Layout from "../../../layouts/dashboard";
import SingleCourseIndex from "../../../components/singleCourse";

const SingleCourse = ({ courseProps }) => {
  return (
    <>
      <SingleCourseIndex {...courseProps} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const courseProps = {
    title: query.title,
    rating: query.rating,
    enrolls: query.enrolls,
  };

  if (!query.title || !query.rating || !query.enrolls) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: { courseProps },
  };
}

export default SingleCourse;

// might need to change layouts based on user auth
SingleCourse.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
