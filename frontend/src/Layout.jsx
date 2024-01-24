import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainNavigation from "./shared/components/navigation/MainNavigation";

const Layout = () => {
  return (
    <div className="layout">
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
