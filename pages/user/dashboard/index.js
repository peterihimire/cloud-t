import React from "react";
import Layout from "../../../layouts/dashboard";
import Graphs from "../../../components/dashboardPage/graphs";
import ContinueLearning from "../../../components/dashboardPage/continueLearning";
import RoleBase from "../../../components/dashboardPage/roleBase";
import Recommended from "../../../components/dashboardPage/recommended";
import CourseBase from "../../../components/dashboardPage/courseBase";
import RecommendedCert from "../../../components/dashboardPage/recommendedCert";
import LearningPaths from "../../../components/dashboardPage/learningPaths";
import GrowSkills from "../../../components/dashboardPage/grow";
import Trending from "../../../components/dashboardPage/trending";

const Dashboard = () => {
  return (
    <>
      <Graphs />
      <ContinueLearning />
      <RoleBase />
      <Recommended />
      <CourseBase />
      <RecommendedCert />
      <LearningPaths />
      <GrowSkills />
      <Trending />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
