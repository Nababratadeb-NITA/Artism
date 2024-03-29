import React from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout bg-gray-100">
        <Head>
          <title>ARTISM</title>
        </Head>
          <Header />
        <main className="main-container">{children}</main>
      </div>
      <footer className="h-[1px] w-full bg-gray-300">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
