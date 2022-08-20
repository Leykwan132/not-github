import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/components/Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <Toaster />
          <div className="h-screen overflow-y-scroll bg-black scrollbar-hide">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </RecoilRoot>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
