import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
  );
};

export default MyApp;
