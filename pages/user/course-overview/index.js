import React from "react";
import Layout from "../../../layouts/dashboard";
import CourseOverview from "../../../components/courseOverview/CourseOverview";

const CourseOverviewUser = () => {
  return (
    <div>
      <CourseOverview />
    </div>
  );
};

export default CourseOverviewUser;

CourseOverviewUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
