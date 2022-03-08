import React from "react";
import Layout from "../../layouts/landing";
import ContactSalesIndex from "../../components/contactSales";

const ContactSales = () => {
  return (
    <>
      <ContactSalesIndex />
    </>
  );
};

export default ContactSales;

ContactSales.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
