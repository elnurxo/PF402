import React from "react";
import Header from "../../layout/Header";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;
