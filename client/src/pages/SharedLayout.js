import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/SharedLayoutWrapper";
import { Navbar } from "../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Navbar />
        <div></div>
      </main>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
