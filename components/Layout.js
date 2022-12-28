import React from "react";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-gray-100">
      <Head>
        <title>ARTISM</title>
      </Head>
      <Header>
        <Header />
      </Header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
