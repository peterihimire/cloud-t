import React from "react";
import RegisterIndex from "../../components/register";
import Layout from "../../layouts/landing";

const Register = () => {
  return (
    <>
      <RegisterIndex />
    </>
  );
};

export default Register;

Register.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
