import React from "react";
import Settings from "../../../components/settings/index";
import Dashboard from "../../../layouts/dashboard";

export default function SettingsRoute() {
  return <Settings />;
}

SettingsRoute.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
