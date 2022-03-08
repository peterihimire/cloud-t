import React from "react";
import Layout from "../../../layouts/dashboard";
import ProfilePage from "../../../components/profile";

const Profile = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
