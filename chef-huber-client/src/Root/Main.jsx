import React from "react";
import Header from "../Comonents/Shared/Header";
import Footer from "../Comonents/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <main
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   minHeight: "100vh",
        // }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <div className="flex-grow"></div>
        <Outlet />
        {/* <div className="flex-grow" style={{ flexGrow: "1" }}></div> */}
        <Footer />
      </main>
    </div>
  );
};

export default Main;
