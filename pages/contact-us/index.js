import React from "react";
import Layout from "../../layouts/landing";
import ContactUsIndex from "../../components/contactUs";

const ContactUs = () => {
  return (
    <>
      <ContactUsIndex />
    </>
  );
};

export default ContactUs;

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
